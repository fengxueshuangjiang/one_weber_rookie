// var arr1=new Array(2);
// console.log(arr1);
// var arr1=new Array(2,3);
// console.log(arr1);
// function fanzhuan(arr1) {
//     var arr2=[];
//     if (arr1 instanceof Array) {
//         for(var i=arr1.length-1;i>=0;i--) {
//             arr2[arr2.length]=arr1[i];
//         }
//     }else {
//         alert('请输入一个数组');
//     }
//     return arr2;
// }
// var arr2=fanzhuan([1,22,5,5,4,894,15]);
// console.log(arr2);
// var arr2=fanzhuan(1,22,5,5,4,894,15);
// console.log(arr2);

// console.log(Array.isArray([1,2,5,5,45,4,7]));
// console.log(Array.isArray(1,2,5,5,45,4,7));

// var arr1=[1,2,3,4];
// arr1.push(1,2,3);
// console.log(arr1.push(4,4,4));
// console.log(arr1);
// arr1.unshift('宇');
// console.log(arr1.unshift('舞'));
// console.log(arr1);
// arr1.pop();
// console.log(arr1.pop())
// console.log(arr1);
// arr1.shift();
// console.log(arr1.shift());
// console.log(arr1);

// function shaixuan(arr1) {
//     var arr2=[];
//     for (var i=0;i<arr1.length;i++) {
//         if (arr1[i]<2000) {
//             // arr2[arr2.length]=arr1[i];
//             arr2.push(arr1[i]);
//         }
//     }
//     return arr2;
// }
// var arr2=shaixuan([1020,22005,2251,156,56,5,56,4,654,156,156,156]);
// console.log(arr2);

// var arr1=['我','爱','彤','彤'];
// arr1.reverse();
// console.log(arr1);

// var arr1=[1,2,5,4,4,5,5,54,54564,56];
// arr1.sort(function(a,b) {
//     // return a-b;
//     return b-a;
// })
// console.log(arr1);

// var arr1=['bi',121,78,454,11,'ppp'];
// console.log(arr1.indexOf('ppp'));
// console.log(arr1.indexOf('pppp'));

// 数组去重
// var arr2=qc(['a','n','d','d','s','a','p','i','i']);
// console.log(arr2);
// function qc(arr1) {
//     var arr2=[];
//     for (var i=0;i<arr1.length;i++) {
//         if (arr2.indexOf(arr1[i])==-1) {
//             arr2.push(arr1[i]);
//         }
//     }
//     return arr2;
// }

// var arr1=[454,10,'aoao','tong',456,'ppp',8,123];
// // var a1=arr1.toString();
// var a1=arr1.join('&');
// console.log(a1);

// var arr1=[000,1,2,3,4,5,6,'p'];
// var arr2=['spsp',11,2,4,5,5];
// var arr3=arr1.concat(arr2);
// console.log(arr3);

// var arr1=[000,1,2,3,4,5,6,'p',3,4,5,6,'p'];
// var arr2=arr1.splice(2,4);
// console.log(arr2);

// var str1 = 'asdfghjklasdfaadsdas';
// var a = str1.indexOf('s'),
//     b = 0;
// while (a != -1) {
//     console.log('在索引为'+a+'时出现过一次');
//     a=str1.indexOf('s', a + 1);
//     b++;
// }
// console.log('出现过'+b+'次');

// var arr1 = ['123', '55', '3365', '65656', '785', '15165', '55', '11561565', '55', '132', '55'];
// var a = arr1.indexOf('55'),
//     b = 0;
// while(a!=-1) {
//     console.log('在索引为'+a+'时出现过一次');
//     a=arr1.indexOf('55',a+1);
//     b++;
// }
// console.log('出现过'+b+'次');

// var str ='asdsafgdsfsda';
// for (var i=0;i<str.length;i++) {
//     console.log(str.charAt(i));
// }
// var a=str.charAt(6);
// console.log(a);
// console.log(str.charCodeAt(0));
// console.log(str[0]);

// var aaa= {
//     nuha:18,
// }
// if (aaa.nuha) {
//     console.log('你妈炸了');
// }
// else {
//     console.log('你妈没炸');
// }

// var str1 = 'asdferdfhdsyauasjaoiakaqaqaszdsaa';
// var jishu = {};
// for (var i = 0; i < str1.length; i++) {
//     var chars = str1.charAt(i);
//     if (jishu[chars]) {
//         jishu[chars] ++;
//     } else {
//         jishu[chars] = 1;
//     }
// }
// var ch='';
// var max=0;
// for (var key in jishu) {
//     if (max<jishu[key]) {
//         max=jishu[key];
//         ch=key;
//     };
// }
// console.log('最多的字符时：'+ch);
// console.log('出现了'+max+'次');

// var str1='123456879';
// var str2='456789789';
// var str3=str1.concat(str2);
// console.log(str3);

// var str='君携秋水揽星河';
// console.log(str.substring(4,7));

// var str ='君携秋水揽星河';
// var str1=str.replace('星河','入梦');
// console.log(str1);

// var str ='agsghshahahajjsjadjsadljsaldjsoiajdoisoa';
// while(str.indexOf('a')!=-1) {
//     var str=str.replace('a','6');
// }
// console.log(str);

// var str ='asdsfadghfjhgjkkfuygfvjkuysxxscdfceds114456366356363aaaaa';
// console.log(str.length);
// console.log(str.indexOf('d'));
// console.log(str.charAt(12));
// console.log(str.substring(4,11));
// console.log(str.replace('a','44444444444'));

// var str ='asdsfadghfjhgjkkfuygfvjkuysxxscdfceds114456366356363aaaaa';
// var arr={};
// var max=0;
// var ch='';
// for (var i=0;i<str.length;i++) {
//     var aa=str.charAt(i);
//     if (arr[aa]) {
//         arr[aa]++;
//     }else {
//         arr[aa]=1;
//     }
// }
// // console.log(arr);
// for (var key in arr) {
//     if (max<arr[key]) {
//         max=arr[key];
//         ch=key;
//     }
// }
// console.log('出现最多的字符是'+ch);
// console.log('出现了'+max+'次');