// $('div').click(function () {
//     console.log(123);
// })
// $('.d01').click(function() {
//     $(this).css({
//         'color':'#ff99ff',
//     })
// })
// $('.d01').mouseenter(function() {
//     $(this).css({
//         'color':'#33ff66',
//     })
// })
// $('.d01').on({
//     mouseenter: function () {
//         $(this).css({
//             'color': '#33ff66',
//         })
//     },
//     click: function () {
//         $(this).css({
//             'color': '#ff99ff',
//         })
//     }
// })
// $('.d01').on('mouseleave mouseenter',function() {
//     $(this).toggleClass('d02');
// });
// $('ul').on('click','li',function() {
//     $(this).css({'color':'#ff99ff'});
//     alert(123);
//     console.log(this);
// });
// $('ol').on('click','li',function() {
//     $(this).css({
//         'color':'#33ff99',
//     })
// })
// var li=$('<li>我是后来创建的</li>');
// $('ol').append(li);
// $('button').on('click', function () {
//     if ($('textarea').val() == '') {
//         alert('请输入内容');
//     } else {
//         var li = $('<li></li>');
//         li.html($('textarea').val() + "<a href='javascript:;'>删除</a>");
//         $('ul').prepend(li);
//         li.slideDown(500);
//         $('textarea').val('');
//     }
// })
// $('ul').on('click','a',function() {
//     $(this).parent('li').slideUp(500,function() {
//         $(this).remove();
//     });
    
// })
// $('div').on('click mouseenter',function() {
//     $(this).css('color','#33ff66');
// })
// $('div').off('mouseenter');
// $('div').one('click',function() {
//     console.log(123);
// })
// $('div').on('click',function () {
//     alert('逼好痛');
// })
// // $('div').click();
// $('div').trigger('click')
// $(document).on('click',function(e) {
//     // console.log(e);
//     console.log('点击了document');
// })
// $('div').on('click',function(e) {
//     // console.log(e);
//     console.log('点击了div');
//     e.stopPropagation();
// })

// var oi={};
// var si={
//     a1:123,
//     a2:456,
//     solid:{
//         a3:798,
//     }
// }
// var qi={
//     a1:111,
// }
// // $.extend(oi,si,qi);
// // oi.solid.a3='188';
// // console.log(si);
// // console.log(oi);
// $.extend(true,oi,si,qi);
// oi.solid.a3=188;
// console.log(si);
// console.log(oi);
// document.querySelector('#sortable').sortablejs()
// lazyLoadInit({
//     coverColor:"white",
//     coverDiv:"<h1>test</h1>",
//     offsetBottom:0,
//     offsetTopm:0,
//     showTime:800,
//     onLoadBackEnd:function(i,e){
//         console.log("onLoadBackEnd:"+i);
//     }
//     ,onLoadBackStart:function(i,e){
//         console.log("onLoadBackStart:"+i);
//     }
// });
var runPage;
runPage = new FullPage({
	id: 'pageContain',
	slideTime: 800,
	effect: {
		transform: {
			translate: 'Y',
			scale: [1, 1],
			rotate: [0, 0]
		},
		opacity: [0, 1]
	},
	mode: 'wheel,touch,nav:navBar',
	easing: 'ease'
});