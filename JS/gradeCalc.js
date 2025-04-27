function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else {
    return "Fail";
  }
}

console.log("Thats Your Grade: ", calculateGrade(77));
let grade = calculateGrade(63);
console.log(grade);
