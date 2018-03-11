@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

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
        class fullRange(val lowestAcceptableValue: Double, val highestAcceptableValue: Double, unit: String?): IdealValue(unit)
        class leftOpenRange(val highestAcceptableValue: Double, unit: String?): IdealValue(unit)
        class rightOpenRange(val lowestAcceptableValue: Double, unit: String?): IdealValue(unit)
        class oneIdealValue(val idealValue: Double, unit: String?): IdealValue(unit)
        object meaninglessValue: IdealValue(null)
    }
}
