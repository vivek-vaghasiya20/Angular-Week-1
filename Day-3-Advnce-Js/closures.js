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

function outest() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hello Closure");
close();
