// 1- overwrite value while making new object using Object.assign

// let obj1 = {
//     FirstName: "Muhammad"
// }
// let obj2 = {
//     LastName: "Waqas"
// }
// let newobj = Object.assign({}, obj1, obj2)
// newobj.LastName = "Hassan"
// console.log(newobj)


// 2- nested ternary operator

// let gender = "Male"
// gender === "Male" ? console.log("Write") : console.log("Wrong")


// 3- for in and for of loop

//for in loop

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for (d in obj) {
//     console.log(`${d}: ${obj[d]}`)
// }

//for of loop

// let students1 = ["Waqas", "Hamza", "Saad"]
// let students2;
// for (students2 of students1) {
//     console.log(`${students2}`)
// }


// 4- What is arrow function?

/*
In short, with arrow functions there are no binding of this.
In regular functions the this keyword represented the object
that called the function, which could be the window, the document,
a button or whatever. With arrow functions the this keyword always
represents the object that defined the arrow function.
For Example:
hello = () => {
  return "Hello World!";
}
*/