$(document).ready(function () {
  // window.addEventListener('mousemove', cursor);

  $('.words-wrapped').each(function () {
    var words = $(this).text().split(/\s+/);
    var total = words.length;
    $(this).empty();
    for (index = 0; index < total; index++) {
      $(this).append($("<span /> ").addClass("myclass_" + index).addClass("anim-h").text(words[index]));
    }
  })
  // var mouseCursor = document.querySelector('.cursor')
  var spans = document.querySelectorAll('.words-wrapped span')

  console.log(spans);

  function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
    else if (event.detail) {(delta = -event.detail / 3);}

    handle(delta);
    if (event.preventDefault) {(event.preventDefault());}
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  window.onmousewheel = document.onmousewheel = wheel;

  // (function () {
  //   var scroll = new LocomotiveScroll({
  //     el: document.querySelector('#js-scroll'),
  //     lerp: 0.06,
  //     smooth: true,
  //   });
  // })();

  // const lscroll = new LocomotiveScroll({
  //   el: document.querySelector('#js-scroll'),
  //   smooth: true,
  //   lerp: 0.06,
  //   smooth: true,
  //   getSpeed: true,
  //   getDirection: true
  // })

  // function wheelDistance(e) {
  //   if (!e) {
  //       e = window.event;
  //   }
  //     let w = e.wheelDelta,
  //       d = e.detail;
  //     if (d) {
  //       return -d / 3; // Firefox;
  //     }

  //     // IE, Safari, Chrome & other browsers
  //     return w / 120;
  //   }

  //   // Adding event listeners for some element in DOM
  //   body.addEventListener("mousewheel", wheelDistance);
  //   body.addEventListener("DOMMouseScroll", wheelDistance);




  // if (body.addEventListener) {
  //   if ('onwheel' in document) {
  //     // IE9+, FF17+, Ch31+
  //     body.addEventListener("wheel", onWheel);
  //   } else if ('onmousewheel' in document) {
  //     // устаревший вариант события
  //     body.addEventListener("mousewheel", onWheel);
  //   } else {
  //     // Firefox < 17
  //     body.addEventListener("MozMousePixelScroll", onWheel);
  //   }
  // } else { // IE8-
  //   body.attachEvent("onmousewheel", onWheel);
  // }

  // function onWheel(e) {
  //   e = e || window.event;

  //   // wheelDelta не даёт возможность узнать количество пикселей
  //   var delta = e.deltaY || e.detail || e.wheelDelta;


  //   e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  // }




  // function cursor (e) {
  //   mouseCursor.style.top = e.pageY + 'px';
  //   mouseCursor.style.left = e.pageX + 'px'; 
  // }

  // spans.forEach(span => {
  //   span.addEventListener("mouseover", () => {
  //     mouseCursor.classList.add('span-grow')
  //     span.classList.add('hovered-span')
  //   })
  //   span.addEventListener("mouseleave", () => {
  //     mouseCursor.classList.remove('span-grow')
  //     span.classList.remove('hovered-span')
  //   })
  // }) 

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

  // $i.on("mouseenter",function(e){
  //     $c.addClass("custom-cursor-active-img");
  // });
  // $i.on("mouseleave",function(e){
  //   $c.removeClass("custom-cursor-active-img");
  // });        

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