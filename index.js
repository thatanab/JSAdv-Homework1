// 1
// const checkPrimeNumber = () => {
//     let primeNumber = []

//     for (let i = 2; i < 100; i++) {
//         if (i == 2 || i == 3) {
//             primeNumber.push(i);
//         }
//         for (let j = 2; j * j <= i; j++) {
//             if (i % j == 0) {
//                 break;
//             }
//             else if (j + 1 > Math.sqrt(i)) {
//                 primeNumber.push(i);
//             }
//         }
//     }

//     console.log(primeNumber);
// }

// 2
// const checkPrimeNumber = (input) => {
//     let primeNumber = []
//     for (let i = 2; i < input; i++) {
//         if (i == 2 || i == 3) {
//             primeNumber.push(i);
//         }
//         for (let j = 2; j * j <= i; j++) {
//             if (i % j == 0) {
//                 break;
//             }
//             else if (j + 1 > Math.sqrt(i)) {
//                 primeNumber.push(i);
//             }
//         }
//     }
//     console.dir(primeNumber, { 'maxArrayLength': null });
// }

// 3
// const check = (num) => {
//     if (num <= 1) return false;
//     if (num === 2) return true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }

//     return true;
// };
// let inputNum = +prompt("Enter input number to find prime");
// let prime = [];
// let count = 0;
// for (let i = 2; i <= Infinity; i++) {
//     if (check(i)) {
//         prime.push(i);
//         count += 1;
//         if (count === inputNum) break;
//     }
// }
// console.log(prime);


// 4
// const sum = (input) => {
//     let number = 0
//     for (let i = 2; i <= input; i++) {
//         if (i == 2 || i == 3) {
//             number += i
//         }
//         for (let j = 2; j * j <= i; j++) {
//             if (i % j == 0) {
//                 break;
//             }
//             else if (j + 1 > Math.sqrt(i)) {
//                 number += i
//             }
//         }
//     }
//     console.dir(`Sum prime ${input} is ${number}`, { 'Length': null });
// }


// 5
// const number = (input) => {
//     let sum = 0;
//     for (let i = 1; i <= input; i++) {
//         for (let j = 0; j < i; j++) {
//             sum += i;
//         }
//     }

//     console.log(sum);
// }


// 6
// const sum = (input) => {
//     let prime = false;
//     let result = 0;
//     for (let i = 1; i <= input; i++) {
//         if (i == 2 || i == 3) {
//             result -= i;
//         }
//         else {
//             for (let j = 2; j * j <= i; j++) {
//                 if (i % j == 0) {
//                     break;
//                 }
//                 else if (j + 1 > Math.sqrt(i)) {
//                     prime = true;
//                 }
//             }

//             if (prime) {
//                 result -= i;
//                 prime = false;
//             }
//             else {
//                 result += i;
//             }
//         }
//     }
//     console.log(result);
// }

// 7
// const gcd = (a, b) => {
//     if (!b) return a;
//     return gcd(b, a % b);
// };

// 8
// const number = (arr, n) => {
//     let result = arr[0];
//     for (let i = 1; i < n; i++) {
//         result = ((arr[i] * result) / (gcd(arr[i], result)))
//     }

//     console.log(result);
// }

// 9
// const number = (n) => {
//     let result = 1
//     for (let i = 1; i < n; i++) {
//         result *= i + 1
//     }

//     console.log(result);
//     return result;
// }

// 10
// const number = (arr, reverse) => {

//     arr = arr.sort();
//     if (reverse == true) {
//         arr = arr.reverse();
//     }

//     console.log(arr);
// }

// 11
// function toSorted(nums, bool) {
//     let sortVar = [];
//     const numIteration = nums.length;
//     if (bool) {
//         let minValue = Math.min(...nums);
//         for (let i = 0; i < numIteration; i++) {
//             // push min
//             sortVar.push(nums[nums.indexOf(minValue)]);
//             // update min
//             nums.splice(nums.indexOf(minValue), 1);
//             minValue = Math.min(...nums);
//         }
//     } else {
//         let maxValue = Math.max(...nums);
//         for (let i = 0; i < numIteration; i++) {
//             // push max
//             sortVar.push(nums[nums.indexOf(maxValue)]);
//             // update max
//             nums.splice(nums.indexOf(maxValue), 1);
//             maxValue = Math.max(...nums);
//         }
//     }
//     return sortVar;
// }

// console.log(toSorted([2, 1, 4, 2, 423, 5, 3, 32], true));

// 12
// const number = (input) => {
//     let i = 3;
//     let j = 5;
//     let arr = new Set();
//     for (let i = 3; i < input; i += 3) {
//         arr.add(i);
//     }

//     for (let i = 5; i < input; i += 5) {
//         arr.add(i);
//     }

//     arr = Array.from(arr);

//     let result = arr.reduce((acc, item) => acc + item, 0)

//     console.log(result);
// }


// 13
// const sum = (input) => {
//     input = String(input);
//     let result = 0;

//     for (const iterator of input) {
//         result += Number(iterator);
//     }

//     return result;
// }

// 14
// const sumDigitFactorial = (input) => {
//     let facNum = factorial(input);
//     sumDigit(facNum);
// }

// 15
// const sumDigit = () => {
//     for (let i = 1; i <= 4129980; i++) {
//         console.dir(`${i} : ${sumDigit(i)}`, { 'maxArrayLength': null });
//     }
// }