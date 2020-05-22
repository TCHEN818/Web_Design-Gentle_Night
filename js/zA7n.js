/*!
 * zA7n, v1.0, MIT License
 * bryzgalovd@gmail.com
 */
(function ($, window) {
	'use strict';
	function zA7n($ul, opt) {
		var ul_width,
			$li = $('li', $ul),
			li_length,
			start_width;

		li_length = $li.length;

		function setVars () {
			ul_width = $ul.width();
			start_width = ul_width / li_length;
			$li.css({'width': start_width + 'px'});
		}
		
		$li.each(function () {
			var $item = $(this),
				item_width;

			item_width = $item.width();

			$item.on({
				'mouseover': function (event) {
					$li.css({'width': ((ul_width - item_width) / (li_length - 1)) + 'px'});
					$item.css({'width': item_width + 'px'});
				},
				'mouseout': function (event) {
					$li.css({'width': start_width + 'px'});
				}
			});
		});
		
		setVars();
		
		$(window).on('resize', function () {
			setVars();
		}.debounce(150));
	}

	$.fn.zA7n = function (o) {
		var opt = $.extend({}, o);
		return this.each(function () {
			var $ul = $(this);
			if ($ul.data('zAc6n')) {
				return;
			}
			zA7n($ul, opt);
			$ul.data('zAc6n', 1).addClass('_create');
		});
	};
}(jQuery, this));

