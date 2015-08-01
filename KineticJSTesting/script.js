var stage = new Kinetic.Stage({
    container: 'id',
    width: 800,
    height: 600
});

var layer = new Kinetic.Layer();

var yellowHex = new Kinetic.RegularPolygon({
    x: 300,
    y: 400,
    sides: 6,
    radius: 70,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
});
console.log(yellowHex);

layer.add(yellowHex);
stage.add(layer);

//setTimeout(function () {
//    yellowHex.attrs.x = 200;
//}, 1000);
//
//
//layer.add(yellowHex);
//stage.add(layer);
