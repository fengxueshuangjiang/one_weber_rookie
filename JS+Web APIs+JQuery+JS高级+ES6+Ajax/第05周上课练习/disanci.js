// var shuzu1=new Array();
// var shuzu2=[];
// var shuzu3=[1,2,3,4,5,6,'舞'];
// console.log(shuzu3[6]);

// var num = parseFloat(prompt('输入1-7的数字'));
// num = num - 1;
// var shuzu1 = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
// alert('今天是' + shuzu1[num]);

// var shuzu1 = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
// for (var i = 0; i < shuzu1.length; i++) {
//     console.log(shuzu1[i]);
// }

// var sg=['张飞','关羽','赵云','刘备','诸葛亮','马超','黄忠','魏延'];
// for (var i=0;i<sg.length;i++) {
//     console.log(sg[i]);
// }

// var shuzu1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2, 3, 5, 5, 4, 4, 7, 78, 8, 8, 4, 44, 44, 4, 4];
// var sum = 0;
// for (var i = 0; i < shuzu1.length; i++) {
//     sum += shuzu1[i];
// }
// console.log(sum,sum/shuzu1.length);

// var shuzu1= [1,2,5,4,7,8,9,3,456,8,859,9,564,46,4,6,1,-1];
// var max=shuzu1[0];
// var min = shuzu1[0];
// for (var i =0;i<shuzu1.length;i++) {
//     if (max<shuzu1[i]) {
//         max=shuzu1[i];
//     }
//     if (min>shuzu1[i]) {
//         min=shuzu1[i];
//     }
// }
// console.log(max,min);

// var shuzu1=['t','t','wo','ai','ni','~','~'];
// var str='';
// for (var i=0;i<shuzu1.length;i++) {
//     str+=shuzu1[i]+'|';
// }
// console.log(str);

// var shuzu1=[1,2,3,4,5,6];
// console.log(shuzu1.length);
// shuzu1.length=7;
// for (var i=0;i<shuzu1.length;i++) {
//     console.log(shuzu1[i]);
// }

// var shuzu1=[1,2,3];
// shuzu1[shuzu1.length]=4;
// shuzu1[shuzu1.length+1]=5;
// for (var i=0;i<shuzu1.length;i++) {
//      console.log(shuzu1[i]);
// }

// var shuzu1=new Array();
// for (var i =0;i<21;i++) {
//     shuzu1[shuzu1.length]=i+1;
// }
// for (var j =0;j<shuzu1.length;j++) {
//     console.log(shuzu1[j]);
// }

// var shuzu1=[1,21,45,12,89,153,86,51,4,45,,565,1,51,5,56,5.6,15,156,5,1156,1];
// var shuzu2=new Array();
// for (var i=0;i<shuzu1.length;i++) {
//     if (shuzu1[i]>=10) {
//         shuzu2[shuzu2.length]=shuzu1[i];
//     }
// }
// for (var j =0;j<shuzu2.length;j++) {
//     console.log(shuzu2[j]);
// }

// var shuzu1=[1,2,3,0,5,4,77,8,9,0,1,12,5,4124];
// var shuzu2=new Array();
// for (var i=0;i<shuzu1.length;i++) {
//     if (shuzu1[i]!=0) {
//         shuzu2[shuzu2.length]=shuzu1[i];
//     }
// }
// for (var j=0;j<shuzu2.length;j++) {
//     console.log(shuzu2[j]);
// }

// var shuzu1=['柔骨锁','神赐鸡毛','邪魔虎鲸斧','蓝银霸王枪'];
// var shuzu2=new Array();
// for (var i=shuzu1.length-1;i>=0;i--) {
//     shuzu2[shuzu2.length]=shuzu1[i];
// }
// for (var j=0;j<shuzu2.length;j++) {
//     console.log(shuzu2[j]);
// }

