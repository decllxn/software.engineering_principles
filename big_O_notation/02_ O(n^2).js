// example of a function
function square(n) {
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log("i, j");
        }
    }
}

// Assuming function call is square(4)
// Every iteration of i, j iterates 4 times
// At the end i iterates 4 times, j iterates 4 * 4 times
// Becomes O (n^2)