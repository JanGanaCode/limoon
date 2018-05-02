// header swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
        delay: 3000,
      },
      speed: 2000,
  });

// projects swiper
var swiper = new Swiper('.swiper-container-projects', {
    slidesPerView: 4,
    spaceBetween: 50,
    
    loop: true,
    autoplay: {
        delay: 0,
      },
    freeMode: true, 
    speed: 7000,
    
  });