$(function() {
  // The DOM is ready!
  // The rest of the code goes here

  /*Do smth that doesn't require DOM to be ready*/

  var textosAnclas = {
    bici:
      "Lo reconocemos: para <a href='#que' class='c-link'>nosotros</a> es una <a href='#clientes' class='c-link'>suerte</a> tener (casi) <a href='#cosas' class='c-link'>todo</a> a tiro de piedra.",
    mundial:
      "Somos esas <a href='#que' class='c-link'>personas</a> que viven en una ciudad (relativamente)  pequeña, pero <a href='#servicios' class='c-link'>trabajan</a> a nivel <a href='#contacto' class='c-link'>mundial</a>.",
    diversos:
      "<a href='#que' class='c-link'>Somos</a> tan diversos como un <a href='#servicios' class='c-link'>patchwork</a> (o más). Y <a href='#cosas' class='c-link'>orgullosos</a> de ello.",
    okupas:
      "Biko es la suma de (muchas) <a href='#que' class='c-link'>personas</a> y otras tantas <a href='#cosas' class='c-link'>cosas</a>. Larga <a href='#clientes' class='c-link'>vida</a> a los que un día se colaron.",
    transparentes:
      "<a href='#que' class='c-link'>Somos</a> (muy) transparentes. Si hay <a href='#cosas' class='c-link'>otra vía</a> mejor (o más barata), te lo <a href='#servicios' class='c-link'>contamos</a>.",
    openbiko:
      "El Open de <a href='#que' class='c-link'>Biko</a> es un espacio (abierto y gratuito) en el que <a href='#cosas' class='c-link'>contamos</a> qué se nos pasa por la <a href='#servicios' class='c-link'>cabeza</a>.",
  };
  var setTextoAncla = function() {
    var url = $(location).attr('href');
    if (url.indexOf('#') > -1) {
      var str = url.split('#');
      var ancla = str[1];
    }
    if (textosAnclas[ancla] != 'undefined') {
      $('.js-hero').html(textosAnclas[ancla]);
    }
  };
  setTextoAncla();
  $(window).on('hashchange', setTextoAncla);

  $(document)
    .euCookieLawPopup()
    .init({
      cookiePolicyUrl: 'http://www.biko2.com/',
      popupPosition: 'bottomright',
      colorStyle: 'default',
      compactStyle: false,
      popupTitle: '¡Una de galletas!',
      popupText:
        'Utilizamos cookies propias y de terceros, analíticas y publicitarias para elaboración de perfiles basados en la navegación del usuario.',
      buttonContinueTitle: 'Acepto',
      buttonLearnmoreTitle: 'Más información',
      buttonLearnmoreOpenInNewWindow: true,
      agreementExpiresInDays: 30,
      autoAcceptCookiePolicy: false,
      htmlMarkup: $('.c-cookie'),
    });

  function setAcceptanceCookie() {
    //set a cookie to express that the user has opted-in to tracking, for future pageviews
    //if (!Drupal.eu_cookie_compliance) return;
    //Drupal.eu_cookie_compliance.setStatus(1);
    //Drupal.eu_cookie_compliance.changeStatus(2);
  }

  var cursorChangeScreenOffset = 700;

  var verificarScrollLeft = function() {
    var currentScrollLeft = $(
      '#porfolio .c-porfolio-carrusel__container',
    ).scrollLeft();
    if (currentScrollLeft != 0) {
      $('#porfolio .c-porfolio-carrusel__left').addClass(
        'd-lg-block d-xl-block d-xxl-block',
      );
    } else {
      $('#porfolio .c-porfolio-carrusel__left').removeClass(
        'd-lg-block d-xl-block d-xxl-block',
      );
    }
  };

  $('.js-scroll-right').click(function(ev) {
    ev.preventDefault();
    $('#porfolio .c-porfolio-carrusel__container').scrollLeft(
      $('#porfolio .c-porfolio-carrusel__container').scrollLeft() +
        cursorChangeScreenOffset,
    );
    verificarScrollLeft();
  });

  $('.js-scroll-left').click(function(ev) {
    ev.preventDefault();
    $('#porfolio .c-porfolio-carrusel__container').scrollLeft(
      $('#porfolio .c-porfolio-carrusel__container').scrollLeft() -
        cursorChangeScreenOffset,
    );
    verificarScrollLeft();
  });

  $('.js-show-cookies').click(function(ev) {
    ev.preventDefault();
    $('#cookies').show();
  });
});

//MENU MOBILE
$(document).ready(function() {
  $('.navbar-toggler.collapsed').click(function() {
    $('body').toggleClass('overflow-hidden');
  });
  $('.navbar-toggler-icon').click(function() {
    $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon--cerrar');
  });
  $('.nav-link').click(function() {
    $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon--cerrar');
  });

  $('#navbarNav')
    .find('.js-menu-collapse')
    .click(function() {
      $('.navbar-collapse').collapse('hide');
      $('body').removeClass('overflow-hidden');
    });
});

// FOOTER FIXED
$(document).ready(function() {
  siteFooter();

  $(window).resize(function() {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $('#main-wrapper');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('#footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    siteContent.css({
      'margin-bottom': siteFooterHeight + 50,
    });
  }
});

// bidasoa
$(document).ready(function() {
  $('#action-gift').hover(function() {
    $('.insights-gif__icon').toggleClass('insights-gif__anima');
  });
});

// NAVBAR SCROLL
// $(window).scroll(function(e) {
//  var scroll = $(window).scrollTop();
//  if (scroll >= 150) {
//      $('.c-header').addClass("c-header--scroll");
//  } else {
//      $('.c-header').removeClass("c-header--scroll");
//  }
// });

// Biko Insights - Open modal
$(function() {
  $('#js-open-insights-modal').on('click', function() {
    $('#p-insights-modal').show();
    $('#p-insights-modal').dialog();
  });
});
