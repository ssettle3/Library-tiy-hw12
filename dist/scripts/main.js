var gt = {};

// Lists all coaches since 1980
gt.coaches = [
	{ 	name: 'Bill Curry',
		years: '1980, 1981, 1982, 1983, 1984, 1985, 1986',
		wins: 31,
		losses: 43
	},
	{	name: 'Bobby Ross',
		years: '1987, 1988, 1989, 1990, 1991',
		wins: 31,
		losses: 26
	},
	{	name: 'Bill Lewis',
		years: '1992, 1993, 1994',
		wins: 11,
		losses: 22
	}, 
	{	name: 'George OLeary',
		years: '1995, 1996, 1997, 1998, 1999, 2000, 2001',
		wins: 53,
		losses: 30
	},
	{	name: 'Chan Gailey',
		years: '2002, 2003, 2004, 2005, 2006, 2007',
		wins: 44,
		losses: 33
	},
	{	name: 'Paul Johnson',
		years: '2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015',
		wins: 58,
		losses: 35
	},
]




// Adding Numbers
gt.add = function (a, b){
	return (a + b);
}

// Coaches that have more than 40 wins 


	gt.wins = gt.coaches.filter(function (coach){
		if (coach.wins > 40){
			return coach.name;
		} 
	});
	gt.winWin = gt.wins.map( function (coach){
		if(coach.wins > 40)
		return coach.name;
		console.log( 'These coaches have/had over 40 wins')
	});
	
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


