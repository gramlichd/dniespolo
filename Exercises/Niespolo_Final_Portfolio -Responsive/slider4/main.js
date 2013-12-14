Modernizr.load({
	test: Modernizr.mq('only all'),
	nope: 'jquery.js'

});

Modernizr.load({
	test: Modernizr.textshadow,
	yep: 'textshadow.css',
	nope: 'no-textshadow.css',

});
Modernizr.load({
	test: Modernizr.multiplebgs,
	yep: 'multiplebgs.css',
	nope: 'no-multiplebgs.css',

});
Modernizr.load({
	test: Modernizr.transition,
	yep: 'transition.css',
	nope: 'no-transition.css',

});
Modernizr.load({
	test: Modernizr.transform,
	yep: 'transform.css',
	nope: 'no-transform.css',

});
Modernizr.load({
	test: Modernizr.opacity,
	yep: 'opacity.css',
	nope: 'no-opacity.css',

});
Modernizr.load({
	test: Modernizr.boxshadow,
	yep: 'boxshadow.css',
	nope: 'no-boxshadow.css',

});
Modernizr.load({
	test: Modernizr.gradients,
	yep: 'gradients.css',
	nope: 'no-gradients.css',

});
