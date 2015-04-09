/*
 * By TAKANASHI Ginpei
 * MIT License
 * https://github.com/ginpei/jquery.distanceFrom.js
 */

jQuery.fn.distanceFrom = function($to) {
	var $from = this;

	var pFrom = jQuery.fn.distanceFrom.getCenterOf($from);
	var pTo = jQuery.fn.distanceFrom.getCenterOf($to);

	var dx = pTo.left - pFrom.left;
	var dy = pTo.top  - pFrom.top;
	distance = Math.sqrt(dx*dx + dy*dy);
	return distance;
};

jQuery.fn.distanceFrom.getCenterOf = function($el) {
	var pos = $el.position();
	return {
		left: pos.left + $el.width() /2,
		top:  pos.top  + $el.height()/2
	};
};
