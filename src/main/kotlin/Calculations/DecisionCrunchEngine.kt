@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

import org.bh.tools.base.collections.extensions.*

/**
 * @author Ben Leggiero
 * @since 2018-03-10
 */
object DecisionCrunchEngine {

    fun crunch(allRequirements: List<Requirement>, allOptions: List<Option>) : Decision {
        return allOptions.reduceInto(MutableDecision(mutableMapOf())) { decision, option ->
            decision.crunch(allRequirements, option)
        }.immutableCopy()
    }


    private fun MutableDecision.crunch(allRequirements: List<Requirement>, option: Option) {
        this.pieChart[option] = option.fitness(allRequirements)
    }


    private fun Option.fitness(allRequirements: List<Requirement>): Double {
        return this.requirementConformance.entries.reduceTo(0.0) { fitness, (requirementId, conformance) ->
            val requirement = allRequirements.firstOrNull { it.id == requirementId } ?: return@reduceTo fitness

//            TODO("Is this the best way to use ideal values?")

            return@reduceTo fitness + (requirement.idealValue.rawWeightFunction(conformance.value) * requirement.importance)
        }
    }
}

