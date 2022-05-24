// zymedia('video');
// var inp01 = document.querySelector('input');
// var btns = document.querySelectorAll('button');
// console.log(btns);
// btns[0].addEventListener('click', function () {
//     var btnvalue = inp01.value;
//     sessionStorage.setItem('name1', btnvalue);
// })
// btns[1].addEventListener('click', function () {
//     console.log(sessionStorage.getItem('name1'));
// })
// btns[2].addEventListener('click', function () {
//     sessionStorage.removeItem('name1');
// })
// btns[3].addEventListener('click', function () {
//     sessionStorage.clear();
// })
// btns[0].addEventListener('click', function () {
//     var btnvalue = inp01.value;
//     localStorage.setItem('name1', btnvalue);
// })
// btns[1].addEventListener('click', function () {
//     console.log(localStorage.getItem('name1'));
// })
// btns[2].addEventListener('click', function () {
//     localStorage.removeItem('name1');
// })
// btns[3].addEventListener('click', function () {
//     localStorage.clear();
// })
var inp01 = document.querySelector('.in01');
var btns = document.querySelector('#dsb');
if (localStorage.getItem('mz')) {
    inp01.value = localStorage.getItem('mz');
    btns.checked=true;
}
btns.addEventListener('change', function () {
    if (btns.checked) {
        localStorage.setItem('mz', inp01.value);
    } else {
        localStorage.removeItem('mz');
    }
})