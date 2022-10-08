$(document).ready(function () {

  // #TASK Create new one 

  var $c = $("[data-custom-cursor]");
  var $h = $(".words-wrapped");
  // var $i = $("img");

  $(window).on("mousemove", function (e) {
    x = e.pageX;
    y = e.pageY;
    // console.log(x,y);
    $c.css("top", y);
    $c.css("left", x);
  });

  $h.on("mouseenter", function (e) {
    $c.addClass("custom-cursor-active");
  });

  $h.on("mouseleave", function (e) {
    $c.removeClass("custom-cursor-active");
  });

  $(document).mousemove(function (e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY,
        opacity: 1
      });
  })

  $(window).scroll(function () {
    $('.cursor')
      .eq(0)
      .css({
        opacity: 0
      });
  });

});