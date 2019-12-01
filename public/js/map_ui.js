$(document).ready(function(){


	 $(".location_position").find('.location').click(function(){


	 	// $('.location_detail').removeClass('show');
	 	$(this).parent().siblings().find('.location_detail').removeClass('show')
	 	$(this).parent().find('.location_detail').toggleClass('show')

	 	$(this).parent().siblings().css('z-index', 100)
	 	$(this).parent().css('z-index', 5000)
	  });



});






