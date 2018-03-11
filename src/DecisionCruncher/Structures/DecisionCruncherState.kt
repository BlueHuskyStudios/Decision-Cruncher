package DecisionCruncher.Structures

import DecisionCruncher.*

/**
 * @author Ben Leggiero
 * @since 2018-03-11
 */
class DecisionCruncherState(
        val allRequirements: List<Requirement>,
        val allOptions: List<Option>,
        preCalculatedResult: Decision? = null
) {
    val result: Decision by lazy {
        preCalculatedResult ?: DecisionCrunchEngine.crunch(allRequirements, allOptions)
    }
}