// console.log(num);
// var num=10;

// console.log(fun);
// var fun =function() {
//     alert('我是傻逼');
// }

// var a = 18;
// f1();
// function f1() {
//     var b = 9;
//     console.log(a);
//     console.log(b);
//     var a = '123';
// }
// 相当于
// var a;
// function f1() {
//     var b;
//     var a;
//     b = 9;
//     console.log(a);
//     console.log(b);
//     a = '123';
// }
// a=18;
// f1();

// f1();
// console.log(b);
// console.log(c);
// console.log(a);
// function f1() {
//     var a=b=c=9;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// 相当于
// function f1() {
//     var a;
//     a=b=c=9;//var a=9;b=9;c=9;b和c属于全局变量 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// f1();
// console.log(a);
// console.log(b);
// console.log(c);

// var isDog={
//     mingzi: '可可',
//     nianliong: 9,
//     leixing: '阿拉斯加犬',
//     yanse: '棕色',
//     www: function () {
//         alert('我TM咬你丫的！');
//     },
//     yanyuan: function () {
//         alert('你是我的神！');
//     },
// }
// alert(isDog.mingzi);
// alert(isDog.nianliong);
// alert(isDog.leixing);
// alert(isDog.yanse);
// isDog.www();
// isDog.yanyuan();
// var obj=new Object();
// obj.name='鸣人';
// obj.xb='男';
// obj.age= 18;
// obj.skill=function () {
//     alert('影分身');
// }
// alert(obj.name);
// alert(obj.age);
// obj.skill();

// function Sidatianwang(mz,xb,nl,dh) {
//     this.mz=mz;
//     this.xb=xb;
//     this.nl=nl;
//     this.dh=dh;
// }
// var ly=new Sidatianwang('李宇','男',21,15831423115);//相当于创建了一个ly对象，ly里面包含了mz,xb,nl,dh四个属性
// var xrt=new Sidatianwang('徐若童','女',21,15831423115);
// console.log(ly.mz);
// console.log(xrt.mz);
// ly.jz='18cm';
// console.log(ly.jz);

// function Wzry(mz,xl,dw,gjjl) {
//     this.yxm=mz;
//     this.yxxl=xl;
//     this.yxdw=dw;
//     this.yxgjjl=gjjl;
// }
// var lp=new Wzry('廉颇','4000','坦克/辅助','近距离');
// console.log(lp.yxdw,lp.yxm,lp.yxgjjl);
// var hy=new Wzry('后裔','3000','射手','远距离');
// console.log(hy.yxdw,hy.yxm,hy.yxgjjl);
// for (var x in lp) {
//     console.log(lp[x]);
// }

// function Diannao(ys, zl, pp, xh) {
//     this.dnyx = ys;
//     this.dnzl = zl;
//     this.dnpp = pp;
//     this.dnxh = xh;
//     this.dndy = function () {
//         var a = prompt('输入电影');
//         console.log(a = '你想看' + a);
//     }
//     this.dnyy = function () {
//         var b = prompt('输入音乐');
//         console.log(b = '你想听' + b);
//     }
//     this.dnyx1 = function () {
//         var c = prompt('输入游戏');
//         console.log(c = '你想玩' + c);
//     }
//     this.dndm = function () {
//         var d = prompt('输入代码');
//         console.log(d = '你敲的代码是' + d);
//     }
// }
// var lx = new Diannao('黑色', '2.4kg', '联想拯救者', 'Y7000-2019');
// for (var key in lx) {
//     console.log(key);
//     console.log(lx[key]);
// }
// var x = parseFloat(prompt('输入数字\n1.游戏\n2.代码\n3.音乐\n4.电影'));
// switch (x) {
//     case 1:
//         lx.dnyx1();
//         break;
//     case 2:
//         lx.dndm();
//         break;
//     case 3:
//         lx.dnyy();
//         break;
//     case 4:
//         lx.dndy();
//         break;
//     default:
// }

// var anniu={
//     ys:'红',
//     kuan:'30px',
//     gao:'30px',
//     dianji:function () {
//         console.log('点了我');
//     }
// }
// console.log(anniu.ys);
// console.log(anniu.kuan);
// console.log(anniu.gao);
// anniu.dianji();

