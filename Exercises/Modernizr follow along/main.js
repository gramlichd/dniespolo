/*//1st way
var myObj = new Object();

//2nd way
var myOtherObj = {};
*/
//{}"curly braces" creat an object
Modernizr.load({
	test: Modernizr.mq('only all'),
	nope: 'respond.js'

});

Modernizr.load({
	test: Modernizr.boxshadow,
	yep: 'boxshadow.css',
	nope: 'no-boxshadow.css',
	complete: function(){
		// $('.text-shadow').textShadow(); 
		console.log('Everything is good to go!');
	}
});



function myFunc(message){
	console.log(message);
}

myFunc('hello');
myFunc(3);
myFunc({});