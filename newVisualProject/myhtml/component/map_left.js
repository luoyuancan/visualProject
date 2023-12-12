var myChart = echarts.init(document.getElementById('main_libaiMap'));
var geoCoordMap = geoLocation;
var XAData = roadmapData; // 内容
var planePath = 'arrow';
var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

        var dataItem = data[i];

        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;

};
var color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
var series = [];
[
    ['控制', XAData]
].forEach(function (item, i) {
    series.push({
        // name: item[0] + '地点显示',
        name: '地点',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red', //arrow箭头的颜色
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: '路线',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: '地理名称',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i],
            },
            emphasis: {
                areaColor: '#2B91B7'
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

// 指定图表的配置项和数据
var option = {
    backgroundColor: '#000',
    title: {
        text: '李白轨迹可视化',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
                // 鼠标悬停显示
                return "地点：" + params.data.name + "<br />作品序：" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                // return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                return null;
            } else {
                // return params.name;
                return null;
            }
        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        // data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
        // data: [],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        roam: true, // 是否开启鼠标缩放和平移漫游
        zoom: 5,
        center: [104.74925, 31.787812],
        itemStyle: {
            normal: {
                areaColor: '#00186E',
                borderColor: '#195BB9',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: '#2B91B7'
            }
        }
    },
    series: series
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);