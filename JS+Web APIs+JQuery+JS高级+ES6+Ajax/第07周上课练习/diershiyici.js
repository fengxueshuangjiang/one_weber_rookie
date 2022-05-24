// var a=new Dldl('liyu',21,'男');
// console.log(a.yname);
// console.log(a.yage);
// console.log(a.yxb);
// console.log(a);
// function Dldl(yname,yage,yxb) {
//     this.yname=yname;
//     this.yage=yage;
//     this.yxb=yxb;
// };

// class Dldl {
//     constructor(yname, yage, yxb,wuhun,hunli,hunhuan) {
//         this.yname = yname;
//         this.yage = yage;
//         this.yxb = yxb;
//         this.wuhun = wuhun;
//         this.hunli = hunli;
//         this.hunhuan = hunhuan;
//     }
//     hunji(a1,a2,a3,a4,a5,a6,a7,a8,a9) {
//         console.log(this.yname+'的魂技有'+'\n'+a1);
//         console.log(this.yname+'的魂技有'+'\n'+a2);
//         console.log(this.yname+'的魂技有'+'\n'+a3);
//         console.log(this.yname+'的魂技有'+'\n'+a4);
//         console.log(this.yname+'的魂技有'+'\n'+a5);
//         console.log(this.yname+'的魂技有'+'\n'+a6);
//         console.log(this.yname+'的魂技有'+'\n'+a7);
//         console.log(this.yname+'的魂技有'+'\n'+a8);
//         console.log(this.yname+'的魂技有'+'\n'+a9);
//     }
// }
// var a=new Dldl('小舞',21,'女','肉骨兔','41级','黄黄紫紫');
// console.log(a.yname);
// console.log(a.yage);
// console.log(a.yxb);
// console.log(a.wuhun);
// console.log(a.hunli);
// console.log(a.hunhuan);
// // console.log(a);
// a.hunji('腰弓','八段摔','瞬移','无敌金身');
// class Whd extends Dldl {
// }
// var b=new Whd('降龙',71,'男','降龙棍','96级','黄黄紫紫黑黑黑黑黑');
// console.log(b.yname);
// console.log(b.yage);
// console.log(b.yxb);
// console.log(b.wuhun);
// console.log(b.hunli);
// console.log(b.hunhuan);
// b.hunji('腰弓','八段摔','瞬移','无敌金身','腰弓','八段摔','瞬移','无敌金身','无敌金身')

// class jisuanqi {
//     constructor(x,y) {
//         this.x=x;
//         this.y=y;
//     }
//     sum() {
//         console.log(this.x+this.y);
//     }
//     speak () {
//         console.log('我是你爹');
//     }
// }
// class zijisuanqi extends jisuanqi {
//     constructor(x,y) {
//         super(x,y);
//         this.x=x;
//         this.y=y;
//         this.btn=document.querySelector('.btn1');
//         this.btn.onclick=
//         this.speak;
//         // function () {
//         //     alert('小舞姐万岁');
//         // }
//     }
//     speak() {
//         console.log('叫爹');
//         super.speak();
//         console.log('好吧！');
//     }
//     sumjian() {
//         console.log(this.x-this.y);
//     }
// }
// var c=new zijisuanqi(1,2);
// c.sum();
// c.speak();
// c.sumjian();

// var a=document.querySelector('.btn1');
// var num=0;
// a.onclick=function () {
//     num++;
//     console.log(num);
// }

// class A1 {
//     constructor (yname) {
//         this.yname=yname;
//     }
//     speak() {
//         console.log(123);
//     }
// }
// class B1 extends A1 {
//     constructor (yname) {
//         // super(yname);
//         this.yname=yname;
//         this.btn=document.querySelector('.btn1');
//         this.btn.onclick=this.speak;
//     }
//     speak() {
//         console.log(this.yname);
//     }
// }
// var aaa=new B1('彤');

// var tar;
// class A1 {
//     constructor (yname) {
//         tar=this;
//         this.yname=yname;
//     }
//     speak() {
//         console.log(tar.yname);
//     }
// }
// class B1 extends A1 {
//     constructor (yname) {
//         super(yname);
//         this.yname=yname;
//         this.btn=document.querySelector('.btn1');
//         this.btn.onclick=this.speak;
//     }
// }
// var aaa=new B1('彤');
var tab01;
class Tab {
    constructor(leiming) {
        tab01 = this;
        this.tabs = document.querySelector(leiming);
        this.huoqu();
        this.init();
    }
    // 初始化，绑定事件
    init() {
        this.huoqu();
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].addEventListener('click', this.qiehuan);
            this.b0s[i].addEventListener('click', this.shanchu);
            this.sps[i].addEventListener('dblclick', this.xiugai);
            this.a4s[i].addEventListener('dblclick', this.xiugai);
        };
        this.b1s.addEventListener('click', this.tianjia);
    }
    // 重新获取元素个数
    huoqu() {
        this.lis = this.tabs.querySelectorAll('li');
        this.a4s = this.tabs.querySelectorAll('.a4');
        this.b1s = this.tabs.querySelector('.b1');
        this.uls = this.tabs.querySelector('ul');
        this.a3s = this.tabs.querySelector('.a3');
        this.b0s = this.tabs.querySelectorAll('.b0');
        this.sps = this.tabs.querySelectorAll('span');
    }
    // 切换
    qiehuan() {
        console.log(this.index);
        tab01.clearclass();
        this.className = 'bk';
        tab01.a4s[this.index].className = 'a4 xs';
    }
    // 添加
    tianjia() {
        tab01.clearclass();
        console.log(123);
        var li = '<li class="bk"><span>测试X</span><button class="b0">X</button></li>';
        var scs = ' <div class="a4 xs">我的内容X</div>';
        tab01.uls.insertAdjacentHTML('beforeend', li);
        tab01.a3s.insertAdjacentHTML('beforeend', scs);
        tab01.init(); //重新给元素绑定点击事件
    }
    // 删除
    shanchu(e) {
        e.stopPropagation();
        console.log(this.parentNode.index);
        var index = this.parentNode.index;
        tab01.uls.removeChild(tab01.lis[index]);
        tab01.a3s.removeChild(tab01.a4s[index]);
        tab01.init();
        console.log(document.querySelector('body'));
        console.log(document.querySelector('.bk'));
        if (!document.querySelector('.bk')){
            index--;
            tab01.lis[index] && tab01.lis[index].click();
        }
    }
    // 修改
    xiugai() {
        // console.log(123);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.mepty();
        this.innerHTML = '<input type="text" value="' + this.innerText + '"></input>';
        var input = this.children[0];
        input.select();
        input.addEventListener('blur', function () {
            this.parentNode.innerHTML = input.value;
        });
        input.addEventListener('keyup', function (e) {
            if (e.key == 'Enter') {
                this.blur();
            }
        });
        tab01.init();
    }
    // 清除类
    clearclass() {
        for (let i = 0; i < tab01.lis.length; i++) {
            tab01.lis[i].className = '';
            tab01.a4s[i].className = 'a4';
        }
    }
}
// class A1 extends Tab {
//     constructor(classs, a2) {
//         super(classs);
//         this.ai = a2;
//     }
// }
// var tablan = new A1('.bbb1', 123);
// console.log(tablan.lis);
var tab=new Tab('.a1');