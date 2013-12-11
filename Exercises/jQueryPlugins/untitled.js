/*function Person(name){
	this.name = name;
}

Person.prototype.talk = function(){
	return 'Hello, my name is' + this.name;

};

var dawn = new Person('Dawn');
var mike = new Person('Mike');


$.prototype.person = function(name) {
	return 'Hello, my name is ' + name;
};

/*function __(){
	return new fakeQuery();
}

function fakeQuery() {}

fakeQuery.prototype.person = function(name) {
	return 'Hi my name is ' + name;

};*/





(html)
		<a href="#">Link 1</a>
		<a href="#">Link 2</a>
		<a href="#">Link 3</a>
		<a href="#">Link 4</a>
		<a href="#">Link 5</a>

		<button id="one">Click me!</button>
		<button id="two">Hello!</button>



js

		$.prototype.greenify = function() {
	var jQueryInstance = this;

	jQueryInstance.css('color', 'green');

	return jQueryInstance;
};

/*$('button').click(function() {
	$('a').greenify()
	.animate({ opacity: 0}, 1000);

});*/

$('#one').click(function() {
	$('a').greenify()
	.animate({ opacity: 0 }, 1000);
});

$('#two').click(function() {

	$('p').greenify();

});




http://www.photoshelter.com/website-examples/