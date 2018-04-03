$(document).ready(function() {
	
	$(window).on("load", function() {
		$(".pageloader").fadeOut("slow");
	}
	
	$('#fullpage').fullpage({
		anchors: ['home', 'whoarewe', 'projects', 'team', 'contact'],
		navigation: true,
		bigSectionsDestination: top,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Who are we?', 'Our Projects', 'Our Team', 'Contact Us'],
		autoScrolling: false,
		fitToSection: false,
		keyboardScrolling: true,
		animateAnchor: true,
		lockAnchors: true,
		touchSensitivity: 15
	});
			
	$("html").niceScroll({
		cursorwidth: "8px",
		cursorminheight: "140",
		horizrailenabled: false
	});
			
	$('#downwego').click(function(){
		$.fn.fullpage.moveSectionDown(); 
	});
			
	$('.response').click(function(){
		$(this).hide(1200);
	});
			
});