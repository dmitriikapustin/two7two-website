$(document).ready(function () {
    $(function(){
        var swiper = new Swiper(".more-cases-Swiper", {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            speed: 2000,
            loopedSlides: 8,
            autoplay: {
                delay: 25000,
                disableOnInteraction: false
            }
        });
    });    
})  