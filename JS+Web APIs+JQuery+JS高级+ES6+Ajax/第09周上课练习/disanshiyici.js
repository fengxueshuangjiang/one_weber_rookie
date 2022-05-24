$('.fasong').on('click', function () {
    let aa = $('.shuru').val().trim();
    if (aa.length <= 0) {
        console.log('0000');
    } else {
        let bb = '<li class="right"><span>' + aa + '</span><img src="wo.jpg"></li>';
        $('.dh').append(bb);
    }
    $('.shuru').val('')
    huoqu(aa);
    // yinpin(aa);
})
function huoqu(aa) {
    $.ajax({
        type:'get',
        url:'https://api.ownthink.com/bot',
        data:{
            spoken:aa,
        },
        success:function(value) {
            // console.log(value);
            if(value.message==='success') {
                var cc=value.data.info.text;
                // console.log(cc);
                let dd='<li class="left"><img src="tong.jpg"><span>'+cc+'</span></li>';
                $('.dh').append(dd);
            }
        }
    })
}
// function yinpin(aa) {
//     $.ajax({
//         type:'get',
//         url:'http://www.liulongbin.top:3006/api/synthesize',
//         data:{
//             spoken:aa,
//         },
//         success:function(value) {
//             if(value.status===200){
//                 $('.aud01').attr('src',value.voiceUrl);
//             }else{
//                 console.log('0000');
//             }
//         }
//     })
// }
$('.shuru').on('keyup',(e)=>{
    if(e.keyCode===13){
        $('.fasong').click();
    }
})