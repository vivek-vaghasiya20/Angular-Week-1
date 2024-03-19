//1) make factorial program using closures. range 0-10

//2)
// function calculate(x) {
//     function multiply(y) {
//     return x * y;
//     }
//     return multiply;
// }
//     const multiply3 = calculate(3);
//     const multiply4 = calculate(4);

//     console.log(multiply3);         //  function multiply(y) : prints the function definition
//     console.log(multiply3());       //  NaN:not a number, undefined value multiplication

//     console.log(multiply3(6));      // 18.  -y set to 6
//     console.log(multiply4(2));      //  8.  -y set to 2

//3)

// function outest() {
//   var c = 12;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c); //10 Hello Closure 12
//     }
//     let a = 10; // if i remove this line then it will print 100 insted of 10
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = outest()("Hello Closure");
// close();
// here each function take it's parent lexical scope and generate closures.

//4)

// function setCount() {
//     let number = 0;
//     return function () {
//     console.log(number++);
//     console.log(++number);
//         };
//     }
//     const counter = setCount();

//     counter(); // 0 2-current value and increments after print
//     counter(); // 2 4
//     counter(); // 4 6

//extra)

// for (let i = 0; i < 5; i++) { // take i as a block scope that's why alocate new memory every time
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// } //0,1,2,3,4

// for (var i = 0; i < 5; i++) { //take i as a global scope
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// } // 5,5,5,5,5

// for (var i = 0; i < 5; i++) {
//   function vivek(i) {
//     //make i as a local(function) scope
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//   vivek(i);
// } // 0,1,2,3,4

// var a = 1;
// var b;
// // const fa = () =>
// function myFunction() {
//   var b = 1;
//   console.log("B", b); //1
// }
// myFunction();
// console.log(a, b); // 1 undefined

function myFunction() {
  var message = "Hello, world!";
  console.log(message); // prints "Hello, world!"
  if (true) {
    var message = "Goodbye, world!";
    console.log(message); // prints "Goodbye, world!"
  }
  console.log(message); // prints "Goodbye, world!"
}
myFunction();
console.log(message); // Reference error: not defined
