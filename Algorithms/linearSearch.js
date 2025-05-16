// In Linear Search or Sequential Search, every element in the array is checked, and if the match is found then the element index is returned otherwise, the search continues till the last element.

const numbers = [2, 4, 67, 8, 44, 6, 12];

function linearSearch(arr, value){
    for(let i =0; i < arr.length; i++){
        if(arr[i] == value){
            return i
        }
    }
    return -1
}

const result = linearSearch(numbers, 2);
console.log(result)

// Reference: https://dev.to/mdqayyumshareef/linear-search-algorithm-javascript-mb4