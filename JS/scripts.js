$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header_row, .header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});