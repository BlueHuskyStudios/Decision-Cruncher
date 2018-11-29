package DecisionCruncher


import DecisionCruncher.Requirement.IdealValue.*
import jQueryInterface.*


/**
 * @author Ben Leggiero
 * @since 2018-03-09
 */

fun main(args: Array<String>) {
    jq {
        val requirements = listOf(
                Requirement(id = "c", name = "Cost", category = "Financial", importance = 1.0,
                            idealValue = fullRange(lowestAcceptableInput = 1000.0, idealValue = 1400.0, highestAcceptableInput = 1800.0, unit = "$")),
                Requirement(id = "d", name = "Distance to QT", category = "QoL", importance = 0.6,
                            idealValue = lowerIsBetter(highestAcceptableInput = 5.0, unit = "miles"))
        )

        val options: List<Option> = listOf(
                Option("Century Skyline",
                       mapOf("c" to RequirementConformance(0.5),
                             "d" to RequirementConformance(0.9))),
                Option("Somewhere Else A",
                       mapOf("c" to RequirementConformance(0.7),
                             "d" to RequirementConformance(0.7))),
                Option("Somewhere Else B",
                       mapOf("c" to RequirementConformance(1.0),
                             "d" to RequirementConformance(0.4)))
        )

        console.log(DecisionCrunchEngine.crunch(allRequirements = requirements, allOptions = options).pieChart.toList().toTypedArray())
    }
}
