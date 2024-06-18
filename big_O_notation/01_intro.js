// Used to analyze efficiency of an algorithim as it's input approaches
// infinity
// example Big O(n) function

function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) { // This function scales linearly
        console.log(1000 * 100000) // Takes constant time
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7]
linearFunc(arr) 

// A constant is any step that does not scale to the input of a function
// Every line of code is a function of itself
// Constants can be classified as big O(1)

// Orders of growth
// 0(1) -- Constant (best case) very efficient
// 0(n) -- Linear
// Highest order of operations(worst case) = low perfomance