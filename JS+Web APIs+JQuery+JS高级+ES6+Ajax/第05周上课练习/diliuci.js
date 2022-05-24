// var div01 = document.getElementById('div01');
// console.log(div01);
// var li01 = document.getElementsByTagName('li');
// // console.log(li01);
// // console.log(li01[1]);
// for (var i = 0; i < li01.length; i++) {
//     console.log(li01[i]);
// }
// var lo01 = document.getElementsByTagName('ol');
// li02 = lo01[0].getElementsByTagName('li');
// console.log(li02[0]);
// var box01 = document.getElementsByClassName('box');
// console.log(box01[1]);
// var box001 = document.querySelectorAll('.box');
// console.log(box001);
// var box001 = document.querySelector('.box');
// console.log(box001);
// var htmlele = document.body;
// console.log(htmlele);
// var html001 = document.documentElement;
// console.dir(html001)

// var bt01 = document.getElementById('bt01');
// bt01.onclick = function () {
//     alert('给我纳环');
// }

// var d01 = document.getElementById('d01');
// d01.onclick = function () {
//     alert('飞');
// }

// function sjhq() {
//     var sj = new Date();
//     // console.log(sj);
//     var nian = sj.getFullYear();
//     var yue = sj.getMonth() + 1;
//     var ri = sj.getDate();
//     var xq = sj.getDay();
//     var shi = sj.getHours();
//     var fen = sj.getMinutes();
//     var miao = sj.getSeconds();
//     var xq1 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
//     return nian + '年' + yue + '月' + ri + '日' + ' ' + xq1[xq] + shi + ':' + ((fen < 10) ? '0' + fen : fen) + ':' + ((miao < 10) ? '0' + miao : miao);
// }
// var bt01 = document.getElementById('bt01');
// var sj01 = document.getElementById('sj01');
// bt01.onclick = function () {
//     sj01.innerText = sjhq();
// }
// var p01 = document.getElementById('p01');
// p01.innerText = sjhq();

// var d01 = document.getElementById('d01');
// var d02 = document.getElementById('d02');
// d01.innerHTML = '123<strong>123</strong>'
// d02.innerText = '123<strong>123</strong>'

// var bt01 = document.getElementById('bt01');
// var bt02 = document.getElementById('bt02');
// var d02 = document.getElementById('d02');
// bt01.onclick = function () {
//     d02.src = './01.jpeg';
//     d02.title = '骚逼';
// }
// bt02.onclick = function () {
//     d02.src = './02.jpeg';
//     d02.title = '小骚逼';
// }

// var i01 = document.getElementById('i01');
// var p01 = document.getElementById('p01');
// function sjhq() {
//     var sj = new Date();
//     var shi = sj.getHours();
//     return shi;
// }
// if (sjhq()<=6) {
//     i01.src='./01.jpeg';
//     p01.innerHTML='早上好';
// }else if(sjhq()<=11) {
//     i01.src='./02.jpeg';
//     p01.innerHTML='上午好';
// }
// else if(sjhq()<=12) {
//     i01.src='./03.jpeg';
//     p01.innerHTML='中午好';
// }
// else if(sjhq()<=18) {
//     i01.src='./04.jpg';
//     p01.innerHTML='下午好';
// }else {
//     i01.src='./05.jpg';
//     p01.innerHTML='晚上好';
// }

// var bt01 = document.getElementById('bt01');
// var in01 = document.getElementById('in01');
// bt01.onclick = function () {
//     in01.value = '点出水了';
//     bt01.disabled = true;
// }

// JD登录
/*var in01 = document.getElementById('in01');
var i01 = document.getElementById('i01');
var flag = 1;
i01.onclick = function () {
    if (flag == 1) {
        in01.type = 'text';
        i01.src = '02.jpeg';
        flag = 0;
    }
    else {
        in01.type = 'password';
        i01.src = '01.jpeg';
        flag=1;
    }
}*/

// var d01 = document.getElementById('d01');
// var f1 = 0;
// d01.onclick = function () {
//     if (f1 == 0) {
//         d01.style.backgroundColor = '#33ff66';
//         d01.style.width = '300px';
//         f1 = 1;
//     } else {
//         d01.style.backgroundColor = '#ff9fff';
//         d01.style.width = '100px';
//         f1 = 0;
//     }
// }

// var d01=document.getElementById('d01');
// var d02=document.getElementById('d02');
// d02.onclick=function () {
//     d01.style.display='none';
// }

// var lis=document.querySelectorAll('li');
// for (var i=0;i<lis.length;i++) {
//     var yzb=i*60;
//     lis[i].style.backgroundPosition='0px -'+yzb+'px';
// }

// var in1 = document.getElementById('inp01');
// in1.onfocus = function () {
//     console.log('111');
//     if (this.value === '输入关键字') {
//         this.value = '';
//     }
//     this.style.color='#000';
// }

// in1.onblur = function () {
//     if (this.value === '') {
//         this.value = '输入关键字';
//         this.style.color='#999';
//     }
// }

// var inp01 = document.getElementById('input01');
// var sp01 = document.getElementById('sp01');
// inp01.onblur = function () {
//     var aa = inp01.value.length;
//     if (aa < 6 || aa > 16) {
//         sp01.className = 'sp01 sp02';
//         sp01.innerHTML='输入不正确，请重新输入';
//     }else {
//         sp01.className = 'sp01';
//         sp01.innerHTML='可以使用该密码';
//     }
// }

// var in01 = document.getElementById('in01');
// in01.onfocus = function () {
//     if (in01.value === '输入姓名') {
//         in01.value = '';
//     }
//     in01.className='in01 in02';
//     in01.style.color='#f00'
// }
// in01.onblur = function () {
//     if (in01.value === '') {
//         in01.value = '输入姓名';
//         in01.style.color='#000'
//     }
//     in01.className='in01';
// }

// var d01 = document.getElementById('d01');
// var d02 = document.getElementById('d02');
// d02.onclick=function () {
//     d01.style.display='none';
// }

// var sp01 = document.getElementById('sp01');
// var lis = document.querySelectorAll('li');
// var fla = 1;
// sp01.onclick = function () {
//     if (fla == 1) {
//         for (var i = 1; i < lis.length; i++) {
//             lis[i].style.display = 'block';
//         }
//         fla = 0;
//     }else {
//         for (var i = 1; i < lis.length; i++) {
//             lis[i].style.display = 'none';
//         }
//         fla = 1;
//     }
// }