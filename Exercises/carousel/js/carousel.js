/*console.log ('hello');*/
var transform = Modernizr.prefixed('transform');
var $slides = $('.slide');
var slideWidth = $slides.width();
var angleIncrement = 360 / $slides.length;
var depth = slideWidth / (Math.tan(Math.PI/$slides.length) * 2);
var currentAngle = 0;

$slides.each(function(i) {
	var degreesToRotate = angleIncrement * i;
	var transformValue = getTransformValue(degreesToRotate, depth);

	$(this).css(transform, transformValue);

});


$('#left-button').click(function() {
	currentAngle = currentAngle - angleIncrement;
	var transformValue = getTransformValue(currentAngle, 0);

	$('.slides').css(transform, transformValue);
});

$('#right-button').click(function() {
	currentAngle = currentAngle + angleIncrement;
	var transformValue = getTransformValue(currentAngle, 0);

	$('.slides').css(transform, transformValue);
});

function getTransformValue (degrees, z){
	var value = 'rotateY(' + degrees + 'deg)';

	value += ' translateZ(' + z + 'px)';

	return value;
}