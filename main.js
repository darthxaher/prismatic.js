JS.require('JS.Hash',
	'JS.Observable',
	'Prismatic',
	'Drawable',
	'Layer',
	'Rectangle',
	'Line', function() {
	
	prismatic.configure({
		canvasId: 'myCanvas',
		width: 640,
		height: 480,
		backgroundColor: 'white',
		frameRate: 24,
	});

	var baseLayer = new Layer();

	var rect = new Rectangle({
		x: 100,
		y: 100,
		height: 100,
		width: 200,
		fillColor: '#aa6633',
		strokeColor: 'green',
		strokeWidth: 4
	});
	rect.setProperty({
		x: 200,
		y: 200,
		position: 'absolute'
	});
	baseLayer.addDrawable(rect);

	var line = new Line({
		x: 100,
		y: 150,
		x2: 450,
		y2: 50,
		strokeColor: '#aa6633',
		strokeWidth: 4
	});
	baseLayer.addDrawable(line);

	prismatic.addLayer(baseLayer);

	console.log('TAKING PRISMATIC CORE OFFLINE!!');
});
