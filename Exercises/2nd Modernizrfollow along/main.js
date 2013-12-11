Modernizr.load({
	test: Modernizr.csstransitons,
	nope: 'jquery.js',
	complete: function(){

		if (!window.jQuery){
			return;
		}

		$('.my-div').mouseover(function(){
			$(this).stop().animate({
				marginLeft: '200px'
			}, 500);
		}).mouseout(function() {
			$(this).stop().animate({
				marginLeft: '0px'
			}, 500);
		});
	}
});