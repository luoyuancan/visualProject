// 该组件偶尔会出现bug（打不开）
var dom = document.getElementById('myChartstory');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var option;
setTimeout(function () {
    option = {
        title: {
            text: "诗集中出现四季的次数",
            x: 'left',
            y: 'top',
        },
        legend: {
            right: '5',
            orient: 'vertical'
        },
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                ['意象', '春', '夏', '秋', '冬'],
                ['李白诗集', 96, 6, 152, 2],
                ['唐诗', 30, 1, 15, 1],
                ['杜甫诗集', 67, 9, 70, 9]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };
    myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart.setOption(option);
});

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
window.addEventListener('resize', myChart.resize);