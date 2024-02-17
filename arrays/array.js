// let student1 = 87;
// let student2 = 84;

// let marks = {
//     student1: 87,
//     student2: 84
// }

let marks = [87,84,99,92,87]
console.log(typeof(marks))

// for(let idx=0; idx<marks.length; idx++){
//     console.log(marks[idx])
// }

for(let mark of marks){
    console.log(mark)
}