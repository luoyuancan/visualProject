var myChartway = echarts.init(document.getElementById('myChartway'));
var option = {
    title: {
        text: '李白诗歌修辞手法权重比',
        x: 'center',
        textStyle: {
            fontSize: 15
        }
    },
    tooltip: {
        trigger: 'item',

        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    //图例相关内容的说明
    legend: {
        orient: 'vertical', //垂直
        x: 'right',
        y: 'center',
        //图例数据必须series 中data中的字段name完全一致才会显示出来,series也必须定义
        data: ['拟人', 23, '夸张', 23, '比喻', 23, '反问', 23, '用典', 23, '排比', 23],
    },

    series: [
        {
            name: '修辞手法所占比重',
            type: 'pie', //饼图
            radius: [10, 100], //修改图表大小
            //图表x轴，y轴位置
            center: ['40%', '50%'],
            roseType: 'area',
            itemStyle: {
                //普通样式设置 重置一些样式
                normal: {
                    //取消指示提示文字
                    label: {
                        show: false
                    },
                    //取消指示提示线
                    labelLine: {
                        show: false
                    }
                },
                //高亮样式设置
                emphasis: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    }
                },
                borderRadius: 8
            },

            data: [
                { value: 576, name: '比喻' },
                { value: 488, name: '夸张' },
                { value: 394, name: '拟人' },
                { value: 132, name: '反问' },
                { value: 127, name: '用典' },
                { value: 4, name: '排比' }
            ]
        }
    ]
}
myChartway.setOption(option)