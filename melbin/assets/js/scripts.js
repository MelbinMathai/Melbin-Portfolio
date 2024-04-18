/********************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT          ||||||||||||||||||||||||||||||||||
*********************************************************************************************




/*==============================================
        Smooth Scrolling for Navbar
==============================================*/

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 65)
        }, 2000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

})(jQuery); // End of use strict



/*==============================================
      Add class onclick for Navigation Menu
==============================================*/

$('.side_open').click(function() {
    var $this = $('.profile_sh, .profile_desc');
 
    if ($this.hasClass('open')) {
        $this.removeClass('open');
    }
    else {
        $this.addClass('open');
    }
});



/*==============================================
            Skill Progress bar
==============================================*/

var c = 0;
$(window).scroll(function() {

var oTop = $('#skills').offset().top - window.innerHeight;
  if (c == 0 && $(window).scrollTop() > oTop) {
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({width:jQuery(this).attr('data-percent') },3000); 
    });
    c = 1;
  }
});



/*==============================================
                    Portfolio
==============================================*/

$(function () {
    
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter' 
          },
          load: {
            filter: '.web_design'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    
    
  }); 


/*==============================================
        Smooth Scrolling for Navbar
==============================================*/

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000);
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 150
  });

})(jQuery);

/* End */


/*==============================================
              Window Scrollbar Custom
==============================================*/
$("body").niceScroll({
    cursorcolor:"#0B2230",
    cursorwidth:"8px",
    scrollspeed: 150
}); 




const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
      
    // On scroll 
    $(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('nav').addClass('nav-opacity');
    }
    else { 
      $('nav').removeClass('nav-opacity');
    }
  });

  // On click
  $(".burger").click(function(){
      $('.nav_menu').toggleClass('active');
  });

    
    // Toggle Nav
    burger.addEventListener('click', () =>{
      nav.classList.toggle('nav-activ');
      
      // Burger Animation
      burger.classList.toggle('toggle')
      
  });

    
  }

  navSlide();