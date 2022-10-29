$(document).ready(function () {

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  console.log(getRandomArbitrary(0.5, 0.9))

  var controller_breaking_svg = new ScrollMagic.Controller();

  var rect_index = 0; // Не объявил переменную

  $(".breaking-five-svg g rect").each(function (rect_index) { // тут надо было заселектить нужную нам группу в свг
    $(this).addClass("rect-index-" + rect_index)
    $(this).parent().parent().parent().prepend('<div class="trigger-for-breaking-five-' + rect_index + ' trigger"></div>'); // ещё 2 парента, чтобы вынести вне svg 

    $(".rect-index-" + rect_index).each(function (index) { // не подходит так как ты делаешь each на какой то индекс, а индекс уже имеешь для каждого, рациональна замена цикла на for
        var directionX;
        var directionY;
        var randomDirectionX = Math.random();
        var randomDirectionY = Math.random();
        if (randomDirectionX > 0.5) {
          directionX = 1;
        } else {
          directionX = -1;
        }
        if (randomDirectionY > 0.5) {
          directionY = 1;
        } else {
          directionY = -1;
        }
        var randomRotate = Math.random()
        var speedX = getRandomArbitrary(0.5, 0.9);
        var speedY = getRandomArbitrary(0.5, 0.9);
        var tl = new TimelineMax();
        tl.to(this, 10000, { x: directionX * speedX * 300, y: directionY * speedY * 300, transform: "rotate(" + randomRotate * 100 + ")" });
        var scene = new ScrollMagic.Scene({
          offset: 0 + 4 * rect_index,
          triggerElement: '.trigger-for-breaking-five-' + rect_index,
          triggerHook: 0.5,
          duration: 130,
          reverse: true
        })
          .addIndicators()
          .setTween(tl)
          .addTo(controller_breaking_svg);
      });
  })

  // у g внутри svg надо было совсем убрать clip path

})