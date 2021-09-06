// // function discriminant(a, b, c) {
// //     return Math.pow(b ** 2 - 4 * a * c, 1/2)
// // }
// //
// // console.log(discriminant(1, 12, 3))
// //
//
// // let a=[1,2,3,4,5,6,7,8,9,10]
// // function gumar(a) {
// // let p =0
// //     for(let i=0; i<a.length;i++){
// // p=p+a[i]
// //     }
// //     return p
// // }
// // console.log (gumar(a))
// //
// // let a=[1,2,3,4,5,6,7,8,9,10]
// // function tvabMij(a) {
// //     let p =1
// //     for(let i=0; i<a.length;i++){
// //         p=(p*a[i])
// //
// //     }
// //     return p/a.length
// // }
// // console.log (tvabMij(a))
// //
// function zzvcrir(a,b) {
//     return a+'+'+b + '=ser'
// }
// console.log (zzvcrir('Anul', 'Samul'))
//
//
// function smallest(numbers) {
//     let x = numbers[0]
//     for (let i = 0; i < numbers.length; i++) {
//         if (x > numbers[i]) {
//             x = numbers[i]
//         }
//     }
//     return x
// }
//
// console.log(smallest([3, 11, 4, -2]))
//
// function bigest(numbers) {
//     let x = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (x < numbers[i]) {
//             x = numbers[i]
//         }
//     }
//     return x
// }
//
// console.log(bigest([3, 11, 4, -2]))
//
// function zuyger(numbers) {
//     const x = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             x.push(numbers[i])
//         }
//     }
//     return x
// }
//
// console.log(zuyger([2, 4, 5, 7, 8, 9]))

// function accum(s) {
//     let result = []
//     for (let i = 0; i < s.length; i++) {
//         let arrayItem = new Array(i + 1).fill(s[i])
//         arrayItem[0] = arrayItem[0].toUpperCase()
//         result.push(arrayItem.join(''))
//     }
//     return result.join('-')
// }
// console.log(accum('absd'));
//
// function highAndLow(numbers) {
//  return Math.max(numbers)
// }
// console.log(highAndLow(1,2,5,6));
//
// polindrome('anna');
// function polindrome(str){
// return str===str.split('').reverse().join('')
// }  console.log (str)

// let arr = [ 'pixik', 'shunik', 'pisik']
// let x=arr.shift();
// console.log(x)

// function zzvanq () {
//     return 155
// }
// let x = zzvanq()
// console.log(x)
// let arr = [ 'pixik', 'shunik', 'pisik']
// arr.push('hafo');
// console.log(arr)
// let arr = [ 'pixik', 'shunik', 'pisik']
// let karobchka =arr.pop();
// console.log(karobchka)
let arr = [ 'pixik', 'shunik', 'pisik', 'hafo']
let x= arr.slice(1,3);
console.log(x)
