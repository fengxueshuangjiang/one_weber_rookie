function gund() {
    var juli = $('.floor').offset().top;
    if ($(document).scrollTop() >= juli) {
        $('aside').stop().fadeIn(200)
    } else {
        $('aside').stop().fadeOut(200)
    }
}

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
gund();
var d01 = document.querySelector('.d01');
var btn = document.querySelectorAll('.buttton');
var u01 = document.querySelector('.u01');
var u02 = document.querySelector('.u02');
var lis = document.querySelectorAll('.li01');
var num1 = 0; //u01移动变量
var num2 = 0; //圆圈移动变量
var flages = true;
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
        fun1(u01, -i * 721) //li点击换图
        num1 = i; //点击小圈，让箭头点击时同步，不改变图片顺序
        num2 = i; //点击小圈之后，点箭头，圈的格式和图片同步
    })
}
//克隆图片
var firsttu = u01.children[0].cloneNode(true);
u01.appendChild(firsttu);
var flage = true; //节流阀
btn[0].addEventListener('click', function () {
    if (flage) {
        flage = false;
        if (num1 == 0) { //走到了第一张图片，快速到5
            num1 = u01.children.length - 1;
            u01.style.left = -num1 * 721 + 'px';
        }
        num1--; //计数器-1
        num2--; //计数器-1
        if (num2 < 0) { //圆圈复原
            num2 = u02.children.length - 1;
        }
        fun1(u01, -num1 * 721, function () {
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
        fun1(u01, -num1 * 721, function () {
            flage = true;
        });
        for (let i = 0; i < u02.children.length; i++) { //圆圈跟随图片同步走，排他
            u02.children[i].style.backgroundColor = '';
        }
        u02.chi
    }
    u02.children[num2].style.backgroundColor = '#ffc0ff';
});
$('aside').children('ul').children('li').click(function () {
    $(this).siblings('li').removeClass('lis01');
    $(this).addClass('lis01');
})
$(window).scroll(function () {
    gund();
    if (flages) {
        $('.floor .w').each(function (i, dom) {
            if ($(document).scrollTop() >= $(dom).offset().top) {
                // console.log(i);
                $('aside').children('ul').children('li').eq(i).addClass('lis01').siblings('li').removeClass('lis01')

            }
        })
    }

})
$('aside').children('ul').children('li').click(function () {
    flages=false;
    // console.log($(this).index());
    var x001 = $('.floor .w').eq($(this).index()).offset().top;
    // console.log(x001);
    $('body,html').stop().animate({
        scrollTop: x001,
    }, 500,function () {
        flages=true;
    })
})