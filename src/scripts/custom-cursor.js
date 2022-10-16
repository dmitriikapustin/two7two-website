$(document).ready(function () {

  // #TASK Create new one 

  var $c = $(".cursor-container");
  var body = $('body')
  // var $h = $(".animated_heading_item");

  var lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code
      $(window).scroll(function () {
        $('.cursor.active')
          .eq(0)
          // .css({
          //   transform: 'translate3d(0, -100%, 0)'
          // });
      });
    } else {
      // upscroll code
      $(window).scroll(function () {
        $('.cursor.active')
          .eq(0)
          // .css({
          //   transform: 'translate3d(0, 100%, 0)'
          // });
      });
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);

  // var $i = $("img");

  $(window).on("mousemove", function (e) {
    x = e.pageX;
    y = e.pageY;
    // console.log(x,y);
    $c.css("top", y);
    $c.css("left", x);
  });

  // $h.on("mouseenter", function (e) {
  //   $c.addClass("custom-cursor-active");
  // });

  // $h.on("mouseleave", function (e) {
  //   $c.removeClass("custom-cursor-active");
  // });

  // $(document).mousemove(function (e) {
  //   $('.cursor.active')
  //     .eq(0)
  //     .css({
  //       left: e.pageX,
  //       top: e.pageY,
  //       opacity: 1
  //     });
  // })


});