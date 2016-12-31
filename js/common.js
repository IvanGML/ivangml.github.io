$(document).ready(function() {
	$(window).scroll(function () {
		var WindowScroll = $(this).scrollTop();
		$('.header__h1').css({'transform' : 'translate(0px, '+ WindowScroll /1.25 +'%'});
		$('.header__h2').css({'opacity' : ''+ 20/WindowScroll  +''});
		$('.header__button').css({'opacity' : ''+ 20/WindowScroll  +''});
		$('.header__h2').css({'transform' : 'translate(0px, '+ WindowScroll/0.9 +'px'});
		$('.header__button').css({'transform' : 'translate(0px, '+ WindowScroll/0.9 +'px'});
	});

	var sliderToggle = function() {
		if ($("#indicator__button-1").prop('checked')) {
			$('.slid-wrap__item-slide--first').css({'opacity' : '1'});
			$('.indicator__label--first').css({'background-color' : '#3a4246'});
		} else {
			$('.slid-wrap__item-slide--first').css({'opacity' : '0'});
			$('.indicator__label--first').css({'background-color' : 'transparent'});
		}
		if ($("#indicator__button-2").prop('checked')) {
			$('.slid-wrap__item-slide--second').css({'opacity' : '1'});
			$('.indicator__label--second').css({'background-color' : '#3a4246'});
		} else {
			$('.slid-wrap__item-slide--second').css({'opacity' : '0'});
			$('.indicator__label--second').css({'background-color' : 'transparent'});
		}
		if ($("#indicator__button-3").prop('checked')) {
			$('.indicator__label--third').css({'background-color' : '#3a4246'});
			$('.slid-wrap__item-slide--third').css({'opacity' : '1'});
		} else {
			$('.slid-wrap__item-slide--third').css({'opacity' : '0'});
			$('.indicator__label--third').css({'background-color' : 'transparent'});
		}
	};

	$(window).on( "click", sliderToggle );
});

