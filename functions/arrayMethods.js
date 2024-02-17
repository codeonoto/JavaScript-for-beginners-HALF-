// For Each Methoad is to do looping in arr
// It have 3 parameters --> "val", "idx", "arr"
// Higher Order Function/Methods --> Woh hote hai jo kisi function as paramter lete hai yha return karte hai !
// forEach() is a Higher Order Function

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

// Map
// It Creates a new array with the result of some operation. The value its callback return are used to form new array

let nums = [1, 2, 3, 4, 5];

let newArr = nums.map((val) => {
  return val * val;
});

console.log(newArr);

let calcSquare = (num) => {
  console.log(num * num);
};

// Filter
// It creates a new array of elements that give true for a condition/filter

let newArr2 = arr.filter((val) => {
  return val % 2 === 0;
});

console.log(newArr2);
