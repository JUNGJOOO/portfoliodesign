


// window.onload = function() {

//     alert("화면처음");
//     $(".visual_left").animate({
//         border: '2px solid blue'
//         // height: '+=150px',
//         // width: '+=150px'
//       });
// };


// setTimeout(function() {

//   alert("화면처음");

// }, 3000);




var mySwiper = new Swiper('.visual_left', {
	loop: true,
	on: {
		init: function () {
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
	}
});