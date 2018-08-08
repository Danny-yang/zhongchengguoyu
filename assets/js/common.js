$('.header').mouseenter(function(e){
	$(this).addClass("over");
});

$('.header').mouseleave(function(e){
	$(this).removeClass("over");
	 $('.nav-content.on').removeClass('on');
	 $('.header .navlist li.on').removeClass('on');
});

$('.header .navlist li').mouseenter(function(e){				
	$(this).addClass("on").siblings().removeClass('on');
	var index = $(this).index();
	var $cont = $('.nav-content').eq(index);
	$('.nav-content-wrap .nav-content').removeClass('on');
	
	if (!$cont.hasClass('empty')) {
		$('.nav-content').eq(index).addClass('on');
	}
});