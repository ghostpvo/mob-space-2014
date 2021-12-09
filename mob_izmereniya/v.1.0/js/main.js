jQuery(function($){
$('input[type="tel"]').mask('+7(999) 999-99-99');
});

$.validate({
	validateOnBlur : false,
	showHelpOnFocus : false
});

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

	$('.enterprise-link').click(function(e) {
		e.preventDefault();
	});

	// steps show and animate
	// $(window).scroll(function () {
	// 	var scrollTop = $(window).scrollTop() + $(window).height();
	// 	if (scrollTop>1500) {
	// 		$('.all-dev-stages').css('width','100%');
	// 		setTimeout(function() {
	// 			$('.ads_step1').fadeIn(500);
	// 			$('.ads_step1').css('display','inline-block');
	// 		}, 500);
	// 		setTimeout(function() {
	// 			$('.ads_step2').fadeIn(500);
	// 			$('.ads_step2').css('display','inline-block');
	// 		}, 800);
	// 		setTimeout(function() {
	// 			$('.ads_step3').fadeIn(500);
	// 			$('.ads_step3').css('display','inline-block');
	// 		}, 1100);
	// 		setTimeout(function() {
	// 			$('.ads_step4').fadeIn(500);
	// 			$('.ads_step4').css('display','inline-block');
	// 		}, 1400);
	// 		setTimeout(function() {
	// 			$('.ads_step5').fadeIn(500);
	// 			$('.ads_step5').css('display','inline-block');
	// 		}, 1700);
	// 		setTimeout(function() {
	// 			$('.ads_step6').fadeIn(500);
	// 			$('.ads_step6').css('display','inline-block');
	// 		}, 2000);
	// 		setTimeout(function() {
	// 			$('.ads_step7').fadeIn(500);
	// 			$('.ads_step7').css('display','inline-block');
	// 		}, 2300);
	// 		setTimeout(function() {
	// 			$('.ads_step8').fadeIn(500);
	// 			$('.ads_step8').css('display','inline-block');
	// 		}, 2600);

	// 		setTimeout(function() {
	// 			$('.step-description').css('visibility', 'visible');
	// 		}, 1000);
	// 	};
	// });

	// x-icons
	// $('.all-dev-stages > ul > li').mouseenter(function() {
	// 	i = $(this).index();
	// 	$('.step-description ul').fadeOut(500);
	// 	$('.step-description ul:eq('+i+')').fadeIn(500);
	// });

	/* hover show */

	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop() + $(window).height();
		if (scrollTop>1500) {
			$('#bgvid').hide();
		}

		else {
			$('#bgvid').show();
		}
	});

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
	});

	/* end */

	/* for input file */
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

    /* for checkbox */

	$('.select-os label').click(function() {
		$(this).toggleClass('checked');
	});

	/* portfolio */

	$('.project-more-info').click(function(e) {
		e.preventDefault();
		$(this).parents().eq(1).next().slideToggle(700);
	});

	$('.slide-to-bottom').click(function(){
		$(this).addClass('slide-to-up');
		var topScrPos = $(this).parents('.project-preview').next().offset().top;
		var topScrPos = topScrPos - 39;
		$('html,body').animate({scrollTop: topScrPos}, 200);
		$(this).removeClass('slide-to-bottom');
		return false;
	});

	$('.slide-to-up').click(function() {
		$(this).addClass('slide-to-bottom');
		$(this).removeClass('slide-to-up');
	});

	$('.disable-store-link').click(function(e){
		e.preventDefault();
	});

    /* ==========================================================================
    Parallax
    ========================================================================== */

    /*$('.poject-1 .project-preview').parallax("50%", 0.7);
    $('.poject-2 .project-preview').parallax("50%", 0.7);
    $('.poject-3 .project-preview').parallax("50%", 0.7);
    $('.poject-4 .project-preview').parallax("50%", 0.7);
    $('.poject-5 .project-preview').parallax("50%", 0.7);
    $('.poject-6 .project-preview').parallax("50%", 0.7);*/

	/* end portfolio */

	$('.show-firs-form').on('click', function(){
		$('.form-for-show').slideDown(700);
	});

	/* animate scroll */

	$("body").on("click", ".a-animate", function(){
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 600);
		return false;
	}); 

	$("body").on("click", "a.scroll-to", function(){
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 200);
		return false;
	}); 

	var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	if (isTouchDevice) {
		
	}	else {
		new WOW().init();
	}

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

	// start landing preload
	$(window).load(function(){
		$('#loading').fadeOut(900);
		setTimeout(function(){
			$('body').css('overflow-y','scroll');
		},900);
	});

	// preview slider mobile
	$("#src-pr1, #src-pr2, #src-pr4, #src-pr6, #src-pr7, #src-pr8, #src-pr9").owlCarousel({
		stopOnHover : true,
		navigation : false,
		pagination : true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true
	});
});