

$(document).ready(function () {
	$('.icon-menu').click(function () {
		$('.icon-menu, .menu__list, .menu__item, .links, .header__links, .menu').toggleClass('active');
		$('.links').addClass('links-active');
		$('.header__links, .links').appendTo($('.menu__list'));
		$('body').toggleClass('lock');
	});
});


function ibg() {
	document.querySelectorAll(".ibg").forEach(el => {
		if (el.querySelector('img')) {
			el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
		}
	});
}
ibg();

// $(function ($) {
// 	$(".nums").viewportChecker({
// 		callbackFunction: function () {
// 			$('.nums').animate({ num: 8 }, {
// 				duration: 1500,
// 				step: function (num) {
// 					this.innerHTML = (num).toFixed(0)
// 				}
// 			});
// 		}
// 	});
// });

$(function ($) {
	$(".14").viewportChecker({
		callbackFunction: function () {
			$('.14').animate({ num: 14 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
	$(".748").viewportChecker({
		callbackFunction: function () {
			$('.748').animate({ num: 748 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
	$(".3854").viewportChecker({
		callbackFunction: function () {
			$('.3854').animate({ num: 3854 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
	$(".24").viewportChecker({
		callbackFunction: function () {
			$('.24').animate({ num: 24 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
});

