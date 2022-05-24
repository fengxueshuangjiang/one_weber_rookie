// xuanran();

// function huoqu() {
//     var a = localStorage.getItem('shuzu');
//     if (a !== null) {
//         return a = JSON.parse(a);
//     } else {
//         return [];
//     }

// }

// function cunchu(b) {
//     localStorage.setItem('shuzu', JSON.stringify(b));
// }

// function xuanran() {
//     wanc = 0;
//     daib = 0;
//     $('ol').empty();
//     var d = huoqu();
//     $.each(d, function (i, n) {
//         // console.log(i);
//         // console.log(n);

//         if (n.done) {
//             wanc++;
//             $('.ol02').prepend('<li indexs=' + i + '><span></span><input type="checkbox" checked="checked" name="" id="">' + n.title + '<a href="javastript:;">删除</a></li>')
//         } else {
//             daib++;
//             $('.ol01').prepend('<li indexs=' + i + '><span></span><input type="checkbox" name="" id="">' + n.title + '<a href="javastript:;">删除</a></li>')
//         }

//     })
//     $('.sp01').text(daib);
//     $('.sp02').text(wanc);
// }
// var wanc = 0;
// var daib = 0;
// $('.inp01').on('keydown', function (e) {
//     if (e.keyCode === 13) {
//         var b = huoqu();
//         if ($('.inp01').val() !== '') {
//             var c = $(this).val();
//             b.push({
//                 title: c,
//                 done: false
//             });
//             cunchu(b);
//             $('ol').empty();
//             xuanran();
//             $('.inp01').val('');
//         }
//     }
// })
// $('.btn01').on('click', function () {
//     var b = huoqu();
//     if ($('.inp01').val() !== '') {
//         var c = $('.inp01').val();
//         b.push({
//             title: c,
//             done: false
//         });
//         cunchu(b);
//         xuanran();
//         $('.inp01').val('');
//     }
// })
// $('ol').on('click', 'a', function () {
//     var e = huoqu();
//     var f = $(this).parent('li').attr('indexs');
//     e.splice(f, 1);
//     cunchu(e);
//     xuanran();
// })
// $('ol').on('change', 'input', function () {
//     var g = huoqu();
//     var h = $(this).parent('li').attr('indexs');
//     g[h].done = $(this).prop('checked');
//     cunchu(g);
//     xuanran();
// })

$(document).on('keydown',function (e) {
    if(e.keyCode===82) {
        $('.d01').css('backgroundColor','#33ff66');
        $('.d01').text(' keycode为：'+e.keyCode);
    }else if (e.keyCode===71) {
        $('.d01').css('backgroundColor','#333')
        $('.d01').text(' keycode为：'+e.keyCode);
    }else if (e.keyCode===66) {
        $('.d01').css('backgroundColor','#77ff44')
        $('.d01').text(' keycode为：'+e.keyCode);
    }else if (e.keyCode===80) {
        $('.d01').css('backgroundColor','#9966ff')
        $('.d01').text(' keycode为：'+e.keyCode);
    }
})