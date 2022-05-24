// $.ajax({
//     method:'get',
//     url:'http://ajax.frontend.itheima.net:3006/api/jsonp',
//     data:{},
//     success:value=>{
//         console.log(value);
//     }
// })

// function shuju(data) {
//     console.log(data);
// }
// $.ajax({
//     url:'http://yst.3vkj.net/disanshiliuci02.js?callback=shuju',
//     dataType:'jsonp',
//     jsonp:'cb',
//     jsonpCallback:'shuju',
//     success:value=>{
//         console.log(value);
//     }
// })

let cacheObj={};
let time = null;
$('#inp01').on('keyup', () => {
    clearTimeout(time);
    var keywords = $('#inp01').val().trim();
    if (cacheObj[keywords]) {
        xr(cacheObj[keywords]);
    } else {
        if (keywords.length <= 0) {
            console.log('空');
            return $('#d011').empty().hide();
        } else {
            fd(keywords);
        }
    }

})
function fd(kw) {
    time = setTimeout(function () {
        ff(kw);
    }, 1000)
}
function ff(kw) {
    $.ajax({
        // method:'get',
        url: 'https://suggest.taobao.com/sug?q=' + kw,
        dataType: 'jsonp',
        success: function (value) {
            console.log('请求');
            xr(value);
        }
    })
}
function xr(aa) {
    if (aa.result.length <= 0) {
        return $('#d011').empty().hide();
    } else {
        let bb = template('scr01', aa)
        $('#d011').html(bb).show();
        // 放到缓存中
        let key = $('#inp01').val().trim();
        cacheObj[key]=aa;
    }
}