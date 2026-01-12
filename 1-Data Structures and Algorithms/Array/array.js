/* 
1. What is an Array?
An array is a collection of elements stored in a single variable. The elements can be numbers, strings, objects, or even other arrays.

*/
//  Declare array

const numbers = [1,2,3,4,5,6] // numbers
const fruits = ['Apple', 'Banana', 'Mango'] // strings
const mixed = [10, true, {name: 'Emon'}, 'hello' ] // mixed


// Accessing Elements in an Array

let arr = ["A", "B", "C", "D", "E"];

console.log(arr[0]) // A
console.log(arr[2]) // C
console.log(arr[arr.length - 1])  // last element E


// 3. Modifying Arrays

// 3.1 Updating Elements
let colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow";
console.log(colors);

// 3.2 Adding Elements
let names = ["Alice", "Bob"];

// add element the end
names.push("Mahmud");
console.log(names)

// add element the first
names.unshift('Faysal');
console.log(names)

// 3.3 Removing Elements
let numberss = [10, 20, 30, 40];

// remove last element
numberss.pop();
console.log(numberss)

// Remove first element
numberss.shift();
console.log(numberss)


// 4. Array Methods

// 4.1 push() & pop() – Add & Remove from the End
// 4.2 unshift() & shift() – Add & Remove from the Beginning

// 4.3 concat() – Merge Two Arrays
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const merged = arr1.concat(arr2);
console.log(merged);

// 4.4 slice() – Extract Part of an Array
let arrr = [10, 20, 30, 40, 50];
let sliced = arrr.slice(1,3);
console.log(sliced)

// 4.5 splice() – Remove, Replace, or Add Elements

const splicee = arrr.splice(2,2);
console.log(splicee)

// Insert elements
arrr.splice(1, 0, "X", "Y"); 


// 4.6 indexOf() – Find Index of an Element

let fruitss = ["Apple", "Banana", "Mango"];
console.log(fruitss.indexOf("Banana")); // 1
console.log(fruitss.indexOf("Orange")); // -1 (Not found)

// 4.7 includes() – Check if an Element Exists
console.log(fruitss.includes("Mango")); // true
console.log(fruitss.includes("Grapes")); // false

// 4.8 reverse() – Reverse an Array
let arrrr = [1, 2, 3, 4];
arrrr.reverse();
console.log(arrrr); // [4, 3, 2, 1]

// 4.9 sort() – Sorting Arrays
let numbersss = [30, 10, 50, 20, 40];
numbersss.sort((a, b) => a - b); // Sort in ascending order
console.log(numbersss); // [10, 20, 30, 40, 50]

let words = ["Banana", "Apple", "Cherry"];
words.sort(); // Alphabetically sorted
console.log(words); // ["Apple", "Banana", "Cherry"]

// 5. Iterating Over Arrays

// 5.1 Using for Loop
// 5.2 Using forEach()
// 5.3 Using map()
// 5.4 Using filter()
// 5.5 Using reduce()

// 6. Multi-Dimensional Arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix[0][1]); // 2 (Row 0, Column 1)
  console.log(matrix[2][2]); // 9 (Row 2, Column 2)

//   7. Special Array Methods

// 7.1 find() – Find First Matching Element
let users = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Jane" }

// 7.2 some() & every()
let nums= [1, 2, 3, 4, 5];

console.log(nums.some(n => n > 3)); // true (At least one > 3)
console.log(nums.every(n => n > 0)); // true (All > 0)


// ## **1️⃣ Sort an Array using Bubble Sort** 
// 🔹 **Problem:** Implement **Bubble Sort** to sort an array in ascending order.

// Input: [64, 34, 25, 12, 22, 11, 90]
// Output: [11, 12, 22, 25, 34, 64, 90]

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));


// ## **2️⃣ Sort an Array using Quick Sort**  
// 🔹 **Problem:** Implement **Quick Sort** to sort an array in ascending order.

// Input: [10, 7, 8, 9, 1, 5]
// Output: [1, 5, 7, 8, 9, 10]

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = arr.filter(num => num < pivot);
  let right = arr.filter(num => num > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));