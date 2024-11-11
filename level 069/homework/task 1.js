// -------- Exercise Set 1: Basics (Array Length, toString, at, join, pop, push) --------

// Task 1: Get Length
// let array1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log('Array:', array1);
// let lengthOfArray1 = array1.length;  // Get the length of the array
// console.log('Length of the array is:', lengthOfArray1);  // Log the length

// // Task 2: Convert to String
// let array1AsString = array1.toString();  // Convert the array to a string
// console.log('Array as string:', array1AsString);  // Log the string version of the array

// // Task 3: Access Element
// let secondElement = array1.at(1);  // Get the element at index 1 (second element)
// console.log('The second element is:', secondElement);  // Log the second element

// // Task 4: Join Elements
// let array1Joined = array1.join('-');  // Join the array elements with '-' between them
// console.log('Joined array elements:', array1Joined);  // Log the joined string

// // Task 5: Push & Pop
// array1.push('fig');  // Add a new element to the end of the array
// array1.push('grape');  // Add another element to the end of the array
// console.log('Array after adding elements (push):', array1);  // Log the array after pushing elements
// array1.pop();  // Remove the last element from the array
// console.log('Array after removing last element (pop):', array1);  // Log the array after popping

//-------- Exercise Set 2: Modify Array (shift, unshift, delete, concat) --------

// Task 1: Shift Element
// let array2 = ['a', 'b', 'c'];  // Create a new array
// console.log('Original array:', array2);
// let shiftedElement = array2.shift();  // Remove the first element
// console.log('Element removed with shift():', shiftedElement);  // Log the shifted element
// console.log('Array after shift:', array2);  // Log the array after shift

// // Task 2: Unshift Element
// array2.unshift('z');  // Add an element at the beginning of the array
// console.log('Array after unshift():', array2);  // Log the array after unshift

// // Task 3: Delete Element
// delete array2[1];  // Remove the element at index 1 (second element) using delete operator
// console.log('Array after delete (notice undefined):', array2);  // Log the array after delete

// // Task 4: Concatenate Arrays
// let array3 = [1, 2, 3];  // Create the first array
// let array4 = [4, 5, 6];  // Create the second array
// console.log('First array:', array3);
// console.log('Second array:', array4);
// let concatenatedArray = array3.concat(array4);  // Concatenate the two arrays
// console.log('Concatenated array:', concatenatedArray);  // Log the concatenated array

// // Task 5: Explore Unshift & Length
// array2.unshift('x');  // Add another element to the beginning of array2
// let newLength = array2.length;  // Get the new length of the array
// console.log('Array after unshift:', array2);  // Log the updated array
// console.log('New length of the array is:', newLength);  // Log the new length

//-------- Exercise Set 3: Searching (indexOf, lastIndexOf, includes) --------

//Task 1: Find Index
// let array5 = ['apple', 'banana', 'apple', 'cherry'];  // Create an array with repeated values
// console.log('Array:', array5);
// let firstIndexOfApple = array5.indexOf('apple');  // Find the first index of 'apple'
// console.log('First index of "apple":', firstIndexOfApple);  // Log the first index of 'apple'

// Task 2: Find Last Index
// let lastIndexOfApple = array5.lastIndexOf('apple');  // Find the last index of 'apple'
// console.log('Last index of "apple":', lastIndexOfApple);  // Log the last index of 'apple'

//Task 3: Check Inclusion
// let includesCherry = array5.includes('cherry');  // Check if 'cherry' is in the array
// console.log('Does the array include "cherry"?', includesCherry);  // Log the result of includes()

//Task 4: Invalid Index Search
// let indexOfGrape = array5.indexOf('grape');  // Search for an element that doesn't exist
// console.log('Index of non-existing "grape":', indexOfGrape);  // Log the result (-1 means not found)

// // Task 5: Case Sensitivity
// let caseSensitiveCheck = array5.includes('APPLE');  // Check if the array includes 'APPLE' (case-sensitive)
// console.log('Is includes() case-sensitive for "APPLE"?', caseSensitiveCheck);  // Log the result (false)

// // -------- Exercise Set 4: Sorting and Reversing (sort, reverse) --------

// // Task 1: Sort Strings
// let array6 = ['zebra', 'apple', 'monkey'];  // Create an array of strings
// console.log('Original array:', array6);
// array6.sort();  // Sort the array alphabetically
// console.log('Sorted array:', array6);  // Log the sorted array

// // Task 2: Sort Numbers
// let array7 = [10, 5, 20, 15];  // Create an array of numbers
// console.log('Original array of numbers:', array7);
// array7.sort(function(a, b) { return a - b; });  // Sort the numbers in ascending order
// console.log('Sorted numbers (ascending):', array7);  // Log the sorted array

// // Task 3: Custom Sort (Descending)
// array7.sort(function(a, b) { return b - a; });  // Sort the numbers in descending order
// console.log('Sorted numbers (descending):', array7);  // Log the sorted array

// // Task 4: Reverse Array
// array7.reverse();  // Reverse the order of the array
// console.log('Reversed array:', array7);  // Log the reversed array

// // Task 5: Mix Sort and Reverse
// array6.sort();  // Sort the array alphabetically
// array6.reverse();  // Reverse the order of the sorted array
// console.log('Sorted and reversed strings:', array6);  // Log the final result

// // -------- Exercise Set 5: Combined Operations --------

// // Task 1: Sort and Push
// let array8 = [30, 10, 50, 20];  // Create an array of numbers
// console.log('Original array:', array8);
// array8.sort(function(a, b) { return a - b; });  // Sort the numbers in ascending order
// array8.push(40);  // Add a new number to the end of the array
// console.log('Array after sorting and pushing a new number:', array8);  // Log the updated array

// // Task 2: Concatenate and Sort
// let array9 = [7, 2, 9];  // Create another array
// console.log('First array:', array8);
// console.log('Second array:', array9);
// let mergedSortedArray = array8.concat(array9);  // Merge the two arrays
// mergedSortedArray.sort(function(a, b) { return a - b; });  // Sort the merged array
// console.log('Concatenated and sorted array:', mergedSortedArray);  // Log the sorted array

// // Task 3: Push and Reverse
// let array10 = ['a', 'b', 'c'];  // Create a string array
// console.log('Original array:', array10);
// array10.push('d');  // Add one element
// array10.push('e');  // Add another element
// array10.push('f');  // Add one more element
// console.log('Array after push:', array10);
// array10.reverse();  // Reverse the entire array
// console.log('Array after reverse:', array10);  // Log the reversed array

// // Task 4: Find and Remove Element
// let array11 = ['red', 'green', 'blue', 'yellow'];  // Create an array
// console.log('Original array:', array11);
// let indexOfGreen = array11.indexOf('green');  // Find the index of 'green'
// if (indexOfGreen !== -1) {  // If 'green' is found (index is not -1)
//   array11.splice(indexOfGreen, 1);  // Remove 'green' using splice()
// }
// console.log('Array after removing "green":', array11);  // Log the updated array

// // Task 5: Join and Include Check
// let array12 = ['cat', 'dog', 'bird'];  // Create a new array
// console.log('Original array:', array12);
// let joinedString = array12.join(', ');  // Join the array elements into a string
// console.log('Joined string:', joinedString);  // Log the joined string
// let splitArray = joinedString.split(', ');  // Split the string back into an array
// console.log('Array after split:', splitArray);  // Log the split array
// let includesDog = splitArray.includes('dog');  // Check if 'dog' is in the array
// console.log('Does')