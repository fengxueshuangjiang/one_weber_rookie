// var A1=new Function ('a','b','console.log(a+b)')
// A1(12,13);
// console.dir(A1);

// function A1() {
//     console.log('1'+this);
// }
// A1();
// var B={
//     B1:function () {
//         console.log(2+this);
//     }
// }
// B.B1();
// function C1 () {
// }
// var that;
// C1.prototype.CC1=function () {
//     console.log(3);
//     that=this;
// }
// var C=new C1();
// C.CC1();
// console.log(that===C);
// var btn=document.querySelector('button');
// btn.addEventListener('click', function () {
//     console.log(4+this);
// })
// setInterval(function() {
//     console.log(5+this);
// },5000);
// (function () {console.log(6+this);})();

// var o= {
//     aa:function () {
//         console.log(this);
//     }
// }
// o.aa();
// function bb() {
//     console.log(this);
// }
// bb();
// bb.call(o);
// function Fa(nmaes) {
//     this.nmaes=nmaes;
// }
// function SO(nemes,logo) {
//     Fa.call(this,nemes);
//     console.log();
//     this.logo=logo;
// }
// var so=new SO('12','55');
// console.log(so);
// var o = {
//     names: 'liyu',
// }
// function f1(arr,arr2) {
//     console.log(this);
//     console.log(arr);
//     console.log(arr2);
// }
// f1.apply(o,['pink','blue']);
// arr = [1, 2, 3, 4, 5, 5, 88, 8, 8, 7, 77, 7, 8];
// var a = Math.max.apply(Math, arr);
// console.log(a);
// var o={
//     nemes:'ansj',
// }
// function A1() {
//     console.log(this);
// }
// var a1=A1.bind(o);
// console.log(o);
// a1();
// A1();
// var that;
// var btn=document.querySelector('button');
// btn.addEventListener('click',function () {
//     btn.disabled=true;
//     // that=this;
//     clearInterval(time1)
//     var fn=window.dsq.bind(this);
//     fn();
// })
// var time1;
// // window.dsq();
// function dsq() {
//     time1=setInterval(function () {
//         this.disabled=false;console.log(this);
//     }.bind(this),2000)
// }

// 'use strict'
// num=10;
// console.log(num);
// var num = 10;
// console.log(num);
// delete num;
// console.log(num.this);
// function A1() {
//     this.nemes='sb';
// }
// A1();
// console.log(window.nemes);
// function a1(a,a,a) {
//     console.log(a+a+a);
// }
// function a1(a, b, c) {
//     console.log(a + b + c);
// }
// a1(2, 3, 4);
// var a=10;
// if(a>=10) {
//     function A1() {
//         console.log(a);
//     }
//     A1();
// }
// A1();

// function f1(a, b, c) {
//     console.log(a + b);
//     c && c();
// }
// f1(2, 6, function () {
//     console.log(123);
// })

// var a = document.querySelector('div');
// document.addEventListener('click', function () {
//     setInterval(function () {
//         a.style.backgroundColor = '#33ff66'
//         a.style.top = '400px'
//     }, 1000)
// });

// function A1() {
//     var num=10;
//     function B1() {
//         console.log(num);
//     }
//     B1();
// }
// A1();
// function A1() {
//     var a=10;
//     return function () {
//         console.log(a);
//     }
// }
// var B1=A1();
// B1();

var lis = document.querySelector('.nav').querySelector('ul').querySelectorAll('li');
// for(let i=0;i<lis.length;i++) {
//     lis[i].index=i;
//     lis[i].addEventListener('click',function () {
//         console.log(lis[i].index);
//     })
// }
// for (let i=0;i<lis.length;i++) {
//     (function (i) {
//         // console.log(i);
//         lis[i].addEventListener('click',function() {
//             console.log(i);
//         })
//     })(i)
// }
// for (var i=0;i<lis.length;i++) {
//     (function (i) {
//         setTimeout(function() {
//             console.log(lis[i].innerText);
//         },3000)
//     })(i)
// }
// 打车算钱
var car = (function () {//car接收的是return返回的对象
    var qibu = 13;
    var sum = 0;
    return {
        zc: function (n) {
            if (n <= 3) {
                sum = qibu;
            } else {
                sum = (n - 3) * 5 + qibu;
            }
            return sum;
        },
        yd: function (n) {
            if (n <= 3) {
                sum = qibu + 10;
            } else {
                sum = (n - 3) * 5 + qibu + 10;
            }
            return sum;
        }
    }
})();
var c=car.zc(8);
var d=car.yd(8);
console.log(c);
console.log(d);