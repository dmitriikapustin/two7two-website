// anime({
//   targets: '.mango',
//   keyframes: [
//     {translateX: -1, translateY: -10},
//     {translateX: 0, translateY: -20},
//     {translateX: 2.2, translateY: -30},
//     {translateX: 4, translateY: -40},
//     {translateX: 6.6, translateY: -50},
//     {translateX: 10.35, translateY: -60},
//     {translateX: 12.7, translateY: -66},
//     {translateX: 17.6, translateY: -60},
//     {translateX: 23.6, translateY: -50},    
//     {translateX: 24.4, translateY: -40},
//     {translateX: 24.33, translateY: -30},
//     {translateX: 23.86, translateY: -20},
//     {translateX: 23.15, translateY: -10},
//     {translateX: 22.6, translateY: 0},
//     {translateX: 22, translateY: 10},    
//     {translateX: 20.6, translateY: 20},
//     {translateX: 17.9, translateY: 30},
//     {translateX: 11.5, translateY: 35},
//     {translateX: 6.9, translateY: 40},
//     {translateX: 1.1, translateY: 35},    
//     {translateX: -3.6, translateY: 30},
//     {translateX: -1.4, translateY: 20},
//     {translateX: 0, translateY: 10},
//     {translateX: 0, translateY: 00},

//   ],
//   duration: 10000,
//   easing: 'linear',
//   loop: true
// });


// // jQuery(document).ready(function() {
// //   // CASES CONTENT ANIMATION
// //   $('.animated-block').addClass("a-hidden").viewportChecker({
// //       classToAdd: 'a-visible',
// //       offset: '30%',
// //       repeat: false,
// //       invertBottomOffset: true,
// //       callbackFunction: function(){
// //           anime({
// //               targets: '.animated-block.a-visible',
// //               opacity: [-1, 1],
// //               duration: 690,
// //               // offset: '10%',
// //               easing: 'easeInCubic',
// //               delay: (el, i) => 100 * i
// //             });
// //             // anime({
// //             // targets: '.animated-block.only-mobile.a-visible',
// //             // opacity: [-1, 1],
// //             // duration: 690,
// //             // easing: 'easeInCubic',
// //             // invertBottomOffset: true,
// //             // delay: (el, i) => 10 * i
// //             // });

// //           $('.animated-block').removeClass('a-visible');
// //       }
// //   });
// //   $('.anime').addClass("a-hidden").viewportChecker({
// //     classToAdd: 'a-visible',
// //     offset: '5%',
// //     repeat: false,
// //     callbackFunction: function(){
// //         anime({
// //             targets: '.anime-1.a-visible',
// //             opacity: [-1, 1],
// //             duration: 990,
// //             easing: 'easeInCubic',
// //             delay: (el, i) => 130 * i
// //         });
// //         anime({
// //           targets: '.anime-2.a-visible',
// //           opacity: [-1, 1],
// //           duration: 560,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 120 * i
// //         });
// //         anime({
// //           targets: '.anime-3.a-visible',
// //           opacity: [-1, 1],
// //           duration: 840,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 140 * i
// //         });
// //         anime({
// //           targets: '.anime-4.a-visible',
// //           opacity: [-1, 1],
// //           duration: 915,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 105 * i
// //         });
        
// //         anime({
// //           targets: '.anime-5.a-visible',
// //           opacity: [-1, 1],
// //           duration: 500,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 90 * i
// //         });
// //         anime({
// //           targets: '.anime-6.a-visible',
// //           opacity: [-1, 1],
// //           duration: 600,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 85 * i
// //         });
// //         anime({
// //           targets: '.anime-7.a-visible',
// //           opacity: [-1, 1],
// //           duration: 920,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 165 * i
// //         });
// //         anime({
// //           targets: '.anime-8.a-visible',
// //           opacity: [-1, 1],
// //           duration: 820,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 135 * i
// //         });
// //         anime({
// //           targets: '.anime-9.a-visible',
// //           opacity: [-1, 1],
// //           duration: 540,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 140 * i
// //         });
// //         anime({
// //           targets: '.anime-10.a-visible',
// //           opacity: [-1, 1],
// //           duration: 640,
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 170 * i
// //         });
// //         anime({
// //           targets: '.anime-11.a-visible',
// //           opacity: [-1, 1],
// //           duration: 480,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 185 * i
// //         });
// //         anime({
// //           targets: '.anime-12.a-visible',
// //           opacity: [-1, 1],
// //           duration: 550,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 100 * i
// //         });
// //         anime({
// //           targets: '.anime-13.a-visible',
// //           opacity: [-1, 1],
// //           duration: 860,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 70 * i
// //         });
// //         anime({
// //           targets: '.anime-14.a-visible',
// //           opacity: [-1, 1],
// //           duration: 730,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 60 * i
// //         });
// //         anime({
// //           targets: '.anime-15.a-visible',
// //           opacity: [-1, 1],
// //           duration: 900,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 90 * i
// //         });
// //         anime({
// //           targets: '.anime-16.a-visible',
// //           opacity: [-1, 1],
// //           duration: 570,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 100 * i
// //         });
// //         anime({
// //           targets: '.anime-17.a-visible',
// //           opacity: [-1, 1],
// //           duration: 600,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 110 * i
// //         });
// //         anime({
// //           targets: '.anime-18.a-visible',
// //           opacity: [-1, 1],
// //           duration: 670,
// //           easing: 'easeInCubic',
// //           invertBottomOffset: true,
// //           delay: (el, i) => 125 * i
// //         });

// //         $('.anime').removeClass('a-visible');
// //     }
// // });
// //   $('.animated-block-mobile').addClass("a-hidden").viewportChecker({
// //   classToAdd: 'a-visible',
// //   offset: '15%',
// //   repeat: false,
// //   invertBottomOffset: true,
// //   callbackFunction: function(){
// //       anime({
// //           targets: '.animated-block-mobile.a-visible',
// //           opacity: [-1, 1],
// //           duration: 290,
// //           // offset: '10%',
// //           easing: 'easeInCubic',
// //           delay: (el, i) => 100 * i
// //         });
// //         // anime({
// //         // targets: '.animated-block.only-mobile.a-visible',
// //         // opacity: [-1, 1],
// //         // duration: 690,
// //         // easing: 'easeInCubic',
// //         // invertBottomOffset: true,
// //         // delay: (el, i) => 10 * i
// //         // });

// //       $('.animated-block-mobile').removeClass('a-visible');
// //   }
// // });
// //   // $('.animated-flavours').wrap('<span class="f-a"></span>')

// // });


// // function moveAnimate(element, newParent){
// //   //Allow passing in either a jQuery object or selector
// //   element = $(element);
// //   newParent= $(newParent);

// //   var oldOffset = element.offset();
// //   element.appendTo(newParent);
// //   var newOffset = element.offset();

// //   var temp = element.clone().appendTo('body');
// //   temp.css({
// //       'position': 'absolute',
// //       'left': oldOffset.left,
// //       'top': oldOffset.top,
// //       'z-index': 1000
// //   });
// //   element.hide();
// //   temp.animate({'top': newOffset.top, 'left': newOffset.left}, 'slow', function(){
// //      element.show();
// //      temp.remove();
// //   });
// // } 

// // // moveAnimate($('.first'), $('.second'))