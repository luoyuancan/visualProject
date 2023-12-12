
var myChart = echarts.init(document.getElementById('myChartfeel'));
option = {
    backgroundColor: '#fff',
    color: [
        '#23CF9C',
        '#578FFB',
        '#6E40F2',
        '#FF61E6',
        '#8B5CFF',
        '#00CA69',
    ],
    legend: {
        top: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '20%',
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            name: '意向',
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#D9D9D9',
                },
            },
            data: ['山', '花', '水', '月'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量：首',
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#666',
                fontSize: 12,
                lineHeight: 40,
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '李白诗集',
            type: 'line',
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#23CF9C30',
                            },
                            {
                                offset: 1,
                                color: '#23CF9C10',
                            },
                        ],
                        false,
                    ),
                    shadowColor: '#23CF9C10',
                    shadowBlur: 10,
                },
            },
            data: [178, 153, 111, 237],
        },
        {
            name: '杜甫诗集',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#578FFB30',
                            },
                            {
                                offset: 1,
                                color: '#578FFB10',
                            },
                        ],
                        false,
                    ),
                    shadowColor: '#578FFB10',
                    shadowBlur: 10,
                },
            },
            data: [85, 57, 85, 46],
        },

        {
            name: '唐诗',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#FF61E630',
                            },
                            {
                                offset: 1,
                                color: '#FF61E610',
                            },
                        ],
                        false,
                    ),
                    shadowColor: '#FF61E610',
                    shadowBlur: 10,
                },
            },
            data: [16, 19, 45, 26],
        },
    ],
}
myChart.setOption(option);