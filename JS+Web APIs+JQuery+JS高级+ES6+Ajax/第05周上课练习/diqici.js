// var buts = document.getElementsByTagName('button');
// for (var i = 0; i < buts.length; i++) {
//     buts[i].onclick = function () {
//         console.log('炸裂吧宝贝');
//         for (var i = 0; i < buts.length; i++) {
//             buts[i].style.backgroundColor = ''
//         }
//         this.style.backgroundColor = '#ff9fff';
//     }
// }

// var imgs=document.getElementsByTagName('img');
// var bodys=document.body;
// for (var i=0;i<imgs.length;i++) {
//     imgs[i].onclick=function () {
//         bodys.style.backgroundImage='url('+this.src+')';
//     }
// }

// var trs=document.querySelector('tbody').querySelectorAll('tr');
// for (let i=0;i<trs.length;i++) {
//     trs[i].onmouseover=function () {
//         this.className='ta03 ta02';
//         console.log('111');
//     }
//     trs[i].onmouseout=function () {
//         this.className='ta03';
//     }
// }

// var radio01 = document.querySelector('thead').querySelector('input');
// var radio02 = document.querySelector('tbody').querySelectorAll('input');
// var p01 = document.querySelector('thead').querySelector('p');
// var a1 = 1;
// radio01.onclick = function () {
//     if (a1 === 1) {
//         for (let i = 0; i < radio02.length; i++) {
//             radio02[i].checked = true;
//         }
//         a1 = 0;
//         p01.innerHTML = '全不选';
//     } else {
//         for (let i = 0; i < radio02.length; i++) {
//             radio02[i].checked = false;
//         }
//         radio01.checked = '';
//         p01.innerHTML = '全选';
//         a1 = 1;
//     }
// }
// for (let i = 0; i < radio02.length; i++) {
//     radio02[i].onclick = function () {
//         var a2 = true;
//         for (let i = 0; i < radio02.length; i++) {
//             if (radio02[i].checked == false) {
//                 a2 = false;
//                 break;
//                 console.log(a2);
//             }
//         }
//         radio01.checked = a2;
//     }
// }

// var d01=document.getElementById('d101');
// console.log(d01.id);
// console.log(d01.getAttribute('aa566'));
// // console.log(d01.aa566);
// d01.id='a111';
// console.log(d01.id);
// d01.setAttribute('aa566','aa1111');
// console.log(d01.getAttribute('aa566'));

// var lis = document.querySelectorAll('li');
// var div01 = document.querySelector('.d03').querySelectorAll('div');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].setAttribute('suoYin', i);
//     lis[i].onclick = function () {
//         for (let i = 0; i < lis.length; i++) {
//             lis[i].className = '';
//         }
//         lis[i].className = 'li01';
//         var a1 = lis[i].getAttribute('suoYin');
//         for (let i = 0; i < div01.length; i++) {
//             div01[i].style.display = 'none';
//         }
//         div01[a1].style.display = 'block';
//     }
// }

// var d01=document.querySelector('div');
// console.log(d01.getAttribute('data-dasb'));
// console.log(d01.dataset.dasb);
// console.log(d01.dataset['dasb']);

// var dads=document.querySelector('.d01');
// console.log(dads);
// console.log(dads.parentNode);
// var dsa=document.querySelector('ul');
// console.log(dsa.childNodes);
// console.log(dsa.children[0]);
// console.log(dsa.firstElementChild);

// var lis = document.getElementsByClassName('li1');
// var ols = document.querySelectorAll('ol');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].onmouseover = function () {
//         var fla = i;
//         for (let i = 0; i < ols.length; i++) {
//             ols[i].style.display = 'none';
//         }
//         ols[fla].style.display = 'block';
//     }
//     lis[i].onmouseout = function () {
//         ols[i].style.display = 'none';
//     }
// }

// var a1=document.querySelector('div');
// console.log(a1);
// console.log(a1.nextElementSibling);
// console.log(a1.previousElementSibling);

// var ul=document.querySelector('ul');
// var li=document.createElement('li');
// // ul.appendChild(li);
// ul.insertBefore(li,ul.children[0]);

// var btn = document.querySelector('#btn01');
// var text01 = document.querySelector('#text01');
// var ul = document.querySelector('ul');
// btn.onclick = function () {
//     if (text01.value == '') {
//         alert('美柚文字');
//         return false;
//     } else {
//         var li = document.createElement('li');
//         li.innerHTML = text01.value + "<a href='javascript:;'>删除</a>";
//         ul.insertBefore(li, ul.children[0])
//         var shanchu = document.querySelectorAll('a');
//         for (let i = 0; i < shanchu.length; i++) {
//             shanchu[i].onclick = function () {
//                 ul.removeChild(shanchu[i].parentNode)
//             }
//         }
//     }
//     text01.value = '';
// }

// var shanhu=document.querySelector('button');
// var ul=document.querySelector('ul');
// shanhu.onclick=function() {
//     if (ul.children.length==0) {
//         this.disabled=true;
//     }else {
//     ul.removeChild(ul.children[0]);        
//     }
// }

// var fz=document.querySelector('button');
// var ul=document.querySelector('ul');
// fz.onclick=function() {
//     var a1=ul.children[0].cloneNode(true);
//     ul.appendChild(a1);
// }