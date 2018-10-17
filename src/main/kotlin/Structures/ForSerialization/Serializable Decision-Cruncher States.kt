@file:Suppress("PackageDirectoryMismatch")

package DecisionCruncher

import DecisionCruncher.Serializable.Companion.idSerializedName
import org.bh.tools.base.jsShim.*
import kotlin.js.*

/*
 * A collection of classes that are meant for serialization but not runtime use
 *
 * @author Ben Leggiero
 * @since 2018-03-11
 */



interface Serializable {
    @JsName(Serializable.idSerializedName)
    val id: String

    companion object {
        const val idSerializedName = "i"
    }
}

@JsName("S")
class SerializableDecisionCruncherState(
        override val id: String,

        @JsName(allOptionsSerializedName)
        val allOptions: List<SerializableOption>,

        @JsName(allRequirementsSerializedName)
        val allRequirements: List<SerializableRequirement>
): Serializable {

    companion object {
        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        operator fun invoke(json: Json): SerializableDecisionCruncherState? {
            return SerializableDecisionCruncherState(
                    id = json[idSerializedName] as? String ?: return null,
                    allOptions = (json[allOptionsSerializedName] as? Array<*> ?: return null).map { SerializableOption(it as? Json ?: return null) ?: return null },
                    allOptions = (json[allOptionsSerializedName] as? Array<*> ?: return null).map { SerializableOption(it as? Json ?: return null) ?: return null }
            )
        }


        const val allOptionsSerializedName = "o"
        const val allRequirementsSerializedName = "r"
    }
}



class SerializableOption(
        override val id: String,

        @JsName("n")
        val name: String,

        @JsName("c")
        val requirementConformance: JsMap<Char, Double>
): Serializable {

    companion object {
        operator fun invoke(json: Json): SerializableOption? {
        }
    }
}



    class SerializableRequirement(
        override val id: String,

        @JsName("n")
        val name: String
): Serializable
