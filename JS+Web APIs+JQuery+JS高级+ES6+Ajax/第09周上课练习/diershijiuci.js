// function one() {
//     setTimeout(()=>{
//         console.log(123);
//         x.next();
//     },1000)
// }
// function two() {
//     setTimeout(()=>{
//         console.log(456);
//         x.next();
//     },2000)
// }
// function three() {
//     setTimeout(()=>{
//         console.log(789);
//         x.next();
//     },3000)
// }
// function * A1() {
//     yield one();
//     yield two();
//     yield three();
// }
// let x=A1();
// x.next();
// function one() {
//     setTimeout(() => {
//         let a = 123;
//         x.next(a);
//     }, 1000)
// }

// function two() {
//     setTimeout(() => {
//         let b = 456;
//         x.next(b);
//     }, 2000)
// }

// function three() {
//     setTimeout(() => {
//         let c = 789;
//         x.next(c);
//     }, 3000)
// }

// function* A1() {
//     let a = yield one();
//     console.log(a);
//     let b = yield two();
//     console.log(b);
//     let c = yield three();
//     console.log(c);
// }
// let x = A1();
// x.next();

// class A1{
//     get aa() {
//         console.log(123);
//     }
//     set bb(a) {
//         console.log(456);
//     }
// }
// let aaa=new A1();
// aaa.aa;
// aaa.bb='1';
// let a1={
//     a1:123,
//     arr:[
//         '123','789','456','7785'
//     ],
//     [Symbol.iterator](){
//         let index=0;
//         that=this;
//         return{
//             next:function () {
//                 if (index<that.arr.length) {
//                     let x={value:that.arr[index],done:false}
//                     index++;
//                     return x;
//                 }else {
//                     let x={value:undefined,done:true}
//                     return x;
//                 }
//             }
//         }
//     }
// }
// for (const x of a1) {
//     console.log(x);
// }
// let s1=Symbol.for('liyu');
// let s3=Symbol.for('liy');
// console.log(s1===s3);

// let A1={
//     up() {
//         console.log(123);
//     },
//     dowm() {
//         console.log(456);
//     }
// }
// // A1.up();
// let xinde={
//     up:Symbol(),
//     down:Symbol(),
// }
// A1[xinde.up]=function () {
//     console.log('新的up');
// }
// A1[xinde.up]();
// A1[xinde.down]=function () {
//     console.log('新的down');
// }
// A1[xinde.down]();

// let B1={
//     nemw:'狼人杀',
//     [Symbol('shar')]:function() {
//         console.log('我会杀人');
//     }
// }
// const langrensha = Object.getOwnPropertySymbols(B1);
// console.log(langrensha);
// B1[langrensha[0]]();

// class A1 {
//     static [Symbol.hasInstance](b) {
//         // console.log(1);
//         return b;
//     }
// }
// let a1;
// console.log(a1 instanceof A1);
// console.log(a1);

// let arr1=[1,2,3,4,5]
// let arr2=[1,2,3,4,5]
// arr2[Symbol.isConcatSpreadable]=false;
// let arr3=arr1.concat(arr2);
// console.log(arr3);

// let A1=new Promise(function (a,b) {
//     setTimeout(function () {
//         let xx='数据';
//         // a(xx);
//         let rr='失败';
//         b(rr)
//     },1000)
// })
// A1.then(function(value) {
//     console.log(value);
// },function (resaon) {
//     console.error(resaon);
// })