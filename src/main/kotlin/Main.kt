package DecisionCruncher


import jQueryInterface.*


/**
 * @author Ben Leggiero
 * @since 2018-03-09
 */

fun main(args: Array<String>) {
    jq {
        val requirements = listOf(
                Requirement(id = "c", name = "Cost", idealValue = 1400.0, category = "Financial", importance = 1.0),
                Requirement(id = "d", name = "Distance to QT", category = "QoL", importance = 0.6)
        )

        val options: List<Option> = listOf(
                Option("Century Skyline",
                       mapOf("c" to 0.5,
                             "d" to 0.9)),
                Option("Somewhere Else A",
                       mapOf("c" to 0.7,
                             "d" to 0.7)),
                Option("Somewhere Else B",
                       mapOf("c" to 1.0,
                             "d" to 0.4))
        )

        console.log(DecisionCrunchEngine.crunch(allRequirements = requirements, allOptions = options).pieChart.toList().toTypedArray())
    }
}
