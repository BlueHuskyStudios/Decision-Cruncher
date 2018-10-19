@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

import DecisionCruncher.Requirement.*
import DecisionCruncher.Requirement.IdealValue.*
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
        val importance: Double,
        val idealValue: IdealValue
) : DecisionInput {
    override fun hashCode(): Int {
        return id.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        return this === other
                || (other as? Requirement ?: return false).id == other.id
    }


    sealed class IdealValue(minimumOutput: Double?, val unit: String?) {

        val minimumOutput = minimumOutput ?: 0.0

        abstract fun rawWeightFunction(actualInput: Double): Double


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
        class fullRange(val lowestAcceptableInput: Double,
                        val highestAcceptableInput: Double,
                        val idealValue: Double?,
                        minimumOutput: Double? = null,
                        unit: String?): IdealValue(minimumOutput, unit) {

            val curve: BezierPath = TODO()

            override fun rawWeightFunction(actualInput: Double): Double {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
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
        class higherIsBetter(val highestAcceptableValue: Double,
                            minimumOutput: Double? = null,
                            unit: String?): IdealValue(minimumOutput, unit) {

            val curve: BezierPath = BezierPath(listOf(CubicBezierPathSegment(start = FractionPoint(0.0, this.minimumOutput),
                                                                             startControlPoint = FractionPoint(0.5, this.minimumOutput),
                                                                             endControlPoint = FractionPoint(0.5, 1.0),
                                                                             end = FractionPoint(1.0, 1.0)
                                                                             )))

            override fun rawWeightFunction(actualInput: Double): Double {
                return curve.allYValues(x = actualInput).first ?: minimumOutput
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
        class lowerIsBetter(val lowestAcceptableInput: Double,
                             minimumOutput: Double? = null,
                             unit: String?): IdealValue(minimumOutput, unit) {
            override fun rawWeightFunction(actualInput: Double): Double {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
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
        class oneIdealInput(val idealInput: Double, val tolerance: Double,
                            minimumOutput: Double? = null,
                            unit: String?): IdealValue(minimumOutput, unit) {
            override fun rawWeightFunction(actualInput: Double): Double {
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
            override fun rawWeightFunction(actualInput: Double): Double {
                return 0.5
            }
        }
    }
}
