// $('.bd').submit(function() {
//     alert(123);
// })
// $('.bd').on('submit',()=>{
//     alert(456)
// })
// var form01=document.querySelector('.bd');
// form01.addEventListener('submit',()=>{
//     alert(789);
// })

// $('.bd').on('submit',e=>{
//     e.preventDefault();
//     // alert(123);
//    let data=$('.bd').serialize();
//    console.log(data);
// })

// function getxx() {
//     var sz = [];
//     $.ajax({
//         type: 'get',
//         url: 'http://www.liulongbin.top:3006/api/cmtlist',
//         data: {},
//         success: value => {
//             // console.log(value);
//             $.each(value.data, function (i, item) {
//                 sz.push('<li class="list-group-item"><span class="badge sp02">发表时间：' + item.time + '<i></i></span><span class="badge sp01">发表人：' + item.username + '<i></i></span><i>' + item.content + '</i></li>')
//             })
//             $('.d003').append(sz)
//         }
//     })
// }

// function postxx() {
//     $.post('http://www.liulongbin.top:3006/api/addcmt', data, value => {
//         // console.log(value);
//         if (value.status === 201) {
//             getxx();
//             // alert('成功');
//             document.querySelector('.f001').reset();
//         } else {
//             alert('发表失败')
//         }
//     })
// }
// getxx();
// let data;
// $('.f001').on('submit', e => {
//     e.preventDefault();
//     data = $('.f001').serialize();
//     // console.log(data);
//     postxx();
// })

// var data={
//     mz:'黄飞鸿',
//     nl:88,
//     hy:'是',
//     sj:new Date(),
//     ah:['吃饭','睡觉','打豆豆']
// }
// $('.mz').text(data.mz);
// $('.nl').text(data.nl);
// $('.vip').text(data.hy);
// $('.sj').text(data.sj);
// var sz=[];
// for(let i=0;i<data.ah.length;i++){
//     sz.push('<li>'+data.ah[i]+'</li>')
// }
// $('.ah').html(sz);

// var data={
//     mz:'黄飞鸿',
//     nl:88,
//     hy:'是',
//     sj:new Date(),
//     ah:['吃饭','睡觉','打豆豆'],
//     aaa:'<p>woaini</p>',
//     a:8,
//     arr01:[123,456,789,1234,5678,9000],
// }
// template.defaults.imports.gshsj=function(sj) {
//     let nian=sj.getFullYear();
//     let shi=sj.getHours();
//     let yue=sj.getMonth()+1;
//     let ri=sj.getDate();
//     let fen=sj.getMinutes();
//     let miao=sj.getSeconds();
//     return nian+'年'+yue+'月'+ri+'日'+shi+'时'+fen+'分'+miao+'秒';
// }
// var a=template('scr01',data);
// console.log(a);
// $('.a01').html(a);

$.get('http://www.liulongbin.top:3006/api/news', data => {
    if (data.status == 200) {
        // let data = value.data;
        for (let i = 0; i < data.data.length; i++) {
            data.data[i].tags = data.data[i].tags.split(',');
        }
        console.log(data);
        var a = template('scr02', data);
        // console.log(a);
        $('.dd01').html(a);
    } else {
        alert('获取出错');
    }
})
template.defaults.imports.fun1 = function (sjsj) {
    let sj = new Date(sjsj);
    let nian = sj.getFullYear();
    let shi = sj.getHours();
    let yue = sj.getMonth() + 1;
    let ri = sj.getDate();
    let fen = sj.getMinutes();
    let miao = sj.getSeconds();
    console.log(nian + '-' + ((yue<10)?'0'+yue:yue) + '-' + ((ri<10)?'0'+ri:ri) + ' ' + ((shi<10)?'0'+shi:shi) + ':' + ((fen<10)?'0'+fen:fen) + ':' + ((miao<10)?'0'+miao:miao));
    return nian + '-' + ((yue<10)?'0'+yue:yue) + '-' + ((ri<10)?'0'+ri:ri) + ' ' + ((shi<10)?'0'+shi:shi) + ':' + ((fen<10)?'0'+fen:fen) + ':' + ((miao<10)?'0'+miao:miao);
}

// str='我的名字{{name}}，你的屁股{{name}}';
// let zz=/{{(name)}}/gs;
// let aa=zz.exec(str);
// console.log(aa);
// str=str.replace(aa[0],aa[1]);
// console.log(str);
// str=str.replace(aa[0],aa[1]);
// console.log(str);
// var aa=null;
var dataaa={names:'李宇',
age:22,
}
str='我的名字{{names}}，我的年龄{{age}}';
let zz=/{{([a-z]+)}}/;
while(aa=zz.exec(str)) {
    str=str.replace(aa[0],dataaa[aa[1]]);
}
console.log(str);