// var che=new Object();
// che.zl='3T';
// che.ys='粉';
// che.pz='冀▪521rt';
// che.zr=function () {
//     alert('可以载人');
// }
// che.lh=function () {
//     alert('可以拉货');
// }
// console.log(che.zl);
// console.log(che.pz);
// che.lh();

// function fzsz(arr) {
//     var shuzu1=[];
//     for (var i=arr.length-1;i>=0;i--) {
//         shuzu1[shuzu1.length]=arr[i];
//     }
//     return shuzu1;
// }
// var sun=fzsz([1,2,3,4,5]);
// console.log(sun);

// function paixu(arr) {
//     var sum=0;
//     for (var i =0;i<arr.length;i++) {
//         for (var j=i;j<arr.length;j++) {
//             if(arr[i]>arr[j]) {
//                 sum=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=sum;
//             }
//         }
//     }
//     return arr;
// }
// var sunn=paixu([1,22,4,5,8,6,5,2,36,45,456]);
// console.log(sunn);

// function paixu(arr) {
//     var sum=0;
//     for (var i =0;i<arr.length-1;i++) {
//         for (var j=0;j<arr.length-i-1;j++) {
//             if(arr[j]>arr[j+1]) {
//                 sum=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=sum;
//             }
//         }
//     }
//     return arr;
// }
// var sunn=paixu([1,22,4,5,8,6,5,2,36,45,456,-12]);
// console.log(sunn);

// 简易计算器
// do {
//     var aa = parseFloat(prompt('欢迎使用简易计算器:\n1.加法运算\n2.减法运算\n3.乘法运算\n4.除法运算\n5.退出'));
//     var sum = 0;
//     var sss = true;
//     if (aa != 5) {
//         switch (aa) {
//             case 1:
//                 var a1 = parseFloat(prompt('输入第一个数'));
//                 var a2 = parseFloat(prompt('输入第二个数'));
//                 sum = a1 + a2;
//                 alert(sum);
//                 break;
//             case 2:
//                 var a1 = parseFloat(prompt('输入第一个数'));
//                 var a2 = parseFloat(prompt('输入第二个数'));
//                 sum = a1 - a2;
//                 alert(sum);
//                 break;
//             case 3:
//                 var a1 = parseFloat(prompt('输入第一个数'));
//                 var a2 = parseFloat(prompt('输入第二个数'));
//                 sum = a1 * a2;
//                 alert(sum);
//                 break;
//             case 4:
//                 var a1 = parseFloat(prompt('输入第一个数'));
//                 var a2 = parseFloat(prompt('输入第二个数'));
//                 sum = a1 / a2;
//                 alert(sum);
//                 break;
//             default:
//                 break;
//         }
//     }
//     if (aa == 5) {
//         sss = false;
//     }
// } while (sss);

// console.log((Math.PI));
// console.log(Math.max(1,2,4,5,5,5,8,9,6,5,5,5,6,56,56,2,456,46));
// console.log(Math.min(1231555,5,5,11,6,56156,56165,16,151,6,561,-152153));

// var myMath={
//     PI:3.1415926535,
//     max:function() {
//         var max=arguments[0];
//         for (var i=0;i<arguments.length;i++) {
//             if (max<arguments[i]) {
//                 max=arguments[i];
//             }
//         }
//         return max;
//     },
//     min:function() {
//         var min=arguments[0];
//         for (var i=0;i<arguments.length;i++) {
//             if (min>arguments[i]) {
//                 min=arguments[i];
//             }
//         }
//         return min;
//     }
// }
// alert(myMath.PI);
// alert(myMath.max(1,2,2,4,84,56,456,56,456,456,464,56));
// alert(myMath.min(1,2,2,4,84,56,456,56,456,456,464,56));
// console.log(Math.abs(-1556));
// console.log(Math.floor(1.2565));
// console.log(Math.ceil(158.2355));
// console.log(Math.round(4.5));
// console.log(Math.round(4.1));
// console.log(Math.random());

