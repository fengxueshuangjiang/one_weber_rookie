// let xhr = new XMLHttpRequest();
// xhr.timeout=3000;
// xhr.ontimeout=function () {
//     console.log('请求超时！');
// }
// xhr.open('get', 'http://www.liulongbin.top:3006/api/getbooks');
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let aa=JSON.parse(xhr.response);
//         console.log(aa);
//     }
// }

// let xhr = new XMLHttpRequest();
// let sj = new FormData();
// sj.append('names', '李宇');
// xhr.open('post', 'http://www.liulongbin.top:3006/api/formdata');
// xhr.send(sj);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let bb = JSON.parse(xhr.response);
//         console.log(bb);
//     }
// }

// let xhr = new XMLHttpRequest();
// let aa = document.querySelector('form');
// aa.addEventListener('submit', e => {
//     e.preventDefault();
//     let fd = new FormData(aa);
//     xhr.open('post', 'http://www.liulongbin.top:3006/api/formdata');
//     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//     xhr.send(fd);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             let bb = JSON.parse(xhr.response);
//             console.log(bb);
//         }
//     }
// })

// let btn01 = document.querySelector('#btn01');
// btn01.addEventListener('click', () => {
//     let inp01 = document.querySelector('#inp01');
//     let wenjian = inp01.files;
//     if (wenjian.length <= 0) {
//         return alert('请选择文件!')
//     } else {
//         var fd = new FormData();
//         fd.append('avatar', wenjian[0]);
//         let xhr = new XMLHttpRequest();
//         xhr.upload.onprogress=(e)=>{
//             if(e.lengthComputable){
//                 let shu=Math.ceil((e.loaded/e.total)*100*3.3);
//                 document.querySelector('.d01').style.display='block';
//                 document.querySelector('.d02').style.width=shu+'px';
//                 document.querySelector('.sp01').innerHTML=Math.ceil(shu/3.3)+'%';
//             }
//         }
//         xhr.open('post', 'http://www.liulongbin.top:3006/api/upload/avatar');
//         xhr.send(fd);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 let qq = JSON.parse(xhr.response);
//                 console.log(qq);
//                 document.querySelector('#img01').src='http://www.liulongbin.top:3006'+qq.url;
//                 alert('上传成功！')
//             }
//         }
//     }
// })

// $('#btn01').on('click', () => {
//     let wenjian = $('#inp01')[0].files;

//     if (wenjian.length <= 0) {
//         alert('请选择文件');
//     } else {
//         var fd = new FormData();
//         fd.append('avatar', wenjian[0]);
//         $.ajax({
//             method: 'POST',
//             url: 'http://www.liulongbin.top:3006/api/upload/avatar',
//             data: fd,
//             contentType: false,
//             processData: false,
//             success: function (value) {
//                 console.log(value);
//                 $('#img01').prop('src', 'http://www.liulongbin.top:3006' + value.url);
//                 alert('上传成功');
//             }
//         })
//     }
// })

// document.querySelector('.btn1').addEventListener('click', () => {
//     let url = 'http://www.liulongbin.top:3006/api/get';
//     let shuju = {
//         xm: 'zs',
//         xb: '男',
//         nl: 19,
//     }
//     axios.get(url, {
//         params: shuju
//     }).then((value) => {
//         console.log(value);
//         console.log(value.data);
//     })
// })

// document.querySelector('.btn1').addEventListener('click',()=>{
//     let url='http://www.liulongbin.top:3006/api/post';
//     let shuju={
//         address:'北京',
//         location:'朝阳区',
//     }
//     axios.post(url,{shuju}).then((value)=>{
//         console.log(value.data);
//     })
// })

// document.querySelector('.btn1').addEventListener('click', () => {
//     axios.post('http://www.liulongbin.top:3006/api/addbook', {
//         bookname: "斗罗大陆",
//         author: '唐家三少',
//         publisher: '皮匠营出版社',
//     }).then(value => {
//         console.log(value.data);
//     })
// })
// document.querySelector('.btn1').addEventListener('click',()=>{
//     axios.get('http://www.liulongbin.top:3006/api/getbooks',{params:{}}).then(value=>{
//         console.log(value.data);
//     })
// })

document.querySelector('.btn1').addEventListener('click', () => {
    axios({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        params: {},
    }).then(value => {
        console.log(value.data);
    })
})
document.querySelector('.btn2').addEventListener('click', () => {
    axios({
        method: 'post',
        url: 'http://www.liulongbin.top:3006/api/addbook',
        data: {
            bookname: '斗鸡大陆',
            author: '唐家三少',
            publisher: '波波出版社',
        },
    }).then(value => {
        console.log(value.data);
    })
})