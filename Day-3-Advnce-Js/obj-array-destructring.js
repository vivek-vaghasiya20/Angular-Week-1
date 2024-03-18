// 1)
// const arrValue = ['one', 'two', 'three', 'four'];
// const [ ...x, y] = arrValue;
// console.log(x); //SyntaxError: Rest element must be last element
// const [a, ...b] = arrValue;
// console.log(b);

// 2) nested destructuring assignment in arrays
// const arrValue = ["one", ["two", "three"]];
// const [x, [y, z]] = arrValue;
// console.log(x); // one
// console.log([y, z]); // ['two','three']
// console.log(z); // three

// 3)  assigning default value 5 and 7
// let arrValue = [10];
// let [x = 5, y = 7] = arrValue;
// console.log(x); // 10
// console.log(y); // 7

// 4)

// const [a, b, ...[length]] = [1, 2, 3];
// console.log(a, b, length); //  1 2 3
// console.log([length]); //  [3]

// // const [a, b, ...[length]] = [1, 2, 3, 4];
// // console.log(a, b, length); //  1 2 3
// // console.log([length]); //  [3]

// const [c, d, ...rest] = [1, 2, 3, 4];
// const [x, y] = rest;
// console.log(c, d, x, y);

//5)

const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1,2,1 //how?-print length of the object or array

// const [a, b, ...{ length2 }] = [1, 2, 3];
// console.log(a, b, length2); // 1,2,undefined //how?

// const [a, b, ...{ length }] = [1, 2, 3,4,6,7 ];
// console.log(a, b, length); // 1,2,4
