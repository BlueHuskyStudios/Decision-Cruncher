@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

import DecisionCruncher.Requirement.*
import DecisionCruncher.Requirement.IdealValue.*
import org.bh.tools.base.abstraction.*
import org.bh.tools.base.math.geometry.*
import org.bh.tools.base.util.*


/**
 * @author Ben Leggiero
 * @since 2018-03-10
 */
class Requirement(
        val id: String = IdManager.generateNewShortId(),
        val category: String?,
        override val name: String,
        val importance: Fraction,
        val idealValue: IdealValue
) : DecisionInput {
    override fun hashCode(): Int {
        return id.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        return this === other
                || (other as? Requirement ?: return false).id == other.id
    }


    sealed class IdealValue(minimumOutput: Fraction?, val unit: String?) {

        val minimumOutput = minimumOutput ?: 0.0

        abstract fun rawWeightFunction(actualInput: Fraction): Fraction


        /**
         * like this:
         * ```
         *  1─┼─          ╴
         *    │        ╱   |
         *    │      /      \
         *    │    /         |
         * m<─┼──╱            ╲─>
         *    │
         *   ─┼───────────┼────┼─
         *  0             i    1
         *
         * x = input
         * y = output
         * m = minimum output
         * i = ideal
         * ```
         */
        class fullRange(val lowestAcceptableInput: Fraction,
                        val highestAcceptableInput: Fraction,
                        idealValue: Fraction?,
                        minimumOutput: Fraction? = null,
                        unit: String?): IdealValue(minimumOutput, unit) {
            
            val idealValue = idealValue ?: 0.5

            val leftCurve = CubicBezierPathSegment(start = FractionPoint(0.0, this.minimumOutput),
                                                   startControlPoint = FractionPoint(this.idealValue / 2, this.minimumOutput),
                                                   endControlPoint = FractionPoint(this.idealValue / 2, 1.0),
                                                   end = FractionPoint(this.idealValue, 1.0))

            val rightCurve = CubicBezierPathSegment(start = FractionPoint(this.idealValue, 1.0),
                                                    startControlPoint = FractionPoint((1 + this.idealValue) / 2, 1.0),
                                                    endControlPoint = FractionPoint((1 + this.idealValue) / 2, this.minimumOutput),
                                                    end = FractionPoint(1.0, this.minimumOutput))

            override fun rawWeightFunction(actualInput: Fraction): Fraction {
                val distortedInput: Fraction

//                TODO("are these actually right?")

                return if (actualInput < idealValue) {
                    distortedInput = actualInput / idealValue
                    leftCurve.y(distortedInput)
                }
                else {
                    distortedInput = (actualInput - idealValue) / (1 - idealValue)
                    rightCurve.y(distortedInput)
                }
            }
        }


        /**
         * like this:
         * ```
         *  1─┼─           __╱──>
         *    │         _╱‾
         *    │       _/
         *    │    _╱‾
         * m<─┼─╱‾‾
         *    │
         *   ─┼────────────────┼─
         *  0                  1
         *
         * x = input
         * y = output
         * m = minimum output
         * ```
         */
        class higherIsBetter(val lowstAcceptableValue: Fraction,
                            minimumOutput: Fraction? = null,
                            unit: String?): IdealValue(minimumOutput, unit) {

            val curve = CubicBezierPathSegment(start = FractionPoint(0.0, this.minimumOutput),
                                               startControlPoint = FractionPoint(0.5, this.minimumOutput),
                                               endControlPoint = FractionPoint(0.5, 1.0),
                                               end = FractionPoint(1.0, 1.0)
            )

            override fun rawWeightFunction(actualInput: Fraction): Fraction {
                return curve.y(time = actualInput)
            }
        }


        /**
         * like this:
         * ```
         * 1<─┼─╲__
         *    │    ‾╲_
         *    │       \_
         *    │         ‾╲_
         *  m─┼─           ‾‾╲──>
         *    │
         *   ─┼────────────────┼─
         *  0                  1
         *
         * x = input
         * y = output
         * m = minimum output
         * ```
         */
        class lowerIsBetter(val highestAcceptableInput: Fraction,
                            minimumOutput: Fraction? = null,
                            unit: String?): IdealValue(minimumOutput, unit) {

            val curve = CubicBezierPathSegment(start = FractionPoint(0.0, 1.0),
                                               startControlPoint = FractionPoint(0.5, 1.0),
                                               endControlPoint = FractionPoint(0.5, this.minimumOutput),
                                               end = FractionPoint(1.0, this.minimumOutput)
            )

            override fun rawWeightFunction(actualInput: Fraction): Fraction {
                return curve.y(time = actualInput)
            }
        }


        /**
         * like this:
         * ```
         *  1─┼─          ╴
         *    │
         *    │
         *    │
         * m<─┼─────────── ─────>
         *    │
         *   ─┼───────────┼────┼─
         *  0             i    1
         *
         * x = input
         * y = output
         * m = minimum output
         * i = ideal
         * ```
         */
        class oneIdealInput(val idealInput: Fraction, val tolerance: Fraction,
                            minimumOutput: Fraction? = null,
                            unit: String?): IdealValue(minimumOutput, unit) {
            override fun rawWeightFunction(actualInput: Fraction): Fraction {
                return if (idealInput == actualInput
                        || idealInput >= (actualInput - tolerance)
                        || idealInput <= (actualInput + tolerance))
                    1.0
                else
                    minimumOutput ?: 0.0
            }
        }


        /**
         * Just throws away any input and always returns `0.5`
         */
        object meaninglessValue: IdealValue(null, null) {
            override fun rawWeightFunction(actualInput: Fraction): Fraction {
                return 0.5
            }
        }
    }
}
