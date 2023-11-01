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
          $('.slider-active').slick({
            prevArrow: '<button type="button" class="slick-prev"><svg width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="M21 11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2Z" style="fill:currentColor"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg  width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="m21.71 11.29-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H3a1 1 0 0 0 0 2h15.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Z" style="fill:currentColor"/></svg></button>',
            autoplay:false,
            loop:true,
            dots:true,
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