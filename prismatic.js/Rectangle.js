var Rectangle = new JS.Class(Drawable, {
	// constructor
    initialize: function(argObj) {
    	this.callSuper(argObj);
    	this.height = argObj.height || 50;
    	this.width = argObj.width || 100;
    	this.strokeColor = argObj.strokeColor || 'black';
    	this.strokeWidth = argObj.strokeWidth || 1;
    	this.fillColor = argObj.fillColor || '#ddaaff';
        this.uniqueName = 'Rectangle';
    },

	draw: function(context) {
		this.callSuper(context);

		context.beginPath();

		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.fillColor;
		context.fill();
		context.lineWidth = this.strokeWidth;
		context.strokeStyle = this.strokeColor;

		context.stroke();
	},

	performHitTest: function (eventObj) {
		var that = this;
		return this.callSuper(eventObj, function(hitX, hitY) {
			if (hitX > that.x && hitX < (that.width + that.x) && hitY > that.y && hitY < (that.height + that.y)) {
				return true;
			}
			return false;
		});
	},
});
