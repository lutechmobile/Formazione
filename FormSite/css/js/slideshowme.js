$(document).ready(function(){
	
	var lengthLi=$('ul.slideMe li').length;
	var posLi=0;
	var indexLi=0;
	
	for (var i = 0; i < lengthLi; i++) {
	
		
		
		
		$('ul.slideMe li').eq(i).attr('data-indexLi', i);
		
		
		

	}
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index = $('.circle').index(this);
		
		$('ul.slideMe').attr('data-index', index).css("left",index*(-100)+"%");
	});

});