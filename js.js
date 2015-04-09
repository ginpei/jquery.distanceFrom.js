jQuery(function($) {
	$('.js-to').on('click', function(event) {
		var $from = $('.js-from');
		var $to = $(event.currentTarget);
		console.log($from.distanceFrom($to));
	});
});
