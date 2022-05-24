// console.log(3 >= 5);
// console.log(3 === '3');
// console.log(18 == '18');
// console.log(3 < 5 && 49 > 12);
// var a = 18;
// console.log(3 > 5 && a++ > 12);
// console.log('A=' + a);
// var b = 18;
// console.log(3 < 5 && b++ > 12);
// console.log('A=' + b);
// var c = 18;
// console.log(3 < 5 || c++ > 12);
// console.log('C=' + c);
// console.log(!true);
// console.log(123 && 456);
// console.log(0 && 456);
// console.log(0 || 123);
// var num = 2,
//     a = 30;
// for (let inn = 0; inn < 5; inn++) {
//     num += 5;
//     a -= 3;
//     console.log(num);
//     console.log(a);
// }
// console.log(4 >= 6 || '人' != '李宇' && !(12 * 2 == 144) && true);
// var qqq = 10;
// console.log(5 == qqq / 2 && (2 + 2 * qqq).toString() === '22');
// 顺序结构分支结构循环结构

// if (3 > 5) {
//     alert('彤彤给我锁牛子')
// }
// if (3 < 5) {
//     alert('童童给我锁牛子')
// }

// var age = parseFloat(prompt('输入你的年龄'));
// if (age >= 18) {
//     alert('你可以去网吧');
// } else {
//     alert('你太小啦');
// }

// var year = parseFloat(prompt('请输入年份'));
// if (year % 400 == 0) {
//     alert('是闰年');
// }
// if (year % 4 == 0 && year % 100 == 0) {
//     alert('是闰年');
// } else {
//     alert('是平年');
// }

// var name1 = prompt('请输入名字');
// if (name1 == '李宇') {
//     alert('中奖100万');
// } else {
//     alert('没中奖');
// }

// var fenshu = parseFloat(prompt('请输入你得分数'));
// if (fenshu >= 90) {
//     alert('优秀！！');
// } else if (fenshu >= 80) {
//     alert('优良！！');
// } else if (fenshu >= 70) {
//     alert('中等!');
// } else if (fenshu >= 60) {
//     alert('及格');
// } else {
//     alert('不合格');
// }

// var age = parseFloat(prompt('请输入你的成绩'));
// (age >= 60) ? alert('玩去吧'): alert('滚去写作业');

// var num = parseFloat(prompt('输入一个数字'));
// var qqq = num <= 9 ? '0' + num : num;
// alert(qqq);

// var aaa = parseFloat(prompt('输入一个你喜欢的1-10的数字'));
// switch (aaa) {
//     case 1:
//         console.log('我爱吃屎');
//         break;
//     case 2:
//         console.log('我爱喝尿');
//         break;
//     case 3:
//         console.log('我爱曹部');
//         break;
//     case 4:
//         console.log('我爱燕子');
//         break;
//     case 5:
//         console.log('没了你我怎么活啊燕砸');
//         break;
//     default:
//         console.log('无');
//         break;
// }

// var shuiguo = prompt('输入一个你喜欢吃的水果');
// switch (shuiguo) {
//     case '草莓':
//         alert('草莓20一盒');
//         break;
//     case '香蕉':
//         alert('香蕉6元/斤');
//         break;
//     case '苹果':
//         alert('苹果6元/斤');
//         break;
//     case '桃子':
//         alert('桃子6元/斤');
//         break;
//     case '葡萄':
//         alert('葡萄6元/斤');
//         break;
//     default:
//         alert('请你去别家问问吧我们家没有');
//         break;
// }

// var shuiguo = parseFloat(prompt('输入时间'));
// switch (shuiguo) {
//     case 8:
//         alert('早上好！');
//         break;
//     case 12:
//         alert('中午好！');
//         break;
//     case 18:
//         alert('晚上好！');
//         break;
//     case 22:
//         alert('深夜好！');
//         break;
//     default:
//         alert('你傻逼？？');
//         break;
// }

// var shuiguo = parseFloat(prompt('输入时间'));
// switch (shuiguo) {
//     case 1:
//         alert('星期一！');
//         break;
//     case 2:
//         alert('星期二！');
//         break;
//     case 3:
//         alert('星期三！');
//         break;
//     case 4:
//         alert('星期四！');
//         break;
//     case 5:
//         alert('星期五！');
//         break;
//     case 6:
//         alert('星期六！');
//         break;
//     case 7:
//         alert('星期日！');
//         break;
//     default:
//         alert('你傻逼？？');
//         break;
// }

// var num = parseFloat(prompt('输入一个数'));
// if (num % 2 == 0) {
//     alert('偶数');
// } else {
//     alert('奇数');
// }

// var shu1 = parseFloat(prompt('输入第一个数'));
// var shu2 = parseFloat(prompt('输入第二个数'));
// if (shu1 > shu2) {
//     alert(shu1);
// } else {
//     alert(shu2);
// }

