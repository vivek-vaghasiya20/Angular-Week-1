// //1. List down techniques with examples where hoisting does not work as expected in JS.

// // 1) declaration of function as a variable

// console.log(myFunc); // Output: undefined
// var myFunc = function() {
//     console.log("Hello!");
// };
// myFunc(); // Output: Hello!

// myFunc2(); // Error: myFunc2 is not a function // it treated as a variable at the interpation level.
// var myFunc2 = function() {
//     console.log("Hi!");
// };
// myFunc2(); // This line will never execute due to the error above

// // 2) let and const variables are not initialized until their declaration is reached.

// console.log(myVar); //  Cannot access 'myVar' before initialization
// let myVar = 5;
// console.log(myVar2);
// const myVar2 = 5;

// // 3) variable Shadowing :  the inner var x declaration shadows the outer x variable. The hoisting mechanism brings the inner declaration to the top of its scope, which can lead to unexpected results.
// var x = 10;
// {
//     console.log(x); // Output: undefined
//     var x = 20;
// }
// console.log(x); // Output: 20

// 2. output

var a = 4;
function greet() {
  b = "hello";
  console.log(b); // hello
  var b;
}
greet();
console.log(b); // reference error : var b scope is inside the (local)function.
