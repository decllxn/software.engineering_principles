// Logarithm is a number a certain number needs to be raised to to get that
// Number
// number ^ number = Some number?
// 2^3 = 8
// log base 2 of 8 is 3
// 2 needs to be raised 3 times to get to 8
// In computer science, everything has a base of 2

// O(log n) using recursive function

function logFunc(n) {
    if (n === 0) return "Done";
    n = Math.floor(n / 2); // To truncate the number
    return logFunc(n);
}

// Time complexity O(log n)
/**
 *   logFunc(8) 
 *       |       lvl 1
 *       |        ^ 
 *   logFunc(4)   | 
 *       |       lvl 2
 *       |        |
 *   logFunc(2)   ^
 *       |        |
 *       |       lvl 3
 *   logFunc(1)   |
 * Algorithm ends there
 */

// The algorithm went 3 levels deep
// log base 2 of 8 is 3
// Thus the function as a time complexity of O(logn)

// O(log n) non-recursive

function logn(n) {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
}