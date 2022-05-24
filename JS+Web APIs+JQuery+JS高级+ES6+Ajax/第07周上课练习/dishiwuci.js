// console.log($(".d01").prop('class'));
// $('.d01').prop('title','我爱你情爱的姑娘')
// $('input').change(function() {
//     console.log($(this).prop('checked'));
// })
// $('span').attr('index','111')
// console.log($('span').attr('index'));
// $('div').data('num','15975385246');
// console.log($('div').data('num'));

// $('.diyi0').change(function () {
//     if ($(this).prop('checked')) {
//         $('span').prop('innerHTML', '全不选');
//         $('.wp').addClass('bsck');
//     } else {
//         $('span').prop('innerHTML', '全选');
//         $('.wp').removeClass('bsck');
//     }
//     $('.dier,.diyi0').prop('checked', $(this).prop('checked'));
// })
// $('.dier').change(function () {
//     if ($('.dier:checked').length === $('.dier').length) {
//         $('.diyi0').prop('checked', true);
//         $('span').prop('innerHTML', '全不选');
//     } else {
//         $('.diyi0').prop('checked', false);
//         $('span').prop('innerHTML', '全选');
//     }
//     if ($(this).prop('checked')) {
//         $(this).parents('.wp').addClass('bsck');;
//     } else {
//         $(this).parents('.wp').removeClass('bsck');
//     }
// })
// $('.jia').click(function () {
//     var a = $(this).siblings('.in01').val();
//     a++;
//     $(this).siblings('.in01').val(a);
//     var b = $(this).parent().siblings('.jiaq').html();
//     b = b.substring(1);
//     b = (b * a).toFixed(2);
//     $(this).parent().siblings('.he').text('￥' + b);
//     jiahe();
// })
// $('.jian').click(function () {
//     var a = $(this).siblings('.in01').val();
//     if (a > 1) {
//         a--;
//         $(this).siblings('.in01').val(a);
//         var b = $(this).parent().siblings('.jiaq').html();
//         b = b.substring(1);
//         // console.log(b);
//         b = (b * a).toFixed(2);
//         // console.log(b);
//         $(this).parent().siblings('.he').text('￥' + b);
//         jiahe();
//     }
// })
// $('.in01').change(function () {
//     var a = $(this).val();
//     // console.log(a);
//     if (a >= 1) {
//         var b = $(this).parent().siblings('.jiaq').html();
//         b = b.substring(1);
//         b = (b * a).toFixed(2);
//         $(this).parent().siblings('.he').text('￥' + b);

//     } else {
//         $(this).parent().siblings('.he').text('￥0');
//     }
//     jiahe();
// })

// function jiahe() {
//     var jiaiqan = 0;
//     var geshu = 0;
//     $('.in01').each(function (i, dom) {
//         var a = $(dom).val();
//         a = parseInt(a);
//         geshu += a;
//     })
//     $('.xuanshu').children('em').text(geshu);
//     $('.he').each(function (i, dom) {
//         var b = $(dom).text();
//         b = b.substring(1);
//         b = parseFloat(b);
//         console.log(b);
//         jiaiqan += b;
//     })
//     $('.zongjia').children('em').text(jiaiqan.toFixed(2));
// }
// $('.shan').click(function () {
//     $(this).parent('ul').remove();
//     jiahe();
// })
// $('.shan01').click(function () {
//     $('.dier:checked').parents('ul').remove();
//     jiahe();
// })
// $('.shan02').click(function () {
//     $(this).parent().siblings('.wp').remove();
//     jiahe();
// })

// console.log($('.d01').html());
// $('p').text('123')
// var shuzu=['#ffc0ff','#33ff66','#778899','#124749','#78acdf']
// var sum=0;
// $('div').each( function (i, dom) { 
//      $(dom).css('color',shuzu[i]);
//      sum+=parseInt($(dom).text());
// });
// console.log(sum);
// $.each($('div'),function (i, dom) { 
//     console.log(i);
//     console.log(dom);
// });
// $.each(shuzu,function (i, dom) { 
//     console.log(i);
//     console.log(dom);
// });
// var shu={
//     names:'李宇',
//     age:'199',
//     xb:'男'
// }
// $.each(shu,function (i, dom) { 
//     console.log(i);
//     console.log(dom);
// });

// var li1 = $('<li>后来的123</li>');
// var li2 = $('<li>后来的456</li>');
// $('ul').append(li1);
// $('ul').prepend(li2);
// var div1 = $('<div>后来的123</div>')
// var div2 = $('<div>后来的456</div>')
// div1.css({
//     'background': '#33ff66',
//     'width':'100px',
//     'height':'50px'
// })
// div2.css({
//     'background': '#3366ff',
//     'width':'100px',
//     'height':'50px'
// })
// $('.d02').after(div1);
// $('.d02').before(div2);
// // $('.d03').remove();
// // $('.d03').empty();
// $('.d03').html('');

// console.log($('.d01').width()); 
// console.log($('.d01').innerWidth()); 
// console.log($('.d01').outerWidth());
// console.log($('.d01').outerWidth(true));
// console.log($('.d03').offset());
// console.log($('.d03').offset().top);
// console.log($('.d03').offset({
//     top:200,
//     left:100
// }));
// console.log($('.d03').position());
// console.log($('.d03').position().top);
// $(window).scroll(function () {
//     console.log($(document).scrollTop());
// });
// $(window).scroll(function () {
//     if ($(document).scrollTop() >= 300) {
//         $('.d02').stop().fadeIn(1000);
//     } else {
//         $('.d02').stop().fadeOut(1000);
//     }
//     if ($(document).scrollTop() >= 600) {
//         $('span').show();
//         $('.d02').css({
//             'position': 'fixed',
//             'top':'20px'
//         });
//     } else {
//         $('span').hide();
//         $('.d02').css({
//             'position': 'absolute',
//             'top':''
//         });
//     }
// });
// $('span').click(function() {
//     // $(document).scrollTop(0);
//     $('body,html').animate({
//         scrollTop:0,
//     },1000)
// })