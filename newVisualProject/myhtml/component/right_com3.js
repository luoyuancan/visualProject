var myChartcity = echarts.init(document.getElementById('myChartcity'));
var option = {

    tooltip: {
        trigger: 'axis' // 当鼠标悬浮在坐标轴上时触发
    },

    legend: {
        type: 'plain',//----图例类型，默认为'plain'，当图例很多时可使用'scroll'
        top: '1%',//----图例相对容器位置,top\bottom\left\right
        textStyle: {					//----图例内容样式
            color: 'black',				//---所有图例的字体颜色
            //backgroundColor:'black',	//---所有图例的字体背景色
        },
        fontSize: 6,
        data: [//----图例内容					
            {
                name: '李白诗集',
                iconSize: [30, 10],
                icon: 'roundRect',//----图例的外框样式'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                textStyle: {
                    color: 'blue',		//----单独设置某一个图例的颜色
                    //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
            },
            {
                name: '唐诗',
                icon: 'roundRect',//----图例的外框样式'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                textStyle: {
                    color: 'green',		//----单独设置某一个图例的颜色
                    //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
            },
            {
                name: '杜甫诗集',
                icon: 'roundRect',//----图例的外框样式'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                textStyle: {
                    color: 'orange',		//----单独设置某一个图例的颜色
                    //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
            }
        ]
    },

    xAxis: {
        type: 'category',
        name: '城市',
        data: ['金陵', '长安', '洛阳', '汉阳']
    },
    yAxis: {
        name: '数量',
        type: 'value',
        min: 0,
        max: 70,
        inteval: 10
    },
    series: [
        {
            name: '李白诗集',
            type: "bar",
            data: [
                {
                    value: 64,
                    itemStyle: {
                        color: 'blue'
                    }
                },
                {
                    value: 36,
                    itemStyle: {
                        color: 'blue'
                    }
                }
                ,
                {
                    value: 26,
                    itemStyle: {
                        color: 'blue'
                    }

                },
                {
                    value: 15,
                    itemStyle: {
                        color: 'blue'
                    }

                },
            ]
        },

        {
            name: '唐诗',

            type: "bar",
            data: [
                {
                    value: 5,
                    itemStyle: {
                        color: 'green'
                    }
                },
                {
                    value: 7,
                    itemStyle: {
                        color: 'green'
                    }

                },
                {
                    value: 4,
                    itemStyle: {
                        color: 'green'
                    }

                },
                {
                    value: 0,
                    itemStyle: {
                        color: 'green'
                    }

                }
            ],
        },
        {
            name: '杜甫诗集',

            type: "bar",
            data: [
                {
                    value: 0,
                    itemStyle: {
                        color: 'orange'
                    }
                },
                {
                    value: 21,
                    itemStyle: {
                        color: 'orange'
                    }
                },
                {
                    value: 5,
                    itemStyle: {
                        color: 'orange'
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        color: 'orange'
                    }
                }
            ],
        }
    ]
};
myChartcity.setOption(option);