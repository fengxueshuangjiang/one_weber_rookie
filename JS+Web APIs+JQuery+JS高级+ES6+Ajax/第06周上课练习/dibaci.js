// var shuju = [{
//         names: '李宇',
//         kemus: 'javascript',
//         chengji: '100',
//     },
//     {
//         names: '张绣锦',
//         kemus: 'javascript',
//         chengji: '100',
//     },
//     {
//         names: '于思彤',
//         kemus: 'javascript',
//         chengji: '100',
//     },
//     {
//         names: '徐若童',
//         kemus: 'javascript',
//         chengji: '100',
//     }
// ];
// var tbd = document.querySelector('tbody');
// for (let i = 0; i < shuju.length; i++) {
//     var tr01 = document.createElement('tr');
//     tbd.appendChild(tr01);
//     for (var key in shuju[i]) {
//         var td01 = document.createElement('td');
//         td01.innerHTML = shuju[i][key];
//         tr01.appendChild(td01);
//     }
//     var sc = document.createElement('td');
//     sc.innerHTML = "<a href='JavaScript:;'>删除</a>"
//     tr01.appendChild(sc);
// }
// var sc01 = document.querySelectorAll('a');
// for (let i = 0; i < sc01.length; i++) {
//     sc01[i].onclick = function () {
//         console.log('成功删除');
//         tbd.removeChild(sc01[i].parentNode.parentNode);
//     }
// }

// var but=document.querySelector('button');
// but.onclick=function () {
//     document.write('<p>123</p>');
// }

// var but = document.querySelector('button');
// var div = document.querySelector('div');
// var aaa=[];
// but.onclick = function () {
//     // for (var i=0;i<1000;i++) {
//     //     div.innerHTML+='<a>11</a>';
//     // }
//     // for (var i=0;i<1000;i++) {
//     //     aaa.push('<a>11</a>');
//     // }
//     // div.innerHTML=aaa.join('');
//     for (var i=0;i<1000;i++) {
//         var abc=document.createElement('a');
//         div.appendChild(abc);
//     }
// }