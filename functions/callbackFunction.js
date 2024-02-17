// CallBack Function: Here, it is a function to execute for each element in the array

// A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];

// Using "Function Keyword"
// arr.forEach(function printVal(val) {
//   // Each "val" for Each "index"
//   console.log(val);
// });

// Using "Arrow Function"

// For Each Methoad is to do looping in arr 
// It have 3 parameters --> "val", "idx", "arr"
// Higher Order Function/Methods --> Woh hote hai jo kisi function as paramter lete hai yha return karte hai !
// forEach() is a Higher Order Function

arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});
