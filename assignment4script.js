$(document).ready(function(){

	$('.readmore').click(showText);
	$('.readless').click(hideText);

	function showText(){
		event.preventDefault();
		$('#show-this-on-click').slideDown().show();
		$('.readless').show();
		$('.readmore').hide();
	}

	function hideText(){
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
		$('.readmore').show('slow');
	}
	$('.learnmore').click(learnmore);

	function learnmore(){
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}

});