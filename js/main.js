(function ($) {
"use strict";

//niceSelect for form making
$('select').niceSelect();


//Slider Active

function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'>PREV</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>NEXT</button>",
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  });

  //magnificPopup on portfolio area
  $('.popup-img').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
      }
    // other options
  });

  //Counter-Up

  $('.counter').counterUp({
    delay: 10,
    time: 1000
    });

    //blog Area -News

    $('.blog-active').slick({
        dots: true,
        infinite: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'>PREV</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>NEXT</button>",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

//Textimonial Slider
      $('.testimonial-active').slick({
        dots: true,
        infinite: false,
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'>PREV</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>NEXT</button>",
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

// brand-Active Slider
$('.brand-active').slick({
  dots: false,
  infinite: false,
  arrows: false,
  prevArrow: "<button type='button' class='slick-prev pull-left'>PREV</button>",
  nextArrow: "<button type='button' class='slick-next pull-right'>NEXT</button>",
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

})(jQuery);