// let data = {
//     xm:'小舞',
//     nl:'22',
//     xb:'女',
//     wh:'兔',
//     hl:'58',
//     zm:'无',
// }
// let htmlsrt=fun01('jymb',data);
// document.querySelector('.d01').innerHTML=htmlsrt;
// function fun01(mb,sj) {
//     var mb=document.getElementById(mb).innerHTML;
//     zz=/{{\s*([a-z]+)\s*}}/;
//     aa=null;
//     while(aa=zz.exec(mb)) {
//         mb=mb.replace(aa[0],sj[aa[1]]);
//     }
//     return mb;
// }

// let xhr=new XMLHttpRequest();
// xhr.open('get','http://www.liulongbin.top:3006/api/getbooks');
// xhr.send();
// xhr.onreadystatechange=function () {
//     if(xhr.readyState===4&&xhr.status===200) {
//         console.log(xhr.response);
//     }
// }

// let xhr=new XMLHttpRequest();
// xhr.open('get','http://www.liulongbin.top:3006/api/getbooks?id>1');
// xhr.send();
// xhr.onreadystatechange=function() {
//     if(xhr.readyState===4&&xhr.status===200){
//         console.log(xhr.response);
//     }
// }

// let x=encodeURI('于思彤你是个小傻子');
// console.log(x);
// let r=decodeURI('%E4%BA%8E%E6%80%9D%E5%BD%A4%E4%BD%A0%E6%98%AF%E4%B8%AA%E5%B0%8F%E5%82%BB%E5%AD%90');
// console.log(r);

// let xhr=new XMLHttpRequest();
// xhr.open('post','http://www.liulongbin.top:3006/api/addbook');
// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// xhr.send('id=6&bookname=斗罗大陆&author=唐家三少&publisher=皮匠营出版社');
// xhr.onreadystatechange=function () {
//     if(xhr.readyState===4&&xhr.status===200) {
//         console.log(xhr.response);
//     }
// }
// let xhr1=new XMLHttpRequest();
// xhr1.open('get','http://www.liulongbin.top:3006/api/getbooks?id>10000');
// xhr1.send();
// xhr1.onreadystatechange=function() {
//     if(xhr1.readyState===4&&xhr1.status===200){
//         console.log(xhr1.response);
//     }
// }

// let json='{"xm":"李宇","xb":"男"}';
// console.log(json);
// let obj=JSON.parse(json);
// console.log(obj);

// let obj={mz:'李宇',xb:'男'};
// console.log(obj);
// let json=JSON.stringify(obj)
// console.log(json);

// let xhr=new XMLHttpRequest();
// xhr.open('get','http://www.liulongbin.top:3006/api/getbooks');
// xhr.send();
// xhr.onreadystatechange=function () {
//     if(xhr.readyState===4&&xhr.status===200) {
//         var aa=JSON.parse(xhr.response)
//         console.log(aa);
//     }
// }

liyu({
    type: 'post',
    url: 'http://www.liulongbin.top:3006/api/addbook',
    data: {
        bookname: '斗罗大陆',
        author: '唐家三少安',
        publisher: '皮匠营出版社'
    },
    success: function (x) {
        console.log(x);
    }
})
liyu({
    type:'get',
    url:'http://www.liulongbin.top:3006/api/getbooks',
    data:{},
    success:function (x) {
        console.log(x);
    }
})
// console.log(pinjie({mz:'李宇',xb:'男'}));
function pinjie(data) {
    let array = [];
    for (let key in data) {
        var srt = key + '=' + data[key];
        array.push(srt);
    }
    return array.join('&')
}

function liyu(qwer) {
    var xhr = new XMLHttpRequest();
    var lj = pinjie(qwer.data);
    if (qwer.type === 'get') {
        xhr.open(qwer.type, qwer.url + '?' + lj);
        xhr.send();
    } else if (qwer.type === 'post') {
        xhr.open(qwer.type, qwer.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(lj);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var obj = JSON.parse(xhr.response);
            qwer.success(obj)
        }
    }
}