@file:Suppress("PackageDirectoryMismatch")
package DecisionCruncher

import DecisionCruncher.*

/**
 * An option; an alternative; one of many things to decide between
 *
 * @author Ben Leggiero
 * @since 2018-03-10
 */
class Option(
        /** The name of this option */
        override val name: String,

        /** The amount by which this option conforms to each requirement. Keys are requirement IDs. */
        val requirementConformance: Map<String, RequirementConformance>
) : DecisionInput



class RequirementConformance(val value: Double)
