@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher



/**
 * @author Ben Leggiero
 * @since 2018-03-10
 */
open class Decision(
        open val pieChart: Map<Option, Double>
)

/**
 * @author Ben Leggiero
 * @since 2018-03-10
 */
class MutableDecision(
        override var pieChart: MutableMap<Option, Double>
): Decision(pieChart = emptyMap()) {
    fun immutableCopy() = Decision(pieChart.immutableCopy())
}

@Suppress("NOTHING_TO_INLINE")
inline fun <K, V> MutableMap<K, V>.immutableCopy() = this.toMap()
