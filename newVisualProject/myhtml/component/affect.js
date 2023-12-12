var myChartaffect = echarts.init(document.getElementById('myChartaffect'));
        
// 生成模拟的时间和数据
var timeData = ['701', '718', '725' ,'726', '727','742','743','744','742','753','755','756'];
var categorise = [{ name: 'Category 1', itemStyle: { color: 'yellow' } }, { name: 'Category 2' }, { name: 'Category 3' },{ name: 'Category 4'},{ name: 'Category 5', itemStyle: { color: 'red' }}]
var graphDataByTime = {
    '701': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
        ],
    },
    '718': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
        ],
        links: [
            {
                source: '李克', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            },
        ],
    },
    '725': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
     '726': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
    '727': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
        ],
    },
    '742': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
    '743': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
            { name: '杨贵妃', category: 3},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杨贵妃', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '赏识';
                    }
                }
            },
        ],
    },
    '744': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
            { name: '杨贵妃', category: 4},
            { name: '高适', category: 3},
            { name: '杜甫', category: 3},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杨贵妃', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '决裂';
                    }
                }
            },
             {
                source: '高适', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杜甫', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
    '753': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
            { name: '高适', category: 3},
            { name: '杜甫', category: 3},
            { name: '纪叟', category: 2},
            { name: '阿倍仲麻吕', category: 2},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '高适', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杜甫', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            
             {
                source: '纪叟', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '阿倍仲麻吕', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
    '755': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
            { name: '高适', category: 3},
            { name: '杜甫', category: 3},
            { name: '纪叟', category: 2},
            { name: '阿倍仲麻吕', category: 2},
            { name: '汪伦', category: 2},
            
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '高适', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杜甫', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            
             {
                source: '纪叟', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '阿倍仲麻吕', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '汪伦', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
     '756': {
        nodes: [
            { name: '李白', category: 0,  x: 2000, y: 300 },
            { name: '李克', category: 1 },
            { name: '赵蕤', category: 1 },
            { name: '孟浩然', category: 2},
            { name: '元丹丘', category: 2},
            { name: '王昌龄', category: 2},
            { name: '许氏', category: 3},
            { name: '高力士', category: 4},
            { name: '贺知章', category: 3},
            { name: '高适', category: 3},
            { name: '杜甫', category: 3},
            { name: '纪叟', category: 2},
            { name: '阿倍仲麻吕', category: 2},
            { name: '汪伦', category: 2},
             { name: '李璘', category: 2},
        ],
        links: [
            {
                source: '李白', target: '李克', label: {
                    show: true,
                    formatter: function (param) {
                        return '父子';
                    }
                }
            },
            {
                source: '赵蕤', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '师徒';
                    }
                }
            }, {
                source: '孟浩然', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '元丹丘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '王昌龄', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '许氏', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '夫妻';
                    }
                }
            },
            {
                source: '高力士', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '敌对';
                    }
                }
            },
            {
                source: '贺知章', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
             {
                source: '高适', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '杜甫', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            
             {
                source: '纪叟', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '阿倍仲麻吕', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '汪伦', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
            {
                source: '李璘', target: '李白', label: {
                    show: true,
                    formatter: function (param) {
                        return '知己';
                    }
                }
            },
        ],
    },
};

// 构建时间轴数据
var timelineData = [];
for (var i = 0; i < timeData.length; i++) {
    timelineData.push({
        value: timeData[i],
        tooltip: {
            formatter: '{b}'
        },
        symbol: 'circle',
    });
}

var optionaffect = {

    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 4000, // 播放速度，单位毫秒
            data: timelineData,
        },
        tooltip: {
        },
        series: [{
            type: 'graph',
            layout: 'force',
            symbolSize: 10,
            roam: true,
            label: {
                show: true,
                position: 'top',
            },
            categories: categorise,
            force: {
                repulsion: 400,
                gravity: 0.1
            },
            emphasis: {
                focus: 'adjacency',
            },
            tooltip: {
                show: true
            },
        }],
    },
    options: [],
};
myChartaffect.on('click', function (params) {
    if (params.dataType === 'node') {
        var clickedNode = params.data;
        var zuosan=document.getElementById('zuosan');
        zuosan.innerHTML = clickedNode.name;
    }
});
// 根据时间数据生成不同时间点的图谱配置
for (var i = 0; i < timeData.length; i++) {
    var timePoint = timeData[i];
    var graphConfig = graphDataByTime[timePoint];
    optionaffect.options.push({
        series: [{
            data: graphConfig.nodes,
            links: graphConfig.links,
            category: graphConfig.category,
        }],

    });
}

myChartaffect.setOption(optionaffect);