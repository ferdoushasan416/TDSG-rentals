(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu ul");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
})


 // Accordion Scripts
    
        $('.accordion-title').eq(0).addClass('active');
        $('.accordion-content').eq(0).slideDown();

        $(".accordion-title").on('click', function (){
            
            var trigger = $(this);
            var hasClass = trigger.hasClass('active');

            $('.accordion-title').removeClass('active');
            $('.accordion-title').next().slideUp();
            
            if(hasClass) {
                trigger.removeClass('active');
                trigger.next().slideUp();
            }

            else {
                trigger.addClass('active');
                trigger.next().slideToggle();          
            }

        });


        $(document).ready(function(){
          $('.cars-slide-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
         
      });

     




/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();


})(jQuery);