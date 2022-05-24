// console.log('00001223');
// setTimeout(function() {
//     console.log('1223');
// },1000)
// console.log('18848223');
// console.log('00001223');
// setTimeout(function() {
//     console.log('1223');
// },0)
// console.log('18848223');

// console.log('1');
// document.addEventListener('click',function() {
//     console.log('4');
// });
// console.log('2');
// setTimeout(function() {
//     console.log('3');
// },2000);

// var btn=document.querySelector('button');
// btn.addEventListener('click',function () {
//     // console.log(location.href);
//     location.href='https://www.baidu.com';
// });

// var p = document.querySelector('p');
// p.innerHTML = '5秒之后欧跳转到百度';
// var a = 4;
// setInterval(function () {
//     p.innerHTML = a + '秒之后欧跳转到百度';
//     if (a <= 0) {
//         location.href = 'https://www.baidu.com';
//     }else {
//         a--;
//     }
// }, 1000);

// var but = document.querySelector('button');
// but.addEventListener('click',function() {
//     // location.assign('https://www.baidu.com');
//     // location.replace('https://www.baidu.com');
//     location.reload();
// });

// var fu=document.querySelector('.fa');
// var er=document.querySelector('.son');
// var d01=document.querySelector('.d01');
// console.log(er.offsetTop);
// console.log(er.offsetLeft);
// console.log(d01.offsetWidth);
// console.log(d01.offsetHeight);
// console.log(er.offsetParent);
// console.log(d01.style.width);
// d01.style.width='1000px';

// var d01=document.querySelector('.d01');
// var kuan=d01.offsetLeft;
// var gao=d01.offsetTop;
// d01.addEventListener('mousemove',function (e) {
//     var zuo=e.pageX;
//     var shang=e.pageY;
//     console.log(zuo-kuan);
//     console.log(shang-gao);
// });

// 模态框
// var btn01 = document.querySelector('.btn01');
// var d01 = document.querySelector('.d01');
// var d02 = document.querySelector('.d02');
// var d05 = document.querySelector('.d05');
// var p01 = document.querySelector('p');
// btn01.addEventListener('click', function () {
//     d01.style.display = 'block';
//     d05.style.display = 'block';
// });
// d02.addEventListener('click', function () {
//     d01.style.display = 'none';
//     d05.style.display = 'none';
// });
// p01.addEventListener('mousedown', function (e) {
//     var X = e.pageX - p01.offsetLeft;
//     var Y = e.pageY - p01.offsetTop;
//     d01.style.left = e.pageX - X + 'px';
//     d01.style.top = e.pageY - Y + 'px';
//     document.addEventListener('mousemove', fn1);
//     function fn1(e) {
//         d01.style.left = e.pageX - X + 'px';
//         d01.style.top = e.pageY - Y + 'px';
//     }
//     document.addEventListener('mouseup', function () {
//         document.removeEventListener('mousemove', fn1);
//     })
// })

// 京东看图模块
window.onload = function () {
    var d01 = document.querySelector('.d01');
    var d02 = document.querySelector('.d02');
    var d03 = document.querySelector('.d03');
    var u01 = document.querySelector('.u01');
    d01.addEventListener('mouseover', function () {
        d02.style.display = 'block';
        d03.style.display = 'block';
    })
    d01.addEventListener('mouseout', function () {
        d02.style.display = 'none';
        d03.style.display = 'none';
    })
    d01.addEventListener('mousemove',fn1)
    function fn1(event) {
        var e = event || window.event;
        var x = e.pageX - d01.offsetLeft;
        var y = e.pageY - d01.offsetTop;
        var a1 = y - d02.offsetHeight/2;
        var a2 = x - d02.offsetHeight/2;
        if (a1 <= 0) {
            a1 = 0;
        }
        if (a2 <= 0) {
            a2 = 0;
        }
        if (a1 >= d01.offsetHeight-d02.offsetHeight) {
            a1 = d01.offsetHeight-d02.offsetHeight;
        }
        if (a2 >= d01.offsetWidth-d02.offsetWidth) {
            a2 = d01.offsetWidth-d02.offsetWidth;
        }
        d02.style.top = a1 + 'px';
        d02.style.left = a2 + 'px';
        var fkdx=d01.offsetWidth-d02.offsetWidth;
        var dtdy=u01.offsetWidth-d03.offsetWidth;
        var fkdy=d01.offsetHeight-d02.offsetHeight;
        var dtdx=u01.offsetHeight-d03.offsetHeight;
        var dongbay=a1*dtdx/fkdx;
        var dongbax=a2*dtdy/fkdy;
        u01.style.top=-dongbay+'px';
        u01.style.left=-dongbax+'px';
    }
}