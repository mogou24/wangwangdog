
  /* AOS */
  AOS.init();

  $(function(){
    AOS.init({
    mirror: true,
    duration: 800,
    delay: 5000,
    anchorPlacement:"center-bottom",
    easing: "ease-in-sine",
    disable: window.innerWidth <500
   });
 })

 new WOW().init();

//lilty
// Bind as an event handler
$(document).on('click', '[data-lightbox]', lity);

//滑鼠換圖

