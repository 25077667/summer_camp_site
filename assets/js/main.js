/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function(){
	$("#map2").hide();
	$("#map3").hide();
	$("#btn1").click(function(){
		$("#map1").show();
		$("#map2,#map3").hide();
		$(this).addClass("special");
		$("#btn2,#btn3").removeClass("special");
	});
	$("#btn2").click(function(){
		$("#map2").show();
		$("#map1,#map3").hide();
		$(this).addClass("special");
		$("#btn1,#btn3").removeClass("special");
	});
	$("#btn3").click(function(){
		$("#map3").show();
		$("#map2,#map1").hide();
		$(this).addClass("special");
		$("#btn2,#btn1").removeClass("special");
	});

	$("#teach2").hide();
	$("#teach3").hide();
	$("#teach4").hide();
	$("#class01").click(function(){
		$("#teach1").show();
		$("#teach2,#teach3,#teach4").hide();
		$(this).addClass("special");
		$("#class02,#class03,#class04").removeClass("special");
	});
	$("#class02").click(function(){
		$("#teach2").show();
		$("#teach1,#teach3,#teach4").hide();
		$(this).addClass("special");
		$("#class01,#class03,#class04").removeClass("special");
	});
	$("#class03").click(function(){
		$("#teach3").show();
		$("#teach1,#teach2,#teach4").hide();
		$(this).addClass("special");
		$("#class01,#class02,#class04").removeClass("special");
	});
	$("#class04").click(function(){
		$("#teach4").show();
		$("#teach1,#teach2,#teach3").hide();
		$(this).addClass("special");
		$("#class01,#class02,#class03").removeClass("special");
	});
});

(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// Menu.
			var $menu = $('#menu');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();

					// Hide.
						$menu._hide();

				})
				.find('.inner')
					.on('click', '.close', function(event) {

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();

						// Hide.
							$menu._hide();

					})
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('click', 'a', function(event) {

						var href = $(this).attr('href');

						event.preventDefault();
						event.stopPropagation();

						// Hide.
							$menu._hide();

						// Redirect.
							window.setTimeout(function() {
								window.location.href = href;
							}, 350);

					});

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

})(jQuery);