#!/usr/bin/env node
// In order for a binary search to work
// The array you are searching must be an unordered array
// The array must be sorted in ascending order
// Example
// [34, 1, 54, 3] // Binary search doesn't happen here

// Example 2,
// [1, 2, 3, 7, 12, 43, 44, 54, 100, 124]
// Assuming we want to perform a search to look for the value 100
// Splits the array into to and checks if the number searched fot
// Id greater than or equal less than the mid point
// if the number is equal to the midpoint, that becomes out number
// if not, we repeat the process until we find the number
// or we reach the end of the array
// Time complexity is O(log n)
// Space complexity is O(1)
// Binary search is a divide and conquer algorithm
// It's a very efficient algorithm for searching in a sorted array
// It's not suitable for unsorted arrays
// It's not suitable for arrays with duplicate values
// It's not suitable for arrays with missing values
// It's not suitable for arrays with negative values
// It's not suitable for arrays with floating point numbers
// It's not suitable for arrays with strings
// It's not suitable for arrays with objects
// It's not suitable for arrays with nested arrays
// It's not suitable for arrays with null or undefined values

// Coding a binary search
let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // array
let start = 0; // First index of array
let end = arr.length - 1; // lasr index of array
let target = 8;

function binarySearch(arr, start, end, target) {
    let midIndex = Math.floor((start + end) / 2); // Looking for the index of the mid value
    if (arr[midIndex] === target ) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);// Calling the function recursively
    else return binarySearch(arr, midIndex + 1, end)
}

binarySearch(arr, start, end, target);