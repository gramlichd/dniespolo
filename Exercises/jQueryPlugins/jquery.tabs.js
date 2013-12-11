// this is the same exact thing as saying 
//$.prototype
//it's just smaller

$.fn.tabs = function(tabIndex){
	var $tabs = this.children('.tabs');
	var $content = this.children('.content');

	$tabs.on('click', 'li', function() {
		var $this = $(this);
		var index = $this.index();

		$this.addClass('active')
			.siblings('.active')
			.removeClass('active');

		$content.children().hide()
			.eq(index).show();

	});

	if (!tabIndex) {
		tabIndex = 0;
	}

	$tabs.children().eq(tabIndex).click();
};