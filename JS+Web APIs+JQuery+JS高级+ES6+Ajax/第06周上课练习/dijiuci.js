// var btn= document.querySelectorAll('button');
// btn[0].onclick=function() {
//     alert('我是123');
// }
// btn[0].onclick=function() {
//     alert('我是456');
// }
// btn[1].addEventListener('click',function() {
//     alert('456');
// });
// btn[1].addEventListener('click',function() {
//     alert('888');
// });

// var divs=document.querySelectorAll('div');
// divs[0].onclick=function () {
//     alert('123');
//     divs[0].onclick=null;
// }
// divs[1].addEventListener('click',f0)
// function f0() {
//     alert('456');
//     divs[1].removeEventListener('click',f0);
// }

// var d01=document.querySelector('.d01');
// var d02=document.querySelector('.d02');
// d01.addEventListener('click',f0)
// function f0 () {
//     alert('12a3');
// }
// d02.addEventListener('click',f1)
// function f1 () {
//     alert('12a31556');
// }

// var d01=document.querySelector('.d01');
// var a01=document.querySelector('a');
// d01.addEventListener('click',f0)
// function f0 (event) {
//     alert('155');
//     console.log(event.target);
//     console.log(event.type);
// }
// a01.addEventListener('click',f1)
// function f1 (event) {
//     event.preventDefault();
// }

// var d01=document.querySelector('.d01');
// var d02=document.querySelector('.d02');
// d02.addEventListener('click',f0);
// function f0 (e) {
//     alert('123sjoi');
//     e.stopPropagation();
// }
// d01.addEventListener('click',f1);
// function f1 () {
//     alert('123sj213213oi');
// }

// var ul=document.querySelector('ul');
// ul.addEventListener('click',fun01);
// function fun01 (e) {
//     alert('02456456');
//     e.stopPropagation();
//     for (var i=0;i<ul.children.length;i++) {
//         ul.children[i].style.backgroundColor='';
//     }
//     e.target.style.backgroundColor='#ff9fff';
// }

// document.addEventListener('contextmenu',fun01);
// function fun01(event) {
//     event.preventDefault();
// }
// document.addEventListener('selectstart',fun02);
// function fun02(event) {
//     event.preventDefault();
// }
// document.addEventListener('click',fun03);
// function fun03(event) {
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log(event.pageX);
//     console.log(event.pageY);
//     console.log(event.screenX);
//     console.log(event.screenY);
// }

// var imgs=document.querySelector('img');
// document.addEventListener('mousemove',fun01);
// function fun01 (event) {
//     var x=event.pageX;
//     var y=event.pageY;
//     console.log(x,y);
//     imgs.style.top=y-25+'px';
//     imgs.style.left=x-25+'px';
// }

// document.addEventListener('keyup',function(e) {
//     // console.log('123');
//     console.log(e.key);
//     // console.log(e.keyCode);
// });
// document.addEventListener('keydown',function(e) {
//     console.log(e.key);
// });
// document.addEventListener('keypress',function(e) {
//     console.log(e.key);
// });

// var a1=document.querySelector('input');
// document.addEventListener('keyup',function (e) {
//     if(e.key=='s'||e.key=='S') {
//         a1.focus();
//     }
// });

// var inp=document.querySelector('input');
// var d00=document.querySelector('.d00');
// inp.addEventListener('keyup',function () {
//     if(inp.value!='') {
//         d00.style.display='block';
//         d00.innerHTML=inp.value+'<div class="d01"></div>';
//     }else {
//         d00.style.display='none';
//     }
// });
// inp.addEventListener('blur',function () {
//     d00.style.display='none';
// });
// inp.addEventListener('focus',function () {
//     if (inp.value!='') {
//         d00.style.display='block';
//     }else {
//         d00.style.display='none';
//     }

// });

// var a1=100;
// window.alert(window.a1);
// console.dir(window);

// window.onload = function () {
//     var btn01 = document.querySelector('.btn01');
//     btn01.addEventListener('click', function () {
//         alert('123');
//     });
//     alert('第一');
// };
// document.addEventListener('DOMContentLoaded',function () {
//     alert('123123');
//     var btn01 = document.querySelector('.btn01');
//     btn01.addEventListener('click', function () {
//         alert('123123');
//     });
// })
window.addEventListener('load', function () {
    // var divs = document.querySelector('.d01');
    // window.addEventListener('resize', function () {
    //     if (window.innerWidth <= '1000') {
    //         divs.style.display = 'none';
    //     }
    //     else {
    //         divs.style.display = 'block';
    //     }
    // });
    // var a1=setTimeout(function() {
    //     console.log('爆炸');
    // },2000);
    // var a2=setTimeout(function() {
    //     console.log('爆炸');
    // },3000);
    // var img=document.querySelector('img');
    // var time1=setTimeout(function() {
    //     img.style.display='none';
    // },5000);
    // var btns=document.querySelector('button');
    // btns.addEventListener('click',function() {
    //     img.style.display='none';
    //     clearTimeout(time1);
    //     btns.style.display='none';
    // });
    // var p01=document.querySelector('p');
    // setInterval(function() {
    //     p01.innerHTML=new Date();
    //     // console.log('123');
    // },1000);
    // var divs = document.querySelectorAll('div');
    // var btns = document.querySelectorAll('button');
    // djs();
    // function djs() {
    //     var haomiao1 = +new Date('2022-4-28 00:00:00');
    //     var haomiao2 = +new Date();
    //     var shengyumiao = (haomiao1 - haomiao2) / 1000;
    //     var shi = Math.floor(shengyumiao / 60 / 60 % 24);
    //     divs[0].innerHTML = (shi<10)?'0'+shi:shi;
    //     var fen = Math.floor(shengyumiao / 60 % 60);
    //     divs[1].innerHTML = (fen<10)?'0'+fen:fen;
    //     var miao = Math.floor(shengyumiao % 60);
    //     divs[2].innerHTML = (miao<10)?'0'+miao:miao;
    //     console.log(shi,fen,miao);
    // }
    // // setInterval(djs, 1000);
    // var dsq01=null;
    // btns[0].addEventListener('click',function() {
    //     dsq01=setInterval(djs, 1000);
    // });
    // btns[1].addEventListener('click',function() {
    //     clearInterval(dsq01);
    // });
    // var btn = document.querySelector('button');
    // btn.addEventListener('click', function () {
    //     btn.innerHTML = '60秒后获取验证码';
    //     btn.disabled = true;
    //     var aaa = 59;
    //     var times=setInterval(function () {
    //         if (aaa >= 0) {
    //             btn.innerHTML = aaa--+'秒后获取验证码';
    //         }else {
    //             clearInterval(times);
    //             btn.disabled = false;
    //             btn.innerHTML = '获取验证码';
    //             aaa=59;
    //         }
    //     }, 1000)
    // });
    console.log(location.search);
    var div=document.querySelector('div');
    var a1=location.search.substring('1');
    var a2=location.search.split('=');
    console.log(a1);
    console.log(a2);
    div.innerHTML=a2[1]+'欢迎你';
});