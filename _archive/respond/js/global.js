	$('body').append('<a href="#" id="reset" class="intro">Respond.</a>');
	$('#reset').click(function() {
		$('.flexslider').flexslider(1);
		$('.flexslider').flexslider(0);
		return false;
	});
	var slider;
	$('.flexslider').flexslider({
		animation: 'slide',
		animationLoop: false,
		controlNav: false,
		selector: '.slides > section',
		slideshow: false,
		start: function() {
			slider = $('.flexslider').data('flexslider');
		},
		before: function() {
			if ($(slider.slides[slider.animatingTo]).hasClass('intro')) {
				$('#reset').addClass('intro');
			}
			else {
				$('#reset').removeClass('intro');
			}
		},
		after: function() {
			if ($(slider.slides[slider.animatingTo]).hasClass('batman')) {
				if (!$('#batman').length) {
					$(slider.slides[slider.animatingTo]).append($('<audio id="batman"><source src="audio/batman.ogg" type="audio/ogg"><source src="audio/batman.mp3" type="audio/mpeg"></audio>'));
				}
				$('#html5').addClass('batmobile');
				if (!$('.played').length) {
					var batSound = $('#batman');
					batSound.get(0).play();
					$('#batman').addClass('played');
				}
			}
			else {
				$('#html5').removeClass('batmobile');
				$('#batman').removeClass('played');
			}
			if ($(slider.slides[slider.animatingTo]).hasClass('devices')) {
				$('#device-animate').addClass('trigger-animation');
				setTimeout(function() {
					$('#device-animate').removeClass('trigger-animation');
				}, 2500);
			}
		}
	});