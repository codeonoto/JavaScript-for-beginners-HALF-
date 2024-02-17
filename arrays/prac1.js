let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
let avgMarks = 0;

for (let mark of marks) {
  totalMarks += mark;
}

// console.log(totalMarks)
avgMarks = totalMarks / marks.length;
console.log(avgMarks);

