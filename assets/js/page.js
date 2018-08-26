var query = location.search.substr(1);

if (query) {
	$('.side-nav-item.active').removeClass('active');
	$('.side-nav-item.' + query).addClass('active');
	$('.side-nav-content.active').removeClass('active');
	$('.side-nav-content.' + query).addClass('active');
}

$('.side-nav-item').on('click', function(e) {
	$('.side-nav-item').removeClass('active');
	$(this).addClass('active');
	
	var index = $(this).index();
	$('.side-nav-conts .side-nav-content').removeClass('active').eq(index).addClass('active');
});

$('.sub-nav-item').on('click', function(e) {
	$('.sub-nav-item').removeClass('active');
	$(this).addClass('active');

	var index = $(this).index();
	var pIndex = $(this).parent().parent().index();
	var navCont = $('.side-nav-conts .side-nav-content').eq(pIndex);

	navCont.find('.side-nav-sub-content').removeClass('active').eq(index).addClass('active');
});