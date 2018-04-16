$(function(){
    $('.btn-anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-50}, 750);
		return false;
	});
});

//$(document).scroll(function() {
//    var y = $(this).scrollTop();
//    if (y > 300) {
//        $('#navbar').fadeIn();
//    } else {
//      $('#navbar').fadeOut();
//  }
//});
