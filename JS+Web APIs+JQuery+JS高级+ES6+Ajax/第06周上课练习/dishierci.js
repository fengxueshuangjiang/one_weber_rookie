// var d01 = document.querySelector('.d001');
// var d02 = document.querySelector('.d002');
// document.addEventListener('scroll', function () {
//     if (window.scrollY >= 200) {
//         d01.style.position = 'fixed';
//         d01.style.top = 10 + 'px';
//     } else {
//         d01.style.position = 'absolute';
//         d01.style.top = 200 + 'px';
//     }
//     if (window.scrollY >= 300) {
//         d02.style.display = 'block';
//     } else {
//         d02.style.display = 'none';
//     }
// })
// d02.addEventListener('click', function () {
//     // window.scroll(0, 0);
//     fun1(window, 0);
// });

// function fun1(obj, juli, hanshu) { //动画缓动函数
//     clearInterval(obj.times);
//     obj.times = setInterval(function () {
//         var a = (juli - obj.scrollY) / 10;
//         a = a > 0 ? Math.ceil(a) : Math.floor(a);
//         if (obj.scrollY == juli) {
//             clearInterval(obj.times);
//             hanshu && hanshu();
//         } else {
//             obj.scroll(0, obj.scrollY + a);
//         }
//     }, 15);
// };

// function fun1(obj, juli, hanshu) { //动画缓动函数
//     clearInterval(obj.times);
//     obj.times = setInterval(function () {
//         var a = (juli - obj.offsetLeft) / 10;
//         a = a > 0 ? Math.ceil(a) : Math.floor(a);
//         if (obj.offsetLeft == juli) {
//             clearInterval(obj.times);
//             if (hanshu) {
//                 hanshu();
//             }
//         } else {
//             obj.style.left = obj.offsetLeft + a + 'px';
//         }
//     }, 15);
// };
// // 1.经过过来
// var lis = document.querySelectorAll('li');
// var imgs = document.querySelector('img');
// var flag = true;
// var aa1 = 30;
// var bb1 = true;
// lis[0].style.color = '#33ff66';
// for (let i = 0;i<lis.length; i++) {
//     lis[i].addEventListener('mouseover', function () {
//         lis[i].style.color = '#ff9fff';
//         if (flag) {
//             flag = false;
//             // imgs.style.left=30+i*130+'px';
//             fun1(imgs, 30 + i * 130, function () {
//                 flag = true;
//             });
//         }
//     });
//     lis[i].addEventListener('mouseleave', function () {
//         if (bb1) {
//             lis[i].style.color = '#000';
//         }
//         if (flag) {
//             flag = false;
//             // imgs.style.left=30+'px';
//             fun1(imgs, aa1, function () { // 3.点击停留
//                 flag = true;
//                 bb1 = true;
//             });
//         }
//     });
//     // 2.点击变色
//     lis[i].addEventListener('click', function () {
//         for (let i = 0; i < lis.length; i++) {
//             lis[i].style.color = '#000';
//         }
//         lis[i].style.color = '#33ff66';
//         aa1 = imgs.offsetLeft; // 3.点击停留
//         bb1 = false;
//     });
// }

// var d01 = document.querySelector('.d01');
// d01.addEventListener('touchstart', function(e) {
//     console.log('别碰我，你个渣男');
//     // console.log(e.touches);
//     // console.log(e.targetTouches);
//     // console.log(e.changedTouches);
//     var a=e.targetTouches;
//     console.log(a[0]);
// });
// d01.addEventListener('touchmove', function() {
//     console.log('别脱我衣服，救我啊');
// });
// d01.addEventListener('touchend', function() {
//     console.log('别走啊，服了');
// });
// var x1 = 0; //手指初始位置
// var y1 = 0;
// var x2 = 0; //盒子运来的位置
// var y2 = 0;
// d01.addEventListener('touchstart', function (e) {
//     x1 = e.targetTouches[0].pageX;
//     y1 = e.targetTouches[0].pageY;
//     console.log(x1, y1);
//     x2 = d01.offsetLeft;
//     y2 = d01.offsetTop;
//     console.log(x2, y2);
// })
// d01.addEventListener('touchmove', function (e) {
//     var x3 = e.targetTouches[0].pageX - x1;
//     var y3 = e.targetTouches[0].pageY - y1;
//     if (x2 + x3 >=275) {
//         d01.style.left = 275;
//     }
//     else if (y2 + y3 <=0) {
//         d01.style.top = 0;
//     }
//     else if (x2 + x3 <= 0) {
//         d01.style.left = 0;
//     } 
//     else{
//         d01.style.left = x2 + x3 + 'px';
//         d01.style.top = y2 + y3 + 'px';
//     }
//     e.preventDefault();
// })

