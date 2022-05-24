// var a = 1;
// function A1() {
//     console.log('打印第' + a + '次');
//     if (a >= 6) {
//         return;
//     } else {
//         a++;
//     }
//     A1();

// }
// A1();

// function b1(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * b1(n - 1);
// }
// console.log(b1(3));

// function c1(n) {
//     if(n==1||n==2) {
//         return 1;
//     }
//     return c1(n-1)+c1(n-2);
// }
// console.log(c1(6));

// var arr01 = [{
//         id: '1',
//         mz: '家具',
//         lx: [{
//                 id: '11',
//                 mz: '床头柜',
//             },
//             {
//                 id: '12',
//                 mz: '茶几',
//             }
//         ]
//     },
//     {
//         id: '2',
//         mz: '衣服',
//         lx: [{
//             id: '21',
//             mz: '短裤',
//         }, {
//             id: '22',
//             mz: '短裙',
//             lx: [{
//                 id: '221',
//                 mz: '浪莎',
//             },{
//                 id: '222',
//                 mz: '优衣库',
//             }]
//         }]
//     }
// ];
// var aa = {};
// function cz(arr, i) {
//     arr.forEach(function (value) {
//         if (value.id == i) {
//             aa = value;
//         } else if (value.lx && value.lx.length > 0) {
//             aa = cz(value.lx, i);
//         }
//     });
//     return aa;
// };
// console.log(cz(arr01, 1));
// console.log(cz(arr01, 2));
// console.log(cz(arr01, 11));
// console.log(cz(arr01, 22));
// console.log(cz(arr01,222));

// var ai = {
//     names: 123,
//     moh: 456,
//     lsis: {
//         zbsj: 123
//     }
// }
// var o = {};
// for (const key in ai) {
//     o[key]=ai[key];
// }
// console.log(o);
// ai.lsis.zbsj=11111;
// console.log(o);
// Object.assign(o,ai);
// console.log(o);

// var ai = {
//     names: 123,
//     moh: 456,
//     lsis: {
//         zbsj: 123
//     },
//     sss:[11,1,5,45,465,456,456],
//     sssss:[{
//         a:12,
//         b:789,
//         c:111,
//     },{
//         D:"123",
//     }]
// }
// var o = {};
// function kb(o, ai) {
//     for (const k in ai) {
//         var aa = ai[k];
//         if (aa instanceof Array) {
//             o[k] = [];
//             kb(o[k], aa)
//         } else if (aa instanceof Object) {
//             o[k] = {};
//             kb(o[k], aa)
//         } else {
//             o[k] = ai[k];
//         }
//     }
// }
// kb(o,ai);
// ai.lsis.zbsj=7845612894151531;
// console.log(ai);
// console.log(o);

// var a1=new RegExp(/123/);
// var b1=/1234/;
// console.log(b1.test(123456));

var zz = /^[A-Za-z0-9_.-]{6,16}$/;
var inp = document.querySelector('input');
var sp = document.querySelector('span');
inp.addEventListener('blur', function () {
    if (zz.test(inp.value)) {
        sp.className = 'a2';
        sp.innerText = '符合要求';
    } else {
        sp.className = 'a1';
        sp.innerText = '不符合要求';
    }
    if (inp.value == '') {
        sp.className = 'a3';
        sp.innerText = '请输入用户名';
    }
})