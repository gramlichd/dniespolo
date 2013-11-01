
var $tooltip = $('<div class="tooltip" />');
var timer;

$('body').append($tooltip);

$('li').mouseover(function() {
	var title = this.id;
	var path = 'tooltips/' + title + '.html';

	//cancel any previously set timers
	clearTimeout(timer);

	// set a new timer
	setTimer(function() {
		// get the movie information
		$.get(path, function(response) {
			// dump the movie information in the tooltip
			$tooltip.html(response);
		});
	});
});


function setTimer(callback){
	timer = setTimeout(callback, 1000);
}