// function sjs() {
//     var min = parseFloat(prompt('小数'));
//     var max = parseFloat(prompt('大数'));
//     var a = Math.floor(Math.random() * (max - min + 1)) + min;
//     return a;
// }
// console.log(sjs());
// var arr=['彤','锦','怡','楠','童','月'];
// function sjs() {
//     var min = /*parseFloat(prompt('小数'));*/0;
//     var max = /*parseFloat(prompt('大数'));*/arr.length-1;
//     var a = Math.floor(Math.random() * (max - min + 1)) + min;
//     return a;
// }
// console.log(arr[sjs()]);

// function sjs() {
//     var min = 0;
//     var max = 100;
//     var a = Math.floor(Math.random() * (max - min + 1)) + min;
//     return a;
// }
// var a = sjs();
// for (var i = 1; i <= 10; i++) {
//     var b = parseFloat(prompt('请输入你的猜的数字，第' + i + '次'));
//     if (a > b) {
//         console.log('很遗憾你第' + i + '次猜入小了');
//     } else if (a < b) {
//         console.log('很遗憾你第' + i + '次猜入大了');
//     } else {
//         console.log('恭喜你第' + i + '次猜对了');
//         break;
//     }
// }

// var sj = new Date();
// console.log(sj);
// var nian = sj.getFullYear();
// var yue = sj.getMonth() + 1;
// var ri = sj.getDate();
// var xq = sj.getDay();
// var shi = sj.getHours();
// var fen = sj.getMinutes();
// var miao = sj.getSeconds();
// var xq1 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// console.log(nian + '年' + yue + '月' + ri + '日' + ' ' + xq1[xq]);
// console.log(shi + ':' + fen + ':' + miao);
// var dndm=new Date();
// console.log(dndm.getTime());

// 日期
// function riqi() {
//     var sj = new Date();
//     var nian = sj.getFullYear();
//     var yue = sj.getMonth() + 1;
//     var ri = sj.getDate();
//     var xq = sj.getDay();
//     var xq1 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
//     return nian + '年' + yue + '月' + ri + '日' + ' ' + xq1[xq];
// }

// 时间
// function sjian() {
//     var sj = new Date();
//     var shi = sj.getHours();
//     var fen = (sj.getMinutes() < 10) ? '0' + sj.getMinutes() : sj.getMinutes;
//     var miao = (sj.getSeconds() < 10) ? '0' + sj.getSeconds() : sj.getSeconds();
//     return shi +':'+ fen +':'+ miao
// }
// console.log(riqi());
// console.log(sjian());

// 倒计时
// 将来的时间减去现在的时间  用时间戳做
// function djs(jianglai) {
//     var date = new Date();
//     var haomiao1 = +new Date(jianglai);
//     var haomiao2 = +new Date();
//     var shengyumiao = (haomiao1 - haomiao2) / 1000;
//     var tian = Math.floor(shengyumiao / 60 / 60 / 24);
//     var shi =  Math.floor(shengyumiao / 60 / 60 % 24);
//     var fen =  Math.floor(shengyumiao / 60 % 60);
//     var miao =  Math.floor(shengyumiao % 60);
//     return ((tian < 10) ? '0' + tian : tian) + '天' + ((shi < 10) ? '0' + shi : shi) + '时' + ((fen < 10) ? '0' + fen : fen) + '分' + ((miao < 10) ? '0' + miao : miao)+'秒';
// }
// console.log(djs('2022-4-23 00:00:00'));
// function djs(sj) {
//     var hmiao1=+new Date(sj);
//     var hmiao2=+new Date()
//     var miao3=(hmiao1-hmiao2)/1000;
//     var d=Math.floor(miao3/60/60/24);
//     var s=Math.floor(miao3/60/60%24);
//     var f=Math.floor(miao3/60%60);
//     var m=Math.floor(miao3%60);
//     return ((d<10)?'0'+d:d)+'天'+((s<10)?'0'+s:s)+'时'+((f<10)?'0'+f:f)+'分'+((m<10)?'0'+m:m+'秒');
// }
// console.log(djs(prompt('时间')));