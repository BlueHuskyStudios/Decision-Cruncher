@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

import DecisionCruncher.Requirement.*
import DecisionCruncher.Requirement.IdealValue.*
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


    sealed class IdealValue(val unit: String?) {

        abstract fun rawWeightFunction(actualValue: Double)

        /**
         * like this:
         * ```
         * 1─┼─          ╴
         *   │        ╱   |
         *   │      /      \
         *   │    /         |
         * m─┼──╱            ╲─
         *   │
         *  ─┼───────────┼────┼─
         * 0             n    1
         * ```
         */
        class fullRange(val lowestAcceptableValue: Double, val highestAcceptableValue: Double, val idealValue: Double?, unit: String?): IdealValue(unit) {
            override fun rawWeightFunction(actualValue: Double) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }
        }

        class leftOpenRange(val highestAcceptableValue: Double, unit: String?): IdealValue(unit) {
            override fun rawWeightFunction(actualValue: Double) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }
        }

        class rightOpenRange(val lowestAcceptableValue: Double, unit: String?): IdealValue(unit) {
            override fun rawWeightFunction(actualValue: Double) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }
        }

        class oneIdealValue(val idealValue: Double, unit: String?): IdealValue(unit) {
            override fun rawWeightFunction(actualValue: Double) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }
        }

        object meaninglessValue: IdealValue(null) {
            override fun rawWeightFunction(actualValue: Double) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }
        }

    }
}



private fun IdealValue.rawWeightFunction() : (Double) -> Double {
    when (this) {
        is fullRange -> {
            return
        }
    }
}
