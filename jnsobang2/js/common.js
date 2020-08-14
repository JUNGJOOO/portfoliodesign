SlideTxt = ['적극행정 국민추천', '적극행정 플랫폼', '적극행정 이모저모', '범정부 통합자료실'];
var mySwiper = new Swiper('.main-slide', {
	loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          // return '<span class="' + className + '">' + (index + 1) + '</span>';
          return '<span class="' + className + '"><span class="pagination_txt">' + mainSlideTxt[index]+ '</span></span>';
        },
	},
	on: {
		init: function () {
			$('.slide_bg').addClass('ani');

			setTimeout(function(){
				$('.slogan1').addClass('ani');
			}, 1000)
			setTimeout(function(){
				$('.slogan2').addClass('ani');
			}, 2000)
			setTimeout(function(){
				$('.slogan3').addClass('ani');
			}, 3000)
			setTimeout(function(){
				$('.slogan4').addClass('ani');
			}, 4000)
			setTimeout(function(){
				$('.slogan5').addClass('ani');
			}, 5000)
		},
		// slideChangeTransitionStart: function () {
		// 	$('.slide_bg').removeClass('ani');
		// 	$('.main_visual_txt').removeClass('ani');
		// 	$('.slogan1').removeClass('ani');
		// 	$('.slogan2').removeClass('ani');
		// },
		// slideChangeTransitionEnd: function () {
		// 	$('.slide_bg').addClass('ani');
		// 	$('.main_visual_txt').addClass('ani');
			
		// 	setTimeout(function(){
		// 		$('.slogan1').addClass('ani');
		// 	}, 1000)
		// 	setTimeout(function(){
		// 		$('.slogan2').addClass('ani');
		// 	}, 2000)
		// },
	}
});
