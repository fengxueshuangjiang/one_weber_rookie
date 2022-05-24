// var str='mjj';
// var zz=/mjj/g;
// console.log(zz.test(str));
// var zz=new RegExp('5d$','g')
// var str='12488sd885d';
// console.log(zz.test(str));

var sjh = document.querySelector('.inp1');
var sjh01 = document.querySelector('.sjh01')
var zz01 = /^[1][0-9]{10}$/;
sjh.addEventListener('blur', function () {
    if (zz01.test(sjh.value)) {
        sjh01.innerHTML = '输入合法';
        sjh01.style.color = '#33ff66'
    } else {
        sjh01.innerHTML = '输入不合法';
        sjh01.style.color = '#f00'
    }
});
var qq = document.querySelector('.inp2');
var qq01 = document.querySelector('.sjh02')
var zz02 = /^[1-9][0-9]{4,9}$/;
qq.addEventListener('blur', function () {
    if (zz02.test(qq.value)) {
        qq01.innerHTML = '输入合法';
        qq01.style.color = '#33ff66'
    } else {
        qq01.innerHTML = '输入不合法';
        qq01.style.color = '#f00'
    }
})
var nc = document.querySelector('.inp3');
var nc01 = document.querySelector('.sjh03')
var zz03 = /^[\u4e00-\u9fa5]{2,8}$/;
nc.addEventListener('blur', function () {
    if (zz03.test(nc.value)) {
        nc01.innerHTML = '输入合法';
        nc01.style.color = '#33ff66'
    } else {
        nc01.innerHTML = '输入不合法';
        nc01.style.color = '#f00'
    }
})
var yzm = document.querySelector('.inp4');
var yzm01 = document.querySelector('.sjh04')
var zz04 = /^\d{6}$/;
yzm.addEventListener('blur', function () {
    if (zz04.test(yzm.value)) {
        yzm01.innerHTML = '输入合法';
        yzm01.style.color = '#33ff66'
    } else {
        yzm01.innerHTML = '输入不合法';
        yzm01.style.color = '#f00'
    }
})
var mm = document.querySelector('.inp5');
var mm01 = document.querySelector('.sjh05')
var zz05 = /^[\w._@-]{8,16}$/;
var xx='';
mm.addEventListener('blur', function () {
    if (zz05.test(mm.value)) {
        mm01.innerHTML = '输入合法';
        mm01.style.color = '#33ff66'
        xx=mm.value;
    } else {
        mm01.innerHTML = '输入不合法';
        mm01.style.color = '#f00'
    }
})

console.log(xx);
var mm2 = document.querySelector('.inp6');
var mm02 = document.querySelector('.sjh06')
mm2.addEventListener('blur', function () {
    if (mm2.value==xx) {
        mm02.innerHTML = '输入正确';
        mm02.style.color = '#33ff66'
    } else {
        mm02.innerHTML = '两次输入不一致';
        mm02.style.color = '#f00'
    }
})