// let btn01=$('.btn01');
// btn01.on('click',function () {
//     $.get('http://www.liulongbin.top:3006/api/getbooks',function (value){
//         console.log(value);
//     })
// })
// let btn01=$('.btn01');
// btn01.on('click',function () {
//     $.get('http://www.liulongbin.top:3006/api/getbooks',{id:1},function (value){
//         console.log(value);
//     })
// })
// let btn01=$('.btn01');
// btn01.on('click',function () {
//     $.post('http://www.liulongbin.top:3006/api/addbook',{bookname:'斗罗大陆小舞',author:'唐家三少',id:'166',publisher:'北京图出版社'},function (value){
//         console.log(value);
//     })
// })
// let btn01 = $('.btn01');
// btn01.on('click', function () {
//     $.ajax({
//         type: 'get',
//         url: 'http://www.liulongbin.top:3006/api/getbooks',
//         data: {
//             id: 1
//         },
//         success: function (value) {
//             console.log(value);
//         }
//     })
// })
// let btn02=$('.btn02');
// btn02.on('click',()=>{
//     $.ajax({
//         type:'post',
//         url:'http://www.liulongbin.top:3006/api/addbook',
//         data:{
//             bookname:'斗破苍穹',
//             author:'天蚕土豆',
//             id:'1987',
//             publisher:'北京图书出版社'
//         },
//         success:value=>{
//             console.log(value);
//         }
//     })
// })
function huoqu() {
    $.get('http://www.liulongbin.top:3006/api/getbooks', values => {
        // console.log(values);
        var sz = [];
        if (values.status !== 200) {
            alert('获取数据失败')
        } else {
            $.each(values.data, (i, value) => {
                sz.push('<tr><td>' + value.id + '</td><td>' + value.bookname + '</td><td>' + value.author + '</td><td>' + value.publisher + '</td><td><a href:"javascript:;" data-id="' + value.id + '" class="a01">删除</a></td></tr>')
            })
        }
        // console.log(sz);
        $('.tb01').empty();
        $('.tb01').append(sz.join(''))
    })
}
huoqu();
$('.tb01').on('click', '.a01', function () {
    let aa = $(this).attr('data-id');
    $.get('http://www.liulongbin.top:3006/api/delbook', {
        id: aa
    }, valuess => {
        if (valuess == 200) {
            console.log(valuess);
            huoqu();
        } else {
            console.log(valuess);
            alert('删除失败！');
        }
    })
})
$('.btn01').on('click',()=>{
    var bookname=$('.d011').val().trim();
    var author=$('.d022').val().trim();
    var publisher=$('.d033').val().trim();
    if(bookname.length>0&&author.length>0&&publisher.length>0){
        // console.log('好');
        $.post('http://www.liulongbin.top:3006/api/addbook',{bookname:bookname,author:author,publisher:publisher},valuesss=>{
            if(valuesss.status==201) {
                console.log('添加成功！');
                huoqu();
            }else{
                alert('添加失败！')
            }
        })
    }else{
        alert('添加有误')
    }
})