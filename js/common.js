$(document).ready(function() {

//form nav
$('.form-nav a').click(function(){
	if (!$(this).hasClass('active') && !$(this).hasClass('disabled')) {
		$('.form-nav a').removeClass('active');
		$('.form-nav a').removeClass('prev-active');
		$(this).addClass('active');
	};
})

});