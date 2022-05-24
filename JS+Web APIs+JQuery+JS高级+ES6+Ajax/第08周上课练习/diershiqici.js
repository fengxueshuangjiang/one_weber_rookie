// let divs=document.querySelectorAll('.d01');
// for (let i=0;i<divs.length;i++) {
//     divs[i].addEventListener('click',function () {
//         for (let i=0;i<divs.length;i++) {
//             divs[i].style.backgroundColor='';
//         }
//         divs[i].style.backgroundColor='#f00';
//     })
// }

// var names11='liyu';
// var B1 ={
//     names11,
// }
// console.log(B1.names11);
// var A1={
//     names:'123',
//     dong() {
//         console.log('抽插');
//     }
// }
// let {names,dong}=A1;
// console.log(names);
// dong();

// var names = 'liyu';
// function A1() {
//     console.log(this.names);
// }
// let B1 = () => {
//     console.log(this.names);
// }
// let C1={
//     names:'liudehua'
// }
// A1();
// B1();
// A1.call(C1);
// B1.call(C1);

// let A1=(e,v)=>{
//     neme=e;
//     mimi=v;
// }
// let a1=new A1(1,2);
// console.log(a1.neme);

// let a1=n=>n*n;
// console.log(a1(9));

// var div=document.querySelector('div');
// div.addEventListener('click',()=>{
//     setTimeout(()=>{
//         div.style.backgroundColor='#33ff66';
//     },3000)
// })

// const arr = [1, 2, 3, 4, 4, 5, 6, 5, 5, 55, 5, 55, 4, 488, 4, 556, 213];
// let a1 = arr.filter((shuzhi) =>shuzhi%2==0
//     // {
//     // if(shuzhi%2==0) {
//     //     return true;
//     // }else {
//     //     return false;
//     // }}
// )
// console.log(a1);

// function A1 (a,b,c=0) {
//     return a+b+c;
// }
// let a=A1(1,2);
// console.log(a);

// function A1({a1,a2,a3,a4='000'}) {
//     console.log(a1);
//     console.log(a2);
//     console.log(a3);
//     console.log(a4);
// }
// A1({
//     a1:'123',
//     a2:'456',
//     a3:'789',
// })

// let arr03=['4','3','2','1']
// function A1() {
//     console.log(arguments);
// }
// A1(...arr03);
// let arr1=['123','123'];
// let arr2=['456','456'];
// let szj=arr1.concat(arr2);
// let szj=[...arr1,...arr2]
// console.log(szj);
// let arr03=['1','2'];
// let arr04=[...arr03];
// console.log(arr04);

// let game={
//     up:function () {
//         console.log('up');
//     },
//     down:function () {
//         console.log('down');
//     }
// }
// let xinff={
//     up:Symbol(),
//     down:Symbol(),
// }
// game[xinff.up]=function () {
//     console.log(456);
// }
// game.up();
// // game.xinff.up();
// console.log(game[xinff.up]());
// let obj = {
//     names: 213,
//     arr: ['123', '456', '789', '000', '012'],
//     [Symbol.iterator]() {
//         let index = 0;
//         let this01 = this;
//         return {
//             next: function () {
//                 if (index < this01.arr.length) {
//                     let obj01 = {
//                         value: this01.arr[index],
//                         done: false
//                     }
//                     index++;
//                     return obj01;
//                 } else {
//                     let obj01 = {
//                         value: undefined,
//                         done: true
//                     }
//                     return obj01;
//                 }
//             }
//         }
//     }
// }
// for (const iterator of obj) {
//     console.log(iterator);
// }

// function * A1() {
//     console.log('打印这句话');
//     yield 'wwwww'
//     console.log('打印这句话');
// }
// // A1().next();
// for (const iterator of A1()) {
//     console.log(iterator);
// }

// function one() {
//     setTimeout(() => {
//         console.log(111);
//         a1.next();
//     }, 1000)
// }
// function two() {
//     setTimeout(() => {
//         console.log(222);
//         a1.next();
//     }, 2000)

// }
// function three() {
//     setTimeout(() => {
//         console.log(333);
//     }, 3000)
//     // a1.next();
// }
// function* A1() {
//     yield one();
//     yield two();
//     yield three();
// }
// let a1 = A1();
// a1.next();

function one() {
    setTimeout(()=> {
        let data='123';
        a1.next(data);
    },1000)
}
function two() {
    setTimeout(()=> {
        let data='456';
        a1.next(data);
    },1000)
}
function three() {
    setTimeout(()=> {
        let data='789';
        a1.next(data);
    },1000)
}

function * A1() {
    let aa=yield one();
    console.log(aa);
    let bb=yield two();
    console.log(bb);
    let cc=yield three();
    console.log(cc);
}
let a1=A1();
a1.next();