function fn1(obj, juli,hanshu) {
    clearInterval(obj.times);
    obj.times = setInterval(function () {
        var a = (juli - obj.offsetLeft) / 10;
        a = a > 0 ? Math.ceil(a) : Math.floor(a);
        if (obj.offsetLeft == juli) {
            clearInterval(obj.times);
        } else {
            obj.style.left = obj.offsetLeft + a + 'px';
        }
    }, 15);
};