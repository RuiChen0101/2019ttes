/**
  * Template Name: Varsity
  * Version: 1.0
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS


  1. TOP SLIDER
  2. COUNTER
  3. MIXIT FILTER (FOR GALLERY)
  4. FANCYBOX (FOR PORTFOLIO POPUP VIEW)
  5. HOVER DROPDOWN MENU
  6. SCROLL TOP BUTTON


**/

jQuery(function($){

  /* ----------------------------------------------------------- */
  /*  1. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */

    jQuery('#mu-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      autoplay: true,
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  2. COUNTER
  /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  /* ----------------------------------------------------------- */
  /*  3. MIXIT FILTER (FOR GALLERY)
  /* ----------------------------------------------------------- */

    jQuery(function(){
      jQuery('#mixit-container').mixItUp();
    });

  /* ----------------------------------------------------------- */
  /*  4. FANCYBOX (FOR PORTFOLIO POPUP VIEW)
  /* ----------------------------------------------------------- */

    jQuery(document).ready(function() {
      jQuery(".fancybox").fancybox();
    });

  /* ----------------------------------------------------------- */
  /*  5. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */

  // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });


  /* ----------------------------------------------------------- */
  /*  6. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });

    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });


});
