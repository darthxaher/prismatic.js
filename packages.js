JS.Packages(function() { 
	with(this) {
        file('prismatic.js/Prismatic.js')
        	.provides('Prismatic');

        file('prismatic.js/Drawable.js')
        	.provides('Drawable')
        	.requires('Prismatic');

        file('prismatic.js/Layer.js')
        	.provides('Layer')
        	.requires('Prismatic')
        	.requires('Drawable');

        file('prismatic.js/Rectangle.js')
        	.provides('Rectangle')
        	.requires('Prismatic')
        	.requires('Drawable');

        file('prismatic.js/Line.js')
            .provides('Line')
            .requires('Prismatic')
            .requires('Drawable');

        file('prismatic.js/Circle.js')
            .provides('Circle')
            .requires('Prismatic')
            .requires('Drawable');
    }
});