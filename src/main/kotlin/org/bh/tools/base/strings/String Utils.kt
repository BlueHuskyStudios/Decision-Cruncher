@file:Suppress("unused")

package org.bh.tools.base.strings

import kotlin.math.*

/*
 * Copyright BHStudios ©2016 BH-1-PS. Made for BH Tic Tac Toe IntelliJ Project.
 *
 * Helps you with strings
 *
 * @author Ben C. Leggiero
 * @since 2016-10-09
 */


fun Char.isUpperCase() = toLowerCase() != this
fun Char.isLowerCase() = toUpperCase() != this


/**
 * Converts this string to an abbreviation, optionally with a delimiter after each character of the result. For
 * example, `"Quick brown fox"` would become `"QBC"`.
 *
 * @param delimiter (optional) - The sequence to place after each character of the result. By default, this is the
 * empty string, so `"Quick brown fox"` becomes `"QBC"`, but if you specify `"."`, then it becomes `"Q.B.C."`
 *
 * @return A [CharSequence] representing this one, but abbreviated
 */
fun CharSequence.toAbbreviation(delimiter: CharSequence = ""): CharSequence {
    val ret = StringBuilder()
    var shouldAdd = false
    this.forEach { c ->
        if (c.isWhitespace()) {
            shouldAdd = true
        } else if (shouldAdd || c.isUpperCase()) {
            ret += c.toUpperCase() + delimiter
            shouldAdd = false
        }
    }
    return ret
}

/**
 * Allows `+=` to be used as shorthand for [StringBuilder.append]
 */
infix operator fun StringBuilder.plusAssign(rhs: Any) {
    this.append(rhs)
}

/**
 * Allows the `+` operator to convert any left-hand-side value to a character sequence prepended onto the
 * right-hand-side
 */
infix operator fun Any.plus(rhs: String): String = this.toString().plus(rhs)

/**
 * Allows the `+` operator to convert any left-hand-side value to a character sequence prepended onto the
 * right-hand-side. The exact type of the returned value is not guaranteed.
 */
infix operator fun Any.plus(rhs: CharSequence): CharSequence = concat(this, rhs)

/**
 * Concatenates the [CharSequence] value of `lhs` before `rhs` and returns the result. The exact type of the returned
 * value is not guaranteed.
 */
fun concat(lhs: Any, rhs: CharSequence): CharSequence {
    if (lhs is String) {
        val casted: String = lhs
        return casted.plus(rhs)
    } else if (lhs is StringBuilder) {
        val casted: StringBuilder = lhs
        return casted.append(rhs)
    } else {
        return StringBuilder().append(lhs).append(rhs)
    }
}

/**
 * Indicates whether this character sequence contains the other, ignoring case
 */
fun CharSequence.containsIgnoreCase(cs: CharSequence): Boolean
        = this.toString().toLowerCase().contains(cs.toString().toLowerCase())


/* Non-JS:
/**
 * Repeats the given string [rhs] times.
 */
@Suppress("NOTHING_TO_INLINE")
inline infix operator fun String.times(rhs: Integer): String = repeat(rhs.int32Value.clampToPositive)


/**
 * Repeats the given string [rhs] times.
 */
@Suppress("NOTHING_TO_INLINE")
inline operator fun String.times(rhs: Int32): String = times(rhs.integerValue.clampToPositive)


operator fun String.times(rhs: Fraction): String {
    if (!rhs.hasFractionComponent) {
        return times(rhs.integerValue)
    }
    if (rhs <= 0) {
        return ""
    }
    val partialRepeatingString = (1..(rhs.integerValue - 1)).reduceTo(this) { concatenatedString, _ ->
        /*return*/ concatenatedString + this
    }

    val remainingCharacterCount = (rhs.components.fractionPart * length).rounded().integerValue

    if (remainingCharacterCount <= 0L || remainingCharacterCount >= length) {
        return partialRepeatingString + this
    } else {
        return partialRepeatingString + substring((0..remainingCharacterCount).int32Value)
    }
}
*/


/**
 * Finds and returns the characters that are different between the two strings, as a tuple of `(thisChar, otherChar)`.
 * If they differ in length, all characters from the longer string are appended to the end, with `null` as the
 * placeholder for the shorter string's nonexistant characters. Of course, if the strings are equal, an empty list is
 * returned.
 *
 * Note that this is a primitive/naïve difference algorithm, and will not be able to distinguish inserted characters
 * from modified, removed, or appended ones. **This is not like Git's diff.**
 *
 * For instance:
 *
 *  * `"123".differingCharacters("321")` returns `[(0, '1', '3'), (2, '3', '1')]`
 *  * `"one".differingCharacters("one + 2")` returns `[(3, null, ' '), (4, null, '+'), (5, null, ' '), (6, null, '2')]`
 *  * `"B & A".differingCharacters("B")` returns `[(1, ' ', null), (2, '&', null), (3, ' ', null), (4, 'A', null)]`
 *  * `"ABC".differingCharacters("A BC")` returns `[(1, 'B', ' '), (2, 'C', 'B'), (3, 'C', null)]`
 *
 * @param other The string which might differ from this one
 *
 * @return A list of the differing characters, or an empty list if the strings are equal
 */
fun CharSequence.differingCharacters(other: CharSequence): List<DifferingCharacter> {
    if (this == other) {
        return listOf()
    }

    val endList: MutableList<DifferingCharacter> = mutableListOf()
    (0 until min(this.length, other.length)).forEach { index ->
        val thisChar = this[index]
        val otherChar = other[index]
        if (thisChar != otherChar) {
            endList += DifferingCharacter(index, thisChar, otherChar)
        }
    }

    if (this.length > other.length) {
        val offset = other.length
        endList += this.substring(offset).mapIndexed { index, character -> DifferingCharacter(index + offset, character, null) }
    } else if (other.length > this.length) {
        val offset = this.length
        endList += other.substring(offset).mapIndexed { index, character -> DifferingCharacter(index + offset, null, character) }
    }

    return endList
}


/**
 * Represents a character that differs between two strings, including the position where the difference was found and .
 */
data class DifferingCharacter(
        val index: Int,
        val left: Char?,
        val right: Char?
) {
    override fun toString(): String {
        val sb = StringBuilder("{index: $index")
        if (left != null) sb += ", left: '$left'"
        if (right != null) sb += ", right: '$right'"
        return sb + "}"
    }
}


/**
 * If this string is null, or if this string is empty, then this returns `false`. Else, this returns `true`.
 */
@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorEmpty(): Boolean = !isNullOrEmpty()


/**
 * If this string is null, or if this string is blank, then this returns `false`. Else, this returns `true`.
 */
@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorBlank(): Boolean = !isNullOrBlank()
