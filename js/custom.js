$(document).ready(function () {
    if($('.main_slider').length){
		$('.main_slider').bxSlider({
			speed:1000,
            mode: "fade",
			auto: true,
            autoHover: true,
			onSlideAfter: function(){
				$(".ct_banner_caption h4").addClass("animated fadeInDown");
				$(".ct_banner_caption span").addClass("animated fadeInDown");
				$(".ct_banner_caption h2").addClass("animated fadeInDown");
				$(".ct_banner_caption p").addClass("animated fadeInDown");
				$(".ct_banner_caption a").addClass("animated fadeInDown");
			},
			onSlideBefore: function(){
				$(".ct_banner_caption h4").removeClass("animated fadeInDown");
				$(".ct_banner_caption span").removeClass("animated fadeInDown");
				$(".ct_banner_caption h2").removeClass("animated fadeInDown");
				$(".ct_banner_caption p").removeClass("animated fadeInDown");
				$(".ct_banner_caption a").removeClass("animated fadeInDown");
			}
		});
	}

    if($('.courses_subject_carousel').length){
		$('.courses_subject_carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				480:{items:2},
				640:{items:3},
				760:{items:4},
				1000:{items:4},
				1200:{items:6},
				1600:{items:6}
			}
		})
	}
	$("#lang-zh").click(function () {
		console.log("中文")
	})
	$("#lang-ja").click(function () {
		console.log("日文")
	})
})