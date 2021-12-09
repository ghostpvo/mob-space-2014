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

	$(window).scrollTop(0);

	$('.enterprise-link').click(function(e) {
		e.preventDefault();
	});

	/* hot-dot move */

	$('.next-step').on('click', function() {
		idtop = $(document).scrollTop() + 304;
		$('html,body').animate({scrollTop: idtop}, 300);
	});

	$(document).on('scroll', function () {
		var scrollTopB = $(document).scrollTop() + $(window).height();
		if (scrollTopB>1500  && scrollTopB<4200) {
			$('.virgin-body .sroll-pattern').show();
			$('.virgin-body').addClass('scroll-fix');
		}

		if (scrollTopB>4200) {
			$('.next-step').fadeOut(500);
			$('.sroll-pattern').hide();
			$('body').removeClass('scroll-fix');
			$('body').addClass('imp-remove');
			$('body').removeClass('virgin-body');
			$('.next-step').removeClass('next-step');
			$('.all-dev-stages > ul > li').show();
		}
	});

	var dotPos = 0;

	$('.sroll-pattern').on('mousewheel', function(event) {
		//console.log(event.deltaX, event.deltaY, event.deltaFactor);

		idtop = $(document).scrollTop() + 304;

		// 1
		if (dotPos==0) {
			$('.hot-dot').css('left', 260);
		};
		if (dotPos==1) {
			$('.hot-dot').css('left', 360);
		};
		if (dotPos==2) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==3) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==4) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==5) {
			$('.hot-dot').css('left', 760);
		};	
		if (dotPos==6) {
			$('.hot-dot i').fadeOut(100);
			$('.hot-dot').css('left', 845);
			$('.ads_step1').fadeIn(1000);
		};

		if (dotPos==7) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 2
		if (dotPos==8) {
			$('.hot-dot').addClass('step2');
			$('.hot-dot').removeClass('step1');
			$('.hot-dot i').fadeIn(100);
		}
		if (dotPos==9) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==10) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==11) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==12) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==13) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==14) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 310);
			$('.ads_step2').fadeIn(1000);
		};

		if (dotPos==15) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 3
		if (dotPos==16) {
			$('.hot-dot').addClass('step3');
			$('.hot-dot').removeClass('step2');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==17) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==18) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==19) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==20) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==21) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==22) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 860);
			$('.ads_step3').fadeIn(1000);
		};

		if (dotPos==23) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 4
		if (dotPos==24) {
			$('.hot-dot').addClass('step4');
			$('.hot-dot').removeClass('step3');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==25) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==26) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==27) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==28) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==29) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==30) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 310);
			$('.ads_step4').fadeIn(1000);
		};

		if (dotPos==31) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 5
		if (dotPos==32) {
			$('.hot-dot').addClass('step5');
			$('.hot-dot').removeClass('step4');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==33) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==34) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==35) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==36) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==37) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==38) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 860);
			$('.ads_step5').fadeIn(1000);
		};

		if (dotPos==39) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 6
		if (dotPos==40) {
			$('.hot-dot').addClass('step6');
			$('.hot-dot').removeClass('step5');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==41) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==42) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==43) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==44) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==45) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==46) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 310);
			$('.ads_step6').fadeIn(1000);
		};

		if (dotPos==47) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 7
		if (dotPos==48) {
			$('.hot-dot').addClass('step7');
			$('.hot-dot').removeClass('step6');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==49) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==50) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==51) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==52) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==53) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==54) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 860);
			$('.ads_step7').fadeIn(1000);
		};

		if (dotPos==55) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 8
		if (dotPos==56) {
			$('.hot-dot').addClass('step8');
			$('.hot-dot').removeClass('step7');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==57) {
			$('.hot-dot').css('left', 760);
		};
		if (dotPos==58) {
			$('.hot-dot').css('left', 660);
		};
		if (dotPos==59) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==60) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==61) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==62) {
			$('.hot-dot i').fadeOut(300);
			$('.hot-dot').css('left', 310);
			$('.ads_step8').fadeIn(1000);
		};

		if (dotPos==63) {
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		// 9
		if (dotPos==64) {
			$('.hot-dot').addClass('last');
			$('.hot-dot').removeClass('step8');
			$('.hot-dot i').fadeIn(300);
		}
		if (dotPos==65) {
			$('.hot-dot').css('left', 380);
		};
		if (dotPos==66) {
			$('.hot-dot').css('left', 460);
		};
		if (dotPos==67) {
			$('.hot-dot').css('left', 560);
		};
		if (dotPos==68) {
			$('.hot-dot').css('left', 591);
		};

		if (dotPos==72) {
			$('.hot-dot').css('top', 2445);
			$('html,body').animate({scrollTop: idtop}, 300);
		};

		dotPos++;
	});

	/* end */

	/* hover show */

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
		var topScrPos = $(this).offset().top;
		var topScrPos = topScrPos - 240;
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

    /*$('.poject-1 .project-preview').parallax("50%", -0.1);
    $('.poject-2 .project-preview').parallax("50%", -0.1);
    $('.poject-3 .project-preview').parallax("50%", -0.1);
    $('.poject-4 .project-preview').parallax("50%", -0.1);
    $('.poject-5 .project-preview').parallax("50%", -0.1);
    $('.poject-6 .project-preview').parallax("50%", -0.1);
    $('.poject-7 .project-preview').parallax("50%", -0.1);*/

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

	new WOW().init();

});