// 移动端轮播图
// var u01 = document.querySelector('.u01');
// var li01 = document.querySelectorAll('.li01');
// var u02 = document.querySelector('.u02');
// var aa = false;
// var num1 = 0;
// var time1 = setInterval(function () { //自动播放
//     num1++;
//     var x = -num1 * 94.6667;
//     u01.style.transition = 'all 0.5s'
//     u01.style.transform = 'translateX(' + x + 'vw)'
// }, 2000);
// u01.addEventListener('transitionend', function () { //过渡完成
//     if (num1 >= 5) { //无缝滚动
//         num1 = 0;
//         var x = -num1 * 94.6667;
//         u01.style.transition = 'none'
//         u01.style.transform = 'translateX(' + x + 'vw)';
//     }
//     if (num1 < 0) {
//         num1 = 4;
//         var x = -num1 * 94.6667;
//         u01.style.transition = 'none'
//         u01.style.transform = 'translateX(' + x + 'vw)';
//     }
//     //圆点变化
//     // console.log( u02.querySelector('.a1'));
//     u02.querySelector('.a1').classList.remove('a1'); //圆点跟随移动
//     u02.children[num1].classList.add('a1');
// });
// var x1 = 0;
// var x2 = 0;
// u01.addEventListener('touchstart', function (e) { //手指滑动轮播
//     x1 = e.targetTouches[0].pageX;
//     clearInterval(time1);
// });
// u01.addEventListener('touchmove', function (e) { //手指滑动轮播
//     x2 = e.targetTouches[0].pageX - x1;
//     var yidong = -num1 * 94.6667 + x2;
//     u01.style.transition = 'none';
//     u01.style.transform = 'translateX(' + yidong + 'vw)';
//     e.preventDefault();
//     aa = true;
// });
// u01.addEventListener('touchend', function () { //手指滑动轮播 
//     // console.log(x2);
//     if (aa) {
//         if (Math.abs(x2) > 40) {
//             if (x2 > 0) {
//                 num1--;
//             } else {
//                 num1++;
//             }
//             var yidong = -num1 * 94.6667;
//             u01.style.transition = 'all 0.3s';
//             u01.style.transform = 'translateX(' + yidong + 'vw)';
//         } else {
//             var yidong = -num1 * 94.6667;
//             u01.style.transition = 'all 0.2s';
//             u01.style.transform = 'translateX(' + yidong + 'vw)';
//         }
//         aa = false;
//     }
//     clearInterval
//     time1 = setInterval(function () {
//         num1++;
//         x = -num1 * 94.6667;
//         u01.style.transition = 'all 0.5s';
//         u01.style.transform = 'translateX(' + x + 'vw)';
//     }, 2000);
// });

// var d02 = document.querySelector('.d02');
// document.addEventListener('scroll', function () {
//     if (window.scrollY > 400) {
//         d02.style.display = 'block';
//     } else {
//         d02.style.display = 'none';
//     }
// });
// d02.addEventListener('click', function () {

//     fun1(window,0);
// });
// function fun1(obj, juli, hanshu) { //动画缓动函数
//     clearInterval(obj.times);
//     obj.times = setInterval(function () {
//         var a = (juli - obj.scrollY) / 10;
//         a = a > 0 ? Math.ceil(a) : Math.floor(a);
//         if (obj.scrollY == juli) {
//             clearInterval(obj.times);
//             hanshu && hanshu();
//         } else {
//             obj.scroll(0, obj.scrollY + a);
//         }
//     }, 15);
// };