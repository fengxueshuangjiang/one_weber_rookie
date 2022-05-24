// $('div').hide();
// $(function() {
//     $('div').hide();
// })
// $(document).ready(function () {
//     $('div').hide();
// })
// var div=document.querySelector('div');
// console.dir(div);
// div.style.display='none';
// var aa=$('div');
// console.log(aa);
// aa.hide();
// var div=document.querySelector('div');
// var aaa=$(div);
// aaa.hide();
// var aa=$('div');
// var div=aa[0];
// var div=aa.get(0);
// console.dir(div);
// var a=$('.sp01');
// console.dir(a);
// var divs=$('div');
// console.dir(divs);
// divs.css('background','#ffc0ff')
// var a=$('ul li:first');
// var b=$('ul li:eq(2)');
// var c=$('ul li:last');
// a.css('color','#33ff66');
// b.css('color','#33ff66');
// c.css('color','#33ff66');
// var a=$('ul li,div');
// a.css('color','#ffc0ff');
// var a = $('ul').parent();
// console.log(a);
// a.css('color', '#33ff66')
// var a=$('p');
// a.parent().css('background','#ffc0ff');
// a.children().css('background','#33ff66');
// var lis=$('ul>li');
// lis.mouseover(function () { 
//     $(this).children('ol').show();
// });
// lis.mouseout(function () { 
//     $(this).children('ol').hide();
// });

// var lis=$('.li01').siblings('li');
// lis.css('color','#33ff66')
// var lis=$('.li01').nextAll();
// lis.css('color','#33ff66')
// var lis=$('.li01').prevAll();
// lis.css('color','#33ff66');
// var ul=$('ul li');
// ul.eq(2).css('color','#66ff99');
// var btn=$('button');
// console.log(btn);
// btn.click(function () {
//     console.log(111);
//     $(this).css('background', '#ffc0ff');
//     $(this).siblings('button').css('background', '');
// });

// var lis=$('ul li');
// var d03=$('.d03');
// lis.mouseenter(function () { 
//     // $(this).css('background','#ff3366');
//     // $(this).css('color','#fff');
//     $(this).css({'color':'#fff','background':'#ff3366'}).siblings('li').css({'background':'#ffc0ff','color':'#000'});
//     var a=$(this).index();
//     // console.log(a);
//     d03.css('top',-a*600)
//     // $(this).siblings('li').css('background','#ffc0ff');
//     // $(this).siblings('li').css('color','#000');
// });

// var aa=$('div');
// var ls=0;
// $('button').click(function () { 
//     // if (ls==0) {
//     //     aa.addClass('d01'); 
//     //     ls=1;
//     // }else {
//     //     aa.removeClass('d01'); 
//     //     ls=0;
//     // }
//     aa.toggleClass('d02');
// });

// $('.d02 ul li').click(function () {
//     // $(this).css({
//     //     'color':'#fff',
//     //     'background-color':'#ff99ff'
//     // })
//     // $(this).siblings('li').css({
//     //     'color':'#000',
//     //     'background-color':''
//     // })
//     $(this).addClass('dd01').siblings('li').removeClass('dd01');
//     var a=$(this).index();
//     $('.d03 ul li').siblings().css('display','none');
//     $('.d03 ul li').eq(a).css('display','block');
// });

// $('button').eq(1).click(function () {
//     $('div').hide('1000', function () {
//         console.log(123);
//     });
// });
// $('button').eq(0).click(function () {
//     $('div').show('1000', function () {
//         console.log(123);
//     })
// });
// $('button').eq(2).click(function () {
//     $('div').toggle()
// });

// $('button').eq(0).click(function () {
//     $('div').slideDown('1000', function () {
//         console.log(21132);
//     })
// })
// $('button').eq(1).click(function () {
//     $('div').slideUp('1000', function () {
//         console.log(21132);
//     })
// })
// $('button').eq(2).click(function () {
//     $('div').stop().
//     slideToggle('1000', function () {
//         console.log(21132);
//     })
// })
// $('div').hover(function () {
//     $('div').slideUp('1000', function () {
//         console.log(21132);
//     })
// }, function () {
//     $('div').slideDown('1000', function () {
//         console.log(21132);
//     })
// });
// $('button').eq(0).click(function () {
//     $('div').fadeIn('1000')
// })
// $('button').eq(1).click(function () {
//     $('div').fadeOut('1000')
// })
// $('button').eq(2).click(function () {
//     $('div').stop().fadeToggle('1000')
// })
// $('button').eq(3).click(function () {
//     $('div').stop().fadeTo('1000',0.5)
// })

// $('li').hover(function () {
//         $(this).siblings('li').stop().fadeTo(500,0.5)
//     }, function () {
//         $(this).siblings('li').stop().fadeTo(500,1)
//     }
// );
// $('button').click(function () {
//     $('.d01').animate({
//         left: 500,
//         opacity:0
//     },1000);
// })

// $('li').mouseenter(function () {
//     $(this).stop().animate({
//         width: 200,
//     }, 500).find('.small').stop().fadeOut(500).siblings('.big').stop().fadeIn(500);
//     $(this).siblings('li').stop().animate({
//         width: 50,
//     }, 500).find('.small').stop().fadeIn(500).siblings('.big').stop().fadeOut(500);
// });