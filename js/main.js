Modernizr.load({
	test: Modernizr.mq('only all'),
	nope: 'jquery.js'

});

Modernizr.load({
	test: Modernizr.boxshadow,
	yep: 'boxshadow.css',
	nope: 'no-boxshadow.css',

});
Modernizr.load({
	test: Modernizr.borderradius,
	yep: 'borderradius.css',
	nope: 'no-borderradius.css',

});
Modernizr.load({
	test: Modernizr.border,
	yep: 'border.css',
	nope: 'no-border.css',

});
Modernizr.load({
	test: Modernizr.transform,
	yep: 'transform.css',
	nope: 'no-transform.css',

});