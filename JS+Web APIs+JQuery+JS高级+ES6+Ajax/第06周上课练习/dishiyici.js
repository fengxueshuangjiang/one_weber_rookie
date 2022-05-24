// function f1() {
//     console.log('123');
// }
// f1();
// (function(a,b) {
//     console.log('521');
//     alert(a+b);
// })(21,5);
// (function f1(a,b) {
//     console.log('123456');
//     console.log(a+b);
// } (21,12));
// (function flexble(window,document) {//立即执行函数
//     var Html=document.documentElement;//获取html标签
//     var dpr=window.devicePixelRatio||1;//像素比
//     function bzs() {//body的字体大小
//         if (document.body) {
//             document.body.style.fontSize=(12*dpr)+'px';
//         }else {
//             document.addEventListener('DOMContentLoaded',bzs);
//         }
//     }
//     bzs();
//     function hsz() {//html的字体大小
//         var rem=Html.clientWidth/10;
//         Html.style.fontSize=rem+'px';
//     }
//     hsz();
//     window.addEventListener('resize',hsz);//页面尺寸发生改变重新设置rem
//     window.addEventListener('pageshow',function (e) {//页面刷新重新设置rem
//         if (e.persisted) {//如果是缓存取过来的
//             hsz;
//         }
//     })
// } (window,document));

// var d01 = document.querySelector('.d01');
// var d03 = document.querySelector('.d03');
// var d06 = document.querySelector('.d06');
// var d04 = document.querySelector('.d04');
// var aa = d03.offsetTop;
// var bb = d01.offsetTop;
// var cc = bb - aa;
// var dd=d04.offsetTop;
// // console.log(cc);
// document.addEventListener('scroll', function () {
//     var juli = window.scrollY;
//     // console.log(Math.floor(juli));

//     if (juli >= aa) {
//         d01.style.position = 'fixed';
//         d01.style.top = cc + 'px';
//         d06.style.display = 'block';
//     } else {
//         d01.style.position = 'absolute';
//         d01.style.top = 300 + 'px';
//         d06.style.display = 'none';
//     }
//     if (juli >= dd) {
//         d06.style.display = 'block';
//     } else {
//         d06.style.display = 'none';
//     }
// });

// var d01 = document.querySelector('.d01');
// var d02 = document.querySelector('.d02');
// var aa = d01.offsetWidth - d02.offsetWidth;
// var bb = d01.offsetHeight - d02.offsetHeight;
// dsq01 = setInterval(function () {
//     if (d02.offsetLeft >= aa) {
//         clearInterval(dsq01);
//         dsq02 = setInterval(function () {
//             if (d02.offsetTop >= bb) {
//                 clearInterval(dsq02);
//                 dsq03 = setInterval(function () {
//                     if (d02.offsetLeft <= 0) {
//                         clearInterval(dsq03);
//                         dsq04 = setInterval(function () {
//                             if (d02.offsetTop <= 0) {
//                                 clearInterval(dsq04);
//                             } else {
//                                 d02.style.top = d02.offsetTop - 1 + 'px';
//                             }
//                         }, 5);
//                     } else {
//                         d02.style.left = d02.offsetLeft - 1 + 'px';
//                     }
//                 }, 5);
//             } else {
//                 d02.style.top = d02.offsetTop + 1 + 'px';
//             }
//         }, 5);
//     } else {
//         d02.style.left = d02.offsetLeft + 1 + 'px';
//     }
// }, 5);

// var d01=document.querySelector('.d01');
// var d02=document.querySelector('.d02');
// var s01=document.querySelector('.s01');
// var aa = d01.offsetWidth - d02.offsetWidth;
// function dhfz(duixiang,jieshu,yidongsudu) {
//     clearInterval(duixiang.jsq01);//让方法只存在于一个计时器
//     duixiang.jsq01=setInterval(function () {
//         if (duixiang.offsetLeft>=jieshu) {
//             clearInterval(duixiang.jsq01);
//         }else {
//             duixiang.style.left=duixiang.offsetLeft+yidongsudu+'px';
//         }
//     },20)
// };
// dhfz(d02,aa,2);
// dhfz(s01,500,5);

// function fn1(obj, juli, hanshu) {
//     obj.style.backgroundColor='#ddc0ff';
//     // console.log(hanshu);
//     clearInterval(obj.times);
//     obj.times = setInterval(function () {
//         var a = (juli - obj.offsetLeft) / 10;
//         a = a > 0 ? Math.ceil(a) : Math.floor(a);
//         if (obj.offsetLeft == juli) {
//             clearInterval(obj.times);
//             if(hanshu) {
//                 hanshu();
//             }