// 冒泡排序
// var shuzu1=[1,4,5,2,3,6,7,10];
// var zhongjian=0;
// for (var i=0;i<shuzu1.length;i++) {//管循环次数
//     for (var j=0;j<shuzu1.length-i-1;j++) {//管交换次数
//         if (shuzu1[j]>shuzu1[j+1]) {//管交换数
//             zhongjian=shuzu1[j];
//             shuzu1[j]=shuzu1[j+1];
//             shuzu1[j+1]=zhongjian;
//         }
//     }
// }
// console.log(shuzu1);

// 选择排序
// var shuzu1=[11,4,5,2,3,6,7,10];
// var zhongjian=0;
// for (var i=0;i<shuzu1.length;i++) {
//     for (var j=i+1;j<shuzu1.length;j++) {
//         if (shuzu1[i]>shuzu1[j]) {
//             zhongjian=shuzu1[i];
//             shuzu1[i]=shuzu1[j];
//             shuzu1[j]=zhongjian;
//         }
//     }
// }
// console.log(shuzu1);

// function hu() {
//     var sum=0;
//     for (var i=1;i<=100;i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }
// hu();

// function caipu(caiming) {
//     alert(caiming);
// }
// caipu(prompt('输入菜名'));

// function he(a1,a2) {
//     var sum =a1+a2;
//     alert(sum);
// }
// he(parseFloat(prompt()),parseFloat(prompt()));

// function he(a1, a2) {
//     var sum = 0;
//     for (var i=a1;i<=a2;i++) {
//         sum+=i;
//     }
//     alert(sum);
// }
// he(parseFloat(prompt()),parseFloat(prompt()));

// function caidan(a1) {
//     return a1;
// }
// console.log(caidan(prompt('菜名')));

// function maxshu(a1,a2) {
//     if (a1>a2) {
//         return a1;
//     }
//     else {
//         return a2;
//     }
// }
// console.log(maxshu(parseFloat(prompt('数')),parseFloat(prompt('数'))));

// function qushzu(arr) {
//     var arr1=arr[0];
//     for (var i=0;i<arr.length;i++) {
//         if(arr1<arr[i]) {
//             arr1=arr[i];
//         }
//     }
//     return arr1;
// }
// var re=qushzu([1,2,5,9,6,4,97,48,79])
// console.log(re);

// function he(a1,a2,a3) {
//     var sum=a1+a2+a3;
//     return sum;
// }
// alert(he(parseFloat(prompt('数')),parseFloat(prompt('数')),parseFloat(prompt('数'))));

// function sushu(a1) {
//     for (var i=2;i<a1;i++) {
//         if (a1%i==0) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
// }
// console.log(sushu(parseFloat(prompt('输入一个数'))));

// function max() {
//     var mm=arguments[0];
//     for (var i=0;i<arguments.length;i++) {
//         if (mm<arguments[i]) {
//             mm=arguments[i];
//         }
//     }
//     return mm;
// }
// console.log(max(1,2,3,4,5));
// console.log(max(1,2,38572872,4,5));
// console.log(max(1,2,3,47287287,5));

// function fanzhuan(array) {
//     var shuzu1=new Array();
//     for (var i=array.length-1;i>=0;i--) {
//         shuzu1[shuzu1.length]=array[i];
//     }
//     return shuzu1;
// }
// var a1=(fanzhuan([1,2,3,4,5]));
// console.log(a1);

// function paixu(arr) {
//     var kong=0;
//     for (var i=0;i<arr.length-1;i++) {
//         for (var j=0;j<arr.length-i-1;j++) {
//             if (arr[j]>arr[j+1]) {
//                 kong=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=kong;
//             }
//         }
//     }
//     return arr;
// }
// var sum=paixu([1,45,21,33,66,12,0]);
// console.log(sum);

function panduan() {
    var a1=parseFloat(prompt('请输入一个年份'));
    var aa='平年';
    if (isRunNian(a1)) {
        aa='闰年';  
    }
    return aa;
}
function isRunNian(year) {
    var flage = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flage = true; 
    }
    return flage;
}

var pr = panduan();
alert(pr);
