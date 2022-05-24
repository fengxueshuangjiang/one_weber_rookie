// var echarts01 = echarts.init(document.querySelector('.d01'));
// var option = {
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     legend: {
//         data: ['销量']
//     },
//     xAxis: {
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// };
// echarts01.setOption(option);
// var echarts02 = echarts.init(document.querySelector('.d02'));
// var option1 = {
//     legend: {
//         top: 'bottom'
//     },
//     toolbox: {
//         show: true,
//         feature: {
//             mark: {
//                 show: true
//             },
//             dataView: {
//                 show: true,
//                 readOnly: false
//             },
//             restore: {
//                 show: true
//             },
//             saveAsImage: {
//                 show: true
//             }
//         }
//     },
//     series: [{
//         name: 'Nightingale Chart',
//         type: 'pie',
//         radius: [50, 250],
//         center: ['50%', '50%'],
//         roseType: 'area',
//         itemStyle: {
//             borderRadius: 8
//         },
//         data: [{
//                 value: 40,
//                 name: 'rose 1'
//             },
//             {
//                 value: 38,
//                 name: 'rose 2'
//             },
//             {
//                 value: 32,
//                 name: 'rose 3'
//             },
//             {
//                 value: 30,
//                 name: 'rose 4'
//             },
//             {
//                 value: 28,
//                 name: 'rose 5'
//             },
//             {
//                 value: 26,
//                 name: 'rose 6'
//             },
//             {
//                 value: 22,
//                 name: 'rose 7'
//             },
//             {
//                 value: 18,
//                 name: 'rose 8'
//             }
//         ]
//     }]
// };
// echarts02.setOption(option1);
var a = 0;
var b = 0;
var time;
var time2;
$('.d06').mouseenter(
    function () {
        clearInterval(time22);
        clearInterval(time11);
        console.log(123);
    })
$('.d06').mouseleave(function () {
    time11 = setInterval(function () {
        time1()
    }, 500);
    time22 = setInterval(function () {
        time2()
    }, 500)
    console.log(456);
})
$('.sp01').on('click', function () {
    $('.sp01').children('a').css('color', '#FFF')
    $('.sp02').children('a').css('color', '#000')
    $('.tab01').css('display', 'block');
    $('.tab02').css('display', 'none');
    clearInterval(time22);
    time11 = setInterval(function () {
        time1()
    }, 500);
})
$('.sp02').on('click', function () {
    $('.sp02').children('a').css('color', '#FFF')
    $('.sp01').children('a').css('color', '#000')
    $('.tab01').css('display', 'none')
    $('.tab02').css('display', 'block')
    clearInterval(time11);
    time22 = setInterval(function () {
        time2()
    }, 500);
})

function time1() {
    a++;
    if (a >= $('.tab01').children('tbody').children('tr').length - 10) {
        $('.tab01').animate({
            'top': 0 + 'px',
        }, 0, function () {
            a = 0;
        })
    } else {
        $('.tab01').animate({
            'top': -a * 10 + 'px',
        }, 500, function () {
            // console.log(123);
        })
    }
}

function time2() {
    b++;
    if (b >= $('.tab02').children('tbody').children('tr').length - 10) {
        $('.tab02').animate({
            'top': 0 + 'px',
        }, 0, function () {
            b = 0;
        })
    } else {
        $('.tab02').animate({
            'top': -b * 10 + 'px',
        }, 500, function () {
            // console.log(123);
        })
    }
}
var time11 = setInterval(function () {
    time1()
}, 500);
var time22 = setInterval(function () {
    time2()
}, 500);
var echarts02 = echarts.init(document.querySelector('.d007'));
var option1;

option1 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

echarts02.setOption(option1);
var myech02=echarts.init(document.querySelector('.d009'));
var option;

option = {
    title: {
      text: 'Proportion of Browsers',
      subtext: 'Fake Data',
      top: 10,
      left: 10
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      bottom: 10,
      data: (function () {
        var list = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + '');
        }
        return list;
      })()
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true
    },
    radar: {
      indicator: [
        { text: 'IE8-', max: 400 },
        { text: 'IE9+', max: 400 },
        { text: 'Safari', max: 400 },
        { text: 'Firefox', max: 400 },
        { text: 'Chrome', max: 400 }
      ]
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)'
            }
          },
          data: [
            {
              value: [
                (40 - i) * 10,
                (38 - i) * 4 + 60,
                i * 5 + 10,
                i * 9,
                (i * i) / 2
              ],
              name: i + 2000 + ''
            }
          ]
        });
      }
      return series;
    })()
  };
  

myech02.setOption(option);