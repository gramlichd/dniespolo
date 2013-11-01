function template(data){

	var html = '';

	html += '<h2 class="title">' +  data.title + '</h2>';
	html += '<ul>';
	html +=      '<li class="year">'   + data.year   + '</li>';
	html +=      '<li class="rating">' + data.rating + '</li>';
	html +=      '<li class="length">' + data.length + '</li>';
	html += '</ul>';
	html += '<p class="description">' + data.description + '</p>';
	html += '<div class="stars">' + data.stars + '</div>';
	html += '<a href="#" class="play">Play!</a>';

	return html;
}