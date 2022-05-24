// function Dldl(mz,xb,wh) {
//     this.mz=mz;
//     this.xb=xb;
//     this.wh=wh;
//     Dldl.prototype.hj=function() {
//         console.log('邪魔虎鲸斧');
//     }
// }
// var ts =new Dldl('唐三','男','昊天锤');
// console.log(ts);
// var xw=new Dldl ('小舞','女','柔骨兔');
// console.log(xw);
// ts.hj();
// xw.hj();
// console.log(ts.hj===xw.hj);
// console.log(ts);

function A1(mz) {
    this.mz = mz;
    A1.prototype.hq = function () {
        console.log('蓝银霸王枪66');
    }
}

// A1.prototype = {
//     hj: function () {
//         console.log('蓝银霸王枪');
//     },
//     hl: function () {
//         console.log('99级御月境');
//     },
//     constructor: A1,
// }
// A1.hg = function () {
//     console.log('焚烧右臂');
// }
// var a1 = new A1('xiaowu');
// // console.log(a1.mz);
// a1.hj();
// a1.hl();
// a1.hq();
// // a1.hg();
// A1.prototype.hj();
// console.log(A1.prototype);
// console.log(A1.prototype.constructor);
// console.log(a1.__proto__.constructor);
// // A1.hg();
// // console.log(a1.hg);

// Object.prototype.hg=function () {
//     console.log('深海魔鲸王魂骨');
// }
// function A1(mz) {
//     this.mz=mz;
//     A1.prototype.hg=function() {
//         console.log('八蛛魂骨');
//     }
// }
// var a1=new A1();
// a1.hg=function() {
//     console.log('柔骨兔魂骨');
// }
// a1.hg();

console.log(Array.prototype);
Array.prototype.qiuhe=function () {
    var sum=0;
    for (let i=0;i<this.length;i++) {
        
        var a=parseFloat(this[i]);
        sum+=a;
    }
    return sum;
}
var arr=[1,2,3,156,465,56,15,1,56];
var sum=arr.qiuhe();
console.log(sum);
console.log(Array.prototype);
var arr1=new Array(11,22,33);
var b=arr1.qiuhe();
console.log(arr1.qiuhe());