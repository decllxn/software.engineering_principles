// O(n cubed)
function cube(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}

// Assuming you pass cube(4)
// for every iteration of i, j iterates 4 times, k iterates 16 times
// So total iterations = 4 * 4 * 4 = 64