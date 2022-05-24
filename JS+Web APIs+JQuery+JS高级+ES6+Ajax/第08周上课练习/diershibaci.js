// console.log(123);
// for(let i=0;i<5;i++) {
//     console.log(i);
// }
// console.log(i);

// const a=10;
// const a=12;
// console.log(a);

// let A1 ={
//     names:'liyu',
//     age:'15',
//     tx:function () {
//         console.log(123456);
//     }
// }
// let {names,age,tx}=A1;
// console.log(names);
// tx();

// let aa = `
// sadsa
// sadsa
// dsad
// `
// console.log(aa);
// let a=`李`;
// let b=`${a}宇`;
// console.log(b);

// let names=123;
// let A1={
//     names,
//     ff(){
//         console.log(123);
//     } 
// }
// console.log(A1.names);
// A1.ff();

// setInterval(()=>{
//     console.log(23);
// },1000)
// let  a1=(a)=>{
//     console.log(a*a);
// }
// a1(10);
// let a11=a=>a*a;
// let a=a11(5);
// console.log(a);

// let a = (a, b, ...args) => {
//     return {
//         shu:a * b,
//         shuz:args,
//     };
// }
// console.log(a(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).shuz);

// let arr=[1,2,3,4,5,6];
// let arr00=[1,4,78,8,5,5,8,5,5,11];
// let arr1=[...arr,...arr00];
// console.log(arr1);

// let a=[1,2,3,4,5,6];
// let aa=Array.from(a,(value)=>{
//     return value*5;
// });
// console.log(aa);

// let arr = [{
//     id: 1,
//     idd: 2,
// }, {
//     id: 2,
//     idd: 2,
// }]
// let arr01=arr.find((value,index)=>{
//     return value.id==1
// })
// console.log(arr01);
// let arr = [{
//     id: 1,
//     idd: 2,
// }, {
//     id: 2,
//     idd: 2,
// }]
// let arr01=arr.findIndex((value,index)=>{
//     return value.id==1
// })
// console.log(arr01);
// let arr=['1','2','3','456'];
// let a=arr.includes('456');
// console.log(a);

// let str='ttwoaini';
// let a=str.startsWith('tt');
// console.log(a);
// let b=str.endsWith('caoni');
// console.log(b);
// let str1='彤我草你';
// let c=str1.repeat(3);
// console.log(c);

// let s1=new Set([1,2,3,3,4,5,6])
// console.log(s1);
// let a=[1,2,3,4];
// let b=[3,4,5,6];
// let c=[...new Set(b)];
// let c=[...new Set([...new Set(a),...new Set(b)])];
// let c=[...new Set(a)].filter((value)=>{
//     let s2=new Set(b);
//     if(s2.has(value)){
//         return true;
//     } else{
//         return false;
//     }
// });
// let c=[...new Set(a)].filter(value=>!new Set(b).has(value));
// console.log(c);

// let a=[1,2,3,4,5];
// let s=new Set(a);
// // s.forEach((value)=>{
// //     console.log(value);
// // })
// s.clear();
// console.log(s);

// let m=new Map();
// m.set('li','yu')
// // m.delete('li')
// // console.log(m.size);
// // m.set('li','yu')
// // m.clear();
// // console.log(m.get('li'));
// for(let k of m) {
//     console.log(k);
// }

// const a=10.553333333;
// console.log(Number.isFinite(a));
// console.log(Number.isNaN(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));
// console.log(Number.isInteger(a));

