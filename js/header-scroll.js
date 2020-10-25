$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 100) {
     $('.header').addClass('headfix');
     $('.nav-logo').addClass('nav-logo-center');
    }
    else {
     $('.header').removeClass('headfix');
     $('.nav-logo').removeClass('nav-logo-center');
    }
   });