//         } else {
//             obj.style.left = obj.offsetLeft + a + 'px';
//         }
//     }, 15);
// };
// var d01 = document.querySelector('.d01');
// var btn01 = document.querySelector('.btn001');
// var btn02 = document.querySelector('.btn002');
// btn01.addEventListener('click', function () {
//     fn1(d01, 500, function () {
//         // console.log('123');
//         d01.style.backgroundColor = '#ffc0ff';
//     });
// });
// btn02.addEventListener('click', function () {
//     fn1(d01, 800, function () {
//         // console.log('123');
//         d01.style.backgroundColor = '#ffc0ff';
//     }); //动画函数
// });

// function fun1(obj, juli, hanshu) {
//     obj.style.backgroundColor = '#ddc0ff';
//     // console.log(hanshu);
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
// var spans = document.querySelectorAll('span');
// var divs = document.querySelectorAll('.d03');
// for (let i=0;i<spans.length;i++) {
// spans[i].addEventListener('mouseenter', function () {
//     fun1(divs[i], -100,function () {
//         spans[i].innerHTML='→';
//     });
// });
// spans[i].addEventListener('mouseleave', function () {
//     fun1(divs[i], 0,function () {
//         spans[i].innerHTML='←';
//     });
// });
// }

// 轮播图
function fun1(obj, juli, hanshu) { //动画缓动函数
    clearInterval(obj.times);
    obj.times = setInterval(function () {
        var a = (juli - obj.offsetLeft) / 10;
        a = a > 0 ? Math.ceil(a) : Math.floor(a);
        if (obj.offsetLeft == juli) {
            clearInterval(obj.times);
            if (hanshu) {
                hanshu();
            }

        } else {
            obj.style.left = obj.offsetLeft + a + 'px';
        }
    }, 15);
};
var d01 = document.querySelector('.d01');
var btn = document.querySelectorAll('button');
var u01 = document.querySelector('.u01');
var u02 = document.querySelector('.u02');
var lis = document.querySelectorAll('.li01');
var num1 = 0; //u01移动变量
var num2 = 0; //圆圈移动变量
var timess = setInterval(function () { //自动播放计时器
    btn[1].click(); //自己调用右键点击函数
}, 2000);
d01.addEventListener('mouseenter', function () {
    for (let i = 0; i < btn.length; i++) { //鼠标经过按钮显示
        btn[i].style.display = 'block';
    }
    clearInterval(timess); //鼠标经过自动播放计时器结束
    timess = null;
})
d01.addEventListener('mouseleave', function () {
    for (let i = 0; i < btn.length; i++) { //鼠标离开按钮隐藏
        btn[i].style.display = 'none';
    }
    timess = setInterval(function () { //鼠标离开自动播放计时器开始
        btn[1].click();
    }, 2000);
})
for (let i = 0; i < lis.length; i++) { //动态生成li
    console.log(i);
    var li = document.createElement('li');
    u02.appendChild(li);
}
u02.children[0].style.backgroundColor = '#ffc0ff'; //li默认有一个选中
for (let i = 0; i < u02.children.length; i++) {
    u02.children[i].addEventListener('click', function () { //li的点击排他上色
        for (let i = 0; i < u02.children.length; i++) {
            u02.children[i].style.backgroundColor = '';
        }
        u02.children[i].style.backgroundColor = '#ffc0ff';
        fun1(u01, -i * 1200) //li点击换图
        num1 = i; //点击小圈，让箭头点击时同步，不改变图片顺序
        num2 = i; //点击小圈之后，点箭头，圈的格式和图片同步
    })
}
//克隆图片
var firsttu = u01.children[0].cloneNode(true);
u01.appendChild(firsttu);
var flage = true;//节流阀
btn[0].addEventListener('click', function () {
    if (flage) {
        flage = false;
        if (num1 == 0) { //走到了第一张图片，快速到5
            num1 = u01.children.length - 1;
            u01.style.left = -num1 * 1200 + 'px';
        }
        num1--; //计数器-1
        num2--; //计数器-1
        if (num2 < 0) { //圆圈复原
            num2 = u02.children.length - 1;
        }
        fun1(u01, -num1 * 1200, function () {
            flage = true;
        }); //点击换图//换的慢函数
        for (let i = 0; i < u02.children.length; i++) { //圆圈颜色跟随图片同步走，排他
            u02.children[i].style.backgroundColor = '';
        }
        u02.children[num2].style.backgroundColor = '#ffc0ff';
    }

})

btn[1].addEventListener('click', function () {
    if (flage) {
        flage = false;
        if (num1 == u01.children.length - 1) { //走到了最后一张图片，快速到0
            u01.style.left = 0;
            num1 = 0
        }
        num1++; //计数器+1
        num2++; //计数器+1
        if (num2 == u02.children.length) { //圆圈复原
            num2 = 0;
        }
        fun1(u01, -num1 * 1200, function () {
            flage = true;
        });
        for (let i = 0; i < u02.children.length; i++) { //圆圈跟随图片同步走，排他
            u02.children[i].style.backgroundColor = '';
        }
        u02.chi
    }
    u02.children[num2].style.backgroundColor = '#ffc0ff';
});