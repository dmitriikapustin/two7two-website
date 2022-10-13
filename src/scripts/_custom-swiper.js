var interleaveOffset = 0.5;
const slidesNl = document.querySelectorAll(".swiper-slide")
const slidesArr = Array.from(slidesNl);
console.log(slidesArr)

$(document).ready(function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // speed: 300,
        spaceBetween: 150,
        loop: true,
        keyboard: true,
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        effect: "creative",
        creativeEffect: {
          perspective: true,
          limitProgress: 6,
          prev: {
            translate: ["-130%", "30%", 0],
            rotate: [0, 0, -13],
            origin: "bottom"
          },
          next: {
            translate: ["130%", "30%", 0],
            rotate: [0, 0, 13],
            origin: "bottom"
          }
        }
        //freeMode: {
            // enabled: true,
            // sticky: true,
            // momentumBounce: false
        //},
        // effect: 'creative',
        
        // on: {
        //     function (slidesArr) {
                
        //     }
        // }
        // creativeEffect: {
        //   prev: {
        //     // will set `translateZ(-400px)` on previous slides
        //     translate: [-700, 0, 0],
        //     rotate: [0, 0, -15],
        //   },
        //   next: {
        //     // will set `translateX(100%)` on next slides
        //     translate: [700, 0, 0],
        //     rotate: [0, 0, 15],
        //   },
        // }, 
    //     on: {
    //         progress: function() {
    //           var swiper = this;
    //           for (var i = 0; i < swiper.slides.length; i++) {
    //             var slideProgress = swiper.slides[i].progress;
    //             var innerOffset = swiper.width * interleaveOffset;
    //             var innerTranslate = slideProgress * innerOffset;
    //             swiper.slides[i].querySelector(".swiper-slide").style.transform =
    //             "translate3d(" + innerTranslate + "px, 0, 0)";
    //         }      
    //     }
    // },
        // myEffect: {
        //     setTranslate: function() {
        //         // your actual animation code goes here
        //     },
        //     setTransition: function( duration ) {
        //         // duration is between 0 and max speed (300 is default)
        //         // but you can change it in the config object below
        //         // is called when your swiping starts and ends
        //     }
        // }
        // effect: 'myEffect',
        // // virtualTranslate: true,
        // on: {
        //     progress(progress) {
        //       const swiper = this;
        //       if (swiper.params.effect !== "myEffect") return;
        //       that.progress(swiper, progress);
        //     },
        //     setTransition(transition) {
        //       const swiper = this;
        //       if (swiper.params.effect !== "myEffect") return;
        //       that.setTransition(swiper, transition);
        //     },
        //     setTranslate(translate) {
        //       const swiper = this;
        //       if (swiper.params.effect !== "myEffect") return;
        //       that.setTranslate(swiper, translate);
        //     }
        //   }
    });
    if (swiper.slideChange) {
    slidesArr.map((slide) => {
        if (slide.classList.contains("swiper-slide-next")) {
            slide.classList.add("slide-next")
        }
    })
    }
})    