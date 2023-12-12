
var convertor = Convertor;
var points = simply_province;
var map = new BMap.Map('baidu_map_canvas');
map.enableScrollWheelZoom();
map.centerAndZoom(new BMap.Point(112.60, 34.26), 5);
var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
    scale: 0.6,
    strokeColor: '#fff',
    strokeWeight: 2,
});
var icons = new BMap.IconSequence(sy, '100%', '10%', false);
var lushu;
var arrPois = [];
for (var i = 0; i < points.length; i++) {
    var lng = points[i].lng;
    var lat = points[i].lat;
    arrPois.push(new BMap.Point(lng, lat));
}
map.addOverlay(new BMap.Polyline(arrPois, {
    strokeColor: '#18a45b',
    strokeWeight: 8,
    strokeOpacity: 0.6,
    enableEditing: false,
    enableClicking: false,
    icons: [icons]
}));

// 运动
lushu = new BMapLib.LuShu(map, arrPois, {
    defaultContent: "",
    autoView: true,
    icon: new BMap.Icon("image/libai.png", new BMap.Size(63, 63)),
    speed: 50000,
    enableRotation: false,
    landmarkPois: []
});
// 绑定事件
$("run").onclick = function () {
    lushu.start();
}
$("pause").onclick = function () {
    lushu.pause();
}
function $(element) {
    return document.getElementById(element);
}