// var banzhangdeqian = parseFloat(prompt('班长兜里的钱'));
// if (banzhangdeqian >= 20000) {
//     alert('操处女');
// } else if (banzhangdeqian >= 10000) {
//     alert('操学生妹');
// } else if (banzhangdeqian >= 5000) {
//     alert('操少妇');
// } else if (banzhangdeqian >= 2000) {
//     alert('轮奸一个');
// } else {
//     alert('回家拿钱去！');
// }

// 循环
// for (var a = 0; a < 10; a++) {
//     console.log('我错了');
// }

// var j = parseFloat(prompt('输入次数'));
// for (var i = 1; i <= j; i++) {
//     console.log('我是你爹' + i);
// }

// for (var i = 1; i <= 100; i++) {
//     if (i == 1) {
//         console.log('机子没了');
//     } else if (i == 100) {
//         console.log('机子炸了');
//     } else {
//         console.log('妈炸了');
//     }
// }

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// alert(sum / 100);

// var jishusum = 0,
//     oushusum = 0,
//     beisanchusum = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         oushusum += i;
//     }
//     if (i % 2 == 1) {
//         jishusum += i;
//     }
//     if (i % 3 == 0) {
//         beisanchusum += i;
//     }
// }
// console.log('奇数和' + jishusum + '偶数和' + oushusum + '被三整除和' + beisanchusum);

// var renshu = parseFloat(prompt('输入班级总人数'));
// var sum = 0;
// for (var i = 1; i <= renshu; i++) {
//     var cj = parseFloat(prompt('第' + i + '个人的成绩是'));
//     sum += cj;
//     console.log('第' + i + '个人的成绩为' + cj);
// }
// console.log('总分' + sum);
// console.log('平均分' + sum / renshu);
// var a = '';
// for (var j = 1; j <= 5; j++) {
//     for (var i = 1; i <= 5; i++) {
//         a += i + '★';
//     }
//     console.log(j + a);
//     var a = '';
// }

// var hang = parseFloat(prompt('输入行数'));
// var lie = parseFloat(prompt('输入列数'));
// var sum = '';
// for (var i = 1; i <= hang; i++) {
//     for (var j = 1; j <= lie; j++) {
//         sum += '☆'
//     }
//     sum += '\n';
// }
// console.log(sum);

// var sum = '';
// for (var i = 1; i <= 10; i++) {
//     for (var j = i; j <= 10; j++) {
//         sum += '☆';
//     }
//     sum += '\n';
// }
// console.log(sum);

// var sum = '';
// for (var i = 1; i <= 10; i++) {
//     for (var j = 10; j >= i; j--) {
//         sum += '☆';
//     }
//     sum += '\n';
// }
// console.log(sum);

// var sum = '';
// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         sum += '☆';
//     }
//     sum += '\n';
// }
// console.log(sum);

// var sum = '';
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         sum += i + '*' + j + '=' + i * j + '\t';
//     }
//     sum += '\n';
// }
// console.log(sum);

// var year = 1;
// while (year <= 100) {
//     console.log('这个人' + year + '岁了');
//     year++;
// }

// var love = prompt('我草尼玛');
// while (love != '啊对对对') {
//     console.log('你骂我？？');
//     love = prompt('我草尼玛');
// }

// var year=1;
// do {
//     console.log('这个人'+year+'岁了');
//     year++;
// } while (year<=100);

// do {
//     love = prompt('我草尼玛');
//     console.log('你骂我？？');
// } while (love != '啊对对对');

// for (var i=1;i<=10;i++) {
//     if (i==3||i==4) {
//         continue;
//     }
//     console.log('我在吃第'+i+'个逼');
// }

// var yh = prompt('请输入用户名！')
// var mm = prompt('请输入密码！')
// while (yh != 'admin' || mm != '59421') {
//     alert('用户名与密码不匹配');
//     yh = prompt('请重新输入用户名！')
//     mm = prompt('请重新输入密码！')
// }
// alert('输入正确');

// var sum=0;
// for (var i=1;i<=100;i++) {
//     if(i%10==3) {
//         console.log(i);
//         continue;
//     }
//     sum+=i;
// }
// alert(sum);

// for (var i=3;i<=100;i++) {
//     var a=true;
//     for (var j=2;j<i;j++) {
//          if (i%j==0) {
//             a=false;
//             break;
//         }
//     }
//     if (a) {
//         console.log(i);
//     }
// }

// 简易ATM机
/* var yue = 1000;
var a = parseFloat(prompt('请选择业务\n1.存钱\n2.取钱\n3.查询余额\n4.退出'));
while (a!=4) {
    
    switch (a) {
        case 1:
            var qian1 = parseFloat(prompt('金额'));
            yue += qian1;
            alert('余额：' + yue);
            break;
        case 2:
            var qian2 = parseFloat(prompt('金额'));
            yue -= qian2;
            alert('余额：' + yue);
            break;
        case 3:
            alert('余额：' + yue);
            break;
        case 4:
            break;
        default:
            break;
    }
    a = parseFloat(prompt('请选择业务\n1.存钱\n2.取钱\n3.查询余额\n4.退出'));
} */