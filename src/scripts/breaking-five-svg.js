// $(document).ready(function () {
//   function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   console.log(getRandomArbitrary(0.5, 0.9))

//   var controller_breaking_svg = new ScrollMagic.Controller();

//   $(".breaking-five-svg rect").each(function (rect_index) {
//     $(this).addClass("rect-index-" + rect_index)
//     $(this).parent().prepend('<div class="trigger-for-breaking-five-' + rect_index + ' trigger"></div>');
//   })


//   $(".rect-index-" + rect_index).each(function (index) {
//     var directionX;
//     var directionY;
//     var randomDirectionX = Math.random();
//     var randomDirectionY = Math.random();
//     if (randomDirectionX > 0.5) {
//       directionX = 1;
//     } else {
//       directionX = -1;
//     }
//     if (randomDirectionY > 0.5) {
//       directionY = 1;
//     } else {
//       directionY = -1;
//     }
//     var randomRotate = Math.random()
//     var speedX = getRandomArbitrary(0.5, 0.9);
//     var speedY = getRandomArbitrary(0.5, 0.9);
//     var tl = new TimelineMax();
//     tl.to(this, 10000, { x: directionX * speedX * 300, y: directionY * speedY * 300, transform: "rotate(" + randomRotate * 100 + ")" });
//     var scene = new ScrollMagic.Scene({
//       offset: 0 + 4 * index,
//       triggerElement: '.trigger-for-breaking-five-' + rect_index,
//       triggerHook: 0.5,
//       duration: 130,
//       reverse: true
//     })
//       .offset(0)
//       .addIndicators()
//       .setTween(tl)
//       .addTo(controller_breaking_svg);
//   })

// })