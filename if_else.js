let score = 59;
if (score >= 90 && score <= 100) {
  console.log("GRADE: A");
} else if (score >= 70 && score <= 89) {
  console.log("GRADE: B");
} else if (score >= 60 && score <= 69) {
  console.log("GRADE: C");
} else if (score >= 50 && score <= 59) {
  console.log("GRADE: D");
} else if (score >= 0 && score <= 49) {
  console.log("GRADE: E");
} else {
  console.log("Enter a integer value between 0-100");
}
