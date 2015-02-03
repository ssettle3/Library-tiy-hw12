stephen = {}


// Filter an Array
stephen.filter = function(array, param){
	array.filter(function(a){
		return a.param;

	});
};

// Get today's date
stephen.date = function (){
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0!
var year = today.getFullYear();

if(day<10) {
    day='0'+day
} 

if(month<10) {
    month='0'+month
} 

today = month+'/'+day+'/'+year;
console.log(today);
};


// Throwing something on the page
stephen.append = function(message){
	var a = $('class')
	a.append(message);
}

// Says Hello
stephen.name = function (yourName){
	alert("Hey there " + yourName + "!")
}


// Button click

$('#GYJ').on('click', function(){
	console.log("Go Jackets!");
	$('.outer-container').css("transform", "rotate(180deg");
});

// Squares a Number
stephen.square = function(i){
	return (i * i)
}

