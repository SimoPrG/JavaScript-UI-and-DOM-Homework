(function initKinetic(){
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 800,
        height: 600
    });
    var layer = new Kinetic.Layer();
    var rect = new Kinetic.Rect({
        x: 100,
        y: 100,
        width: 75,
        height: 22,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 3
    });
    layer.add (rect);
    stage.add(layer);
}());