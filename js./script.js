//////////////////////////////////////////////////////////////////////////////////////////////////////
// const numbers = [1,35,54,11,10,4];
// const newArr = [];
// const ages = [1,35,32,11,8,2];
// const newAges = [];
// const arrs =[[1,35,32,11,8,2],[1,35,32,11,8,2],[1,35,32,11,8,2],[1,35,32,11,8,2],[1,35,32,11,8,2]];
// let a = 1
// // let a = 2
// function onlyEnens(...args){
//     let a = 1
//     return newNum;
// }
//////////////////////////////////////////////////////
// const arr = ["Tigran", "KarUsh", "Matos", "Dvo"];

// const names = ["Arman", "Lyuto", "karush"];

// function findKarush(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase() == "KARUSH") {
//         return i
//     }
//   }
//   return 0
// }
// // Fibonachi

// console.log(findKarush(arr),findKarush(names));

// function breakA(arr){
//     const newArr = [];
//     for (i = 0; i< arr.length; i++){
//         for (j = 0; j< arr[i].length; j++){
//             if(arr[i][j].toUpperCase() =='A'){
//                 newArr.push(arr[i]);
//                 break
//             }
//         }
//     }
//     return newArr
// }
// console.log(breakA(names));
// console.log(breakA(arr));

// let add = function (y, z) {
//   return y + z;
// };
// let k = add(6, 10);

// console.log(k);
///////////////////////////////////
// let isEven = function (x){
//     return x % 2 === 0;
// };
// alert(isEven(9))

/////////////////////////////////// find vowels
// const vowels = ["a", "e", "i", "o", "u"]
// function findVowel(str) {
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }
//     return count
// }
// const your_enter = prompt('Enter a string: ');
// const result = findVowel(your_enter);
// console.log(result);

////////////////////////////////////////////// Fibonaci
// function fib(n) {
//   if (n < 2) return n;
//   let num1 = 1;
//   let num2 = 0;
//   for (let i = 2; i<=n; i++) {
//     let result = num1 + num2 ;
//     num2 = num1;
//     num1 = result
//   }
//   return num1;
// }

// console.log(fib(7));