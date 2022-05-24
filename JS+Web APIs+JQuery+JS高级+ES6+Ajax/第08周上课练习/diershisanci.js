// function ff(x, y) {
//     console.log('柔骨锁');
//     console.log(this);
//     console.log(x + y);
// }
// var aa = {
//     nemes: 'liyu',
// }
// // ff();
// // ff.call();
// ff.call(aa, 12, 12);

// function A1 (mz,nl){
//     this.mz=mz;
//     this.nl=nl;
// }
// function B1(mz,nl,xb) {
//     A1.call(this,mz,nl);
//     this.xb=xb;
// }
// A1.prototype.yyds=function() {
//     console.log('A1,123456789');
// }
// // B1.prototype=A1.prototype;
// B1.prototype=new A1();
// B1.prototype.dnmd=function () {
//     console.log('123456');
// }
// B1.prototype.constructor=B1;
// var aa=new B1('李宇','二十一','男')
// // console.log(aa);
// console.log(A1.prototype);
// console.log(B1.prototype);
// console.log(B1.prototype.constructor);

// class A1 {

// }
// A1.prototype.sing=function () {
//     console.log(1123);
// }
// console.log(A1.prototype);
// var a=new A1();
// console.log(a.__proto__===A1.prototype);

// var arr1=[1,4,9,16,25];
// var sum=0;
// arr1.forEach(function(value,index,arr1) {//值，索引，数组
//     // console.log(value);
//     // console.log(index);
//     // console.log(arr1);
//     sum+=value;
// })
// console.log(sum);
// var arr2=arr1.map(function (value) {
//     return value+5;
// })
// console.log(arr2);
// var arr3=arr1.filter(function (value,index,arr1) {
//     return value>=3;
// })
// console.log(arr3);
// var a=arr1.some(function(value) {
//     return value=='25';
// })
// console.log(a);

// var sj = [{
//         id: 1,
//         names: 'OPPO',
//         jg: 2999,
//     }, {
//         id: 2,
//         names: 'VIVO',
//         jg: 1999,
//     },
//     {
//         id: 3,
//         names: '苹果',
//         jg: 6999,
//     },
//     {
//         id: 4,
//         names: '小米',
//         jg: 3999,
//     }
// ]
// var tbd = document.querySelector('tbody');

// function xr(sj) {
//     sj.forEach(function (value) {
//         var tr = document.createElement('tr');
//         tr.innerHTML = '<td>' + value.id + '</td><td>' + value.names + '</td><td>' + value.jg + '</td>';
//         tbd.appendChild(tr);
//     })
// }
// function sc() {
//     tbd.innerHTML='';
// }
// sc();
// xr(sj);
// var btn01 = document.querySelector('.a13')
// var inp01 = document.querySelector('.a11')
// var inp02 = document.querySelector('.a12')
// var inp03 = document.querySelector('.a15')
// var xsj = [];
// var xxsj = [];
// btn01.addEventListener('click', function () {
//     // console.log(123);
//     xsj = sj.filter(function (value) {
//         return value.jg >= inp01.value && value.jg <= inp02.value;
//     })
//     console.log(xsj);
//     sc();
//     xr(xsj);
// })

// var btn02 = document.querySelector('.a16');
// // btn02.addEventListener('click',function() {
// //     xxsj = sj.filter(function (value) {
// //         return value.names == inp03.value;
// //     })
// //     console.log(xxsj);
// //     sc();
// //     xr(xxsj);
// // })
// btn02.addEventListener('click',function() {
//     sj.some(function (value) {
//         if (value.names=inp03.value) {
//             console.log(value);
//             xxsj.push(value);
//             return true;
//         }
//     })
//     sc();
//     xr(xxsj);
// })

// var a="   wode1dj  ";
// var b=a.trim();
// console.log(a);
// console.log(b);

// var btn01 = document.querySelector('button');
// var inp01 = document.querySelector('input');
// var div = document.querySelector('div')
// btn01.addEventListener('click', function () {
//     var aa = inp01.value.trim();
//     if (aa == '') {
//         console.log('你没写东西，傻逼');
//         inp01.value = '';
//     } else {
//         div.innerText = inp01.value;
//         inp01.value = '';
//     }
// })

var a = {
    A: 1,
    B: 2,
    C: 3,
}
Object.defineProperty(a,'a',{
    value:123,
    enumerable:true,
})
Object.defineProperty(a,'A',{
    value:123,
})
Object.defineProperty(a,'B',{
    value:123,
    writable:false,
    configurable:false,
})
a.B=2;
delete a.B;
console.log(a);
var aaa=Object.keys(a);
console.log(aaa);