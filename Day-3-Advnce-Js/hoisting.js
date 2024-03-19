// //1. List down techniques with examples where hoisting does not work as expected in JS.

function input(start, end) {
  if (start < 0 || end < 0) {
    console.log("can not find factorial of negative number");
  }
  function factorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  var array = [];
  for (i = start; i <= end; i++) {
    //console.log(i);
    array.push(factorial(i)); //here i is reference to the value of the start variable. which make closures.
    //console.log(array[i-1]);
  }
  return array;
}
var output = input(1, 10);
console.log(output);

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

//-------------------------------------------------------------------------------------------
// 2. output

// var a = 4;
// function greet() {
//   b = "hello";
//   console.log(b); // hello
//   var b;
// }
// greet();
// console.log(b); // reference error : var b scope is inside the (local)function.

//-------------------------------------------------------------------------------------------
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// console.log(a);
// // 10
// console.log(b);
// // Uncaught ReferenceError: b is not defined

// function vivek(params) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// console.log(a); // Uncaught ReferenceError: a is not defined
//------------------------------------------------------------------------------------------
