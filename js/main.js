var user_name;
var user_fullname;
var user_year;
var s;

var admitted = new Array();
admitted[2009] = "55,700";
admitted[2010] = "57,600";
admitted[2011] = "61,566";
admitted[2012] = "72,697";

var numbers = new Array();
numbers[2016] = "One";
numbers[2015] = "Two";
numbers[2014] = "Three";
numbers[2013] = "Four";

$(document).ready(function() {

	// Make a few fixes to the intro screen
	$('#intro').css('height',window.innerHeight);
	$('#intro #info-name').focus();
	$('section').css('height',window.innerHeight);

	// Disable the "Enter" key on the intro form
	$('#info-form').bind("keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			return false;
		}
	});


	function setname(){
		var name = $('#info-name').val();
		fullname = name;
		if(name == "")
		{
			$('#tagline-name').html("your");
			return;
		}
		name = name.split(" ");
		var i = 0;
		while(name[i] == " " || name[i] == "")
			i = i+1;
		user_name = name[i];
		$('#tagline-name').html(user_name+"'s");

		// Change text throughout page
		$('.user-name').each(function(){
			$(this).html(user_name);
		});
	}

	$('#info-name').keypress(setname);

	// Change "This is your story" to "This is ---'s" story
	$('#info-name').blur(setname);


	$('#info-grad-year').change(function(){
		user_year = parseInt($('#info-grad-year').val());

		// Change text throughout page
		$(".user-year").each(function(){
			$(this).css('display','inline');
			$(this).html('   '+(user_year-4));
		});
		$('#user-applied-data').html(admitted[user_year-4]);

		$('#user-first-blurb').html(numbers[user_year] + ' years ago, your');
		if(numbers[user_year] == "One")
			$('#user-first-blurb').html('One year ago, your');

		if(user_year == 2013)
		{
			$('#fountain-text').html('getting ready to');
			$('#graduate-text').html('Then this weekend you’ll graduate, saying farewell to UCLA ...');
		}
		else
		{
			$('#fountain-text').html('watching graduates');
			$('#graduate-text').html('Then this weekend you’ll graduate, saying farewell to UCLA ...');
		}
	});


	// Initialize skrollr
	s = skrollr.init({forceHeight:true});
});
