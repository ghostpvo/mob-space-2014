jQuery(function($){
$('input[type="tel"]').mask('+7(999) 999-99-99');
});

$.validate({
	validateOnBlur : false,
	showHelpOnFocus : false
});


var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

if (isTouchDevice) {
	
}	else {
	new WOW().init();
}

$(document).ready(function () {
	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});
});

$(document).ready(function(){
	// marckup dynamic
	$('.pr-title').append('<span class="readmore">ПОДРОБНЕЕ <i class="i-readmore"></i></span>');

	$('.pr-title .readmore').on('click', function(){
		$(this).toggleClass('active');
		$(this).parents('li').find('.about-info').slideToggle(400);
		var thisOffsetTop = $(this).offset().top;
		$('html,body').animate({scrollTop: thisOffsetTop}, 600);
	});

	$('.whois-we a').on('click', function(){
		$(this).prev().slideToggle();
		$(this).hide(300);
		$(this).parents('.whois-we').addClass('all-info');
		return false;
	});

	/* input file */
    $('.input-file-add').change(function() {
        var t = $(this).val();
        if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
        $(this).prev().hide();
        var e = $(this).next().find('strong').text(t);
        $(this).next().addClass('show-this');
    });
    $('.remove-add-file').click(function(e) {
    	e.preventDefault();
        var a = $(this).parent();
        a.prev().val('');
        a.removeClass('show-this');
   		a.prevAll().find('span').parent().fadeIn(1000);
    });   

    $('.add-goods-positon').click(function(e){
    	e.preventDefault();
    	$('.for-other-goods-positon').append('<fieldset><select name="product_select" class="page-form__product-select"><option value="" selected disabled>Выберите продукцию</option><option value="Выберите продукцию">Балка двутавр</option><option value="Выберите продукцию">Арматура</option><option value="Выберите продукцию">Листовой прокат</option></select>&nbsp;<div><select name="product_select" class="page-form__product-select"><option id="my_option" value="" selected disabled>Выберите размер</option><option class="my_option" value="Выберите продукцию">Балка двутавр</option><option class="my_option" value="Выберите продукцию">Арматура</option><option class="my_option" value="Выберите продукцию">Листовой прокат</option></select>&nbsp;<input name="number_of" class="page-form__text page-form__number-of" type="text" placeholder="Кол-во"></div></fieldset>');
    });

    // end input file

	$('.orders-map').mouseenter(function() {
		$(this).find('.london').fadeIn(300);
		setTimeout(function() {
			$('.cool-map .spb').fadeIn(300);
		}, 400);
		setTimeout(function() {
			$('.cool-map .msk').fadeIn(300);
		}, 800);
		setTimeout(function() {
			$('.cool-map .minsk').fadeIn(300);
		}, 1200);
		setTimeout(function() {
			$('.cool-map .ekb').fadeIn(300);
		}, 1600);
		setTimeout(function() {
			$('.cool-map .nvs').fadeIn(300);
		}, 2000);
		setTimeout(function() {
			$('.cool-map .oae').fadeIn(300);
		}, 2400);
	});

	/* end */

	/* animate scroll */
	$("body").on("click", ".a-animate", function(){
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 600);
		return false;
	}); 

	// responsive
	$('.mob-menu i').on('click',function(){
		$(this).next().slideToggle();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('.page-header').addClass('fix-this');
			$('body').css('paddingTop','143px');
			$('.slideto-top').fadeIn(300);
		}
		else {
			$('.page-header').removeClass('fix-this');
			$('body').css('paddingTop','0');
			$('.slideto-top').fadeOut(300);	
		}
	});

	// modal window
	$(document).ready(function() {
		$('.show-popup').on('click', function(e) {
			e.preventDefault();
			element = $(this).attr('data-modal');
			elementId = '#'+element;
			$(''+elementId+'').slideDown(500);
			$('.overlay').fadeIn(1000);
		});

		$('.overlay, .modal-close').on('click', function(e){
			e.preventDefault();
			$('.overlay').fadeOut(500);
			$('.modal-window').slideUp(200);
		});
	});
});