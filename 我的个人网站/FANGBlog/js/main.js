$(function($) {
	$('.scroll').click(function(event) {
		event.preventDefault();
		var top = $(this.hash).offset().top -51;
		$('html,body').animate({
			scrollTop: top
		}, 1000);
	});
});


//=========experience========= 
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	effect: 'flip',
	grabCursor: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev'
}, 5000);
//=========experience============

//============skills===========
$(document).ready(function(e) {
	var index = 0;
	$(document).scroll(function() {
		var top = $('#skills').height() - $(window).scrollTop();
		//console.log(top);
		if (top < -1000) {
			if (index == 0) {
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					barColor: function(percent) {
						percent /= 100; //percent/100
						return "rgb(" + Math.round(105 * (1 - percent)) + ", " + Math.round(119 * percent) + ", 0)";
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					},
					animate: 1000
						// trackColor: '#666',
						// scaleColor: true,
						// lineCap: 'butt',
						//lineWidth: 15,

				});
			}
			index++;
		}
	})
});
//============skills===========

//==========portfolio==========
// Pretty Photo
$(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto();
});

//==========portfolio==========

//============contact===============
//judge empty-----单例模式
$(function() {
	var contact = {
		init: function() {
			this.render();
			this.bind();
		},
		render: function() {
			var cont = this;
			cont.$btn = $("#sendbtn");
		},
		bind: function() {
			var cont = this;
			cont.$btn.click(function() {
				if ($('#name').val() === "" || $('#email').val() === "" || $('#message').val() === "") {
					if ($('#name').val() === "") {
						$('#name').parent().addClass('has-error');
					} else {
						$('#name').parent().removeClass('has-error');
					}

					if ($('#email').val() === "") {
						$('#email').parent().addClass('has-error');
					} else {
						$('#email').parent().removeClass('has-error');
					}

					if ($('#message').val() === "") {
						$('#message').parent().addClass('has-error');
					} else {
						$('#message').parent().removeClass('has-error');
					}
				}
			});
		}
	}

	function init() {
		contact.init();
	};
	init();
})



//angular
angular.module('app', [])
	.controller('ctrl', function() {});


//============contact===============


