$(document).ready(function(){
    $('.carousel__inner').slick({
        //arrows: false,
        speed: 1500,
        // slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    // dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    cssEase: 'linear'
                }
            }
        ]
      });
  });