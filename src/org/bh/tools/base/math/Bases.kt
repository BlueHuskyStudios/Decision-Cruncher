package org.bh.tools.base.math
import kotlin.math.pow

/*
 * @author Ben Leggiero
 * @since 2018-03-13
 */



/**
 *
 */
fun Long.toBase(baseCharacters: String): String {
    var result = ""

    // The following logic is derived from https://math.stackexchange.com/q/111150/317419

    // Let x be a number.
    var x = this

    // Then if b is any base,
    val b = baseCharacters.length

    do {
        // x%b (x mod b) is the last digit of x's base-b representation.
        result = "${x % b}$result"

        // Now integer-divide x by b to amputate the last digit.
        x /= b
    } while (x > 0) // Repeat and this procedure yields the digits of x from least significant to most. It begins "little end first."

    return result
}


fun String.fromBase(baseCharacters: String): Long {
    // The following is adapted from https://stackoverflow.com/a/19607537/453435

    var result: Long = 0
    var position = length //we start from the last digit in a String (lowest value)
    for (ch in this) {
        val value = baseCharacters.indexOf(ch)
        result += (value * baseCharacters.length.toDouble().pow(--position)).toLong() //this is your 1x2(pow 0)+0x2(pow 1)+0x2(pow 2)+1x2(pow 3)

    }
    return result
}
