let fullName = prompt("Enter Your Full Name: ");
fullName = fullName.toLowerCase();

let newFullName = fullName.split(" ").join("");

console.log(newFullName);

let lenOfFullname = newFullName.length;

console.log("Your User Name is " + "@" + newFullName + lenOfFullname);
