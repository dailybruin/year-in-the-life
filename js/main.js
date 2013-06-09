var user_name;

$(document).ready(function() {
	// Initialize skrollr
	skrollr.init();

	// Make a few fixes to the intro screen
	$('#intro').css('height',window.innerHeight);
	$('#intro #info-name').focus();

	// Disable the "Enter" key on the intro form
	$('#info-form').bind("keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			return false;
		}
	});

	// Change "This is your story" to "This is ---'s" story
	$('#info-name').blur(function(){
		var name = $('#info-name').val();
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

	});
});
