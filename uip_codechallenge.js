/**
 * Given an array of char, display a char with most occurrences.
 *
 * Example 1
 * Input: [”a”, “b”, “c”, “z”, “a”, “c”, “d”, “a”]
 * Output: “a”
 *
 * Example 2
 * Input: [”b”, “a”, “c”]
 * Output: "b"
 */

(function main(charArray) {
    const charInput = {};
    let maxCharInArray = charArray[0];

    for (const char of charArray) {
        charInput[char] = (charInput[char] || 0) + 1;
        if (charInput[char] > (charInput[maxCharInArray] || 1)) {
            maxCharInArray = char;
        }
    }
    return maxCharInArray;
})();
