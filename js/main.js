$(document).ready(function() {
	$('#intro').css('height',window.innerHeight);
	$('#intro #info-name').focus();

	$('#info-form').bind("keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			return false;
		}
	});
});
