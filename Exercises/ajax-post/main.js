$('form').submit(function(event) {
	event.preventDefault();

	// gather all information
	var information = $(this).serializeArray();
	//var information = new FormData(this); for html5
	var isValid = true;


	$('.error').remove();



	$.each(information, function(i, field) {

		if (field.value.length == 0) {
			isValid = false;

			$('#' + field.name).parent()
				.after('<p class="error">Invalid Field</p>');

		}

	});

	if (isValid){
		

		// send it to the server
		$.post(this.action, information, function(message){

			// display a message after success or error
			$('#server-message').html(message);
			$('#winmask').show();

			// clear out the form
			$('input[type="text"], textarea').val('');

		});

	}

});  

$('#winmask').click(function() {
	$(this).hide();
});

//console.log (information);