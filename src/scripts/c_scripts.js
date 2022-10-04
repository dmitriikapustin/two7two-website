
$(document).ready(function() {
    // window.addEventListener('mousemove', cursor);

    $('.words-wrapped').each(function(){ 
        var words = $(this).text().split(/\s+/);
        var total = words.length;
        $(this).empty();
        for (index = 0; index < total; index ++){
          $(this).append($("<span /> ").addClass("myclass_" + index).addClass("anim-h").text(words[index]));
          }
        })
        // var mouseCursor = document.querySelector('.cursor')
        var spans = document.querySelectorAll('.words-wrapped span')
        
        console.log(spans)
        
        const parent = $('.parent');

        // import LocomotiveScroll from 'locomotive-scroll';

        // const lscroll = new LocomotiveScroll({
        //   el: parent, 
        //   smooth: true,
        //   lerp: 0.06
        // })

        // export {lscroll}
        
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
        
        $(window).on("mousemove",function(e){
          x = e.pageX;
          y = e.pageY;
          console.log(x,y);
          $c.css("top", y);
          $c.css("left", x);
        });
        
         $h.on("mouseenter",function(e){
            $c.addClass("custom-cursor-active");
        });
        
        
         $h.on("mouseleave",function(e){
          $c.removeClass("custom-cursor-active");
        });
        
        // $i.on("mouseenter",function(e){
        //     $c.addClass("custom-cursor-active-img");
        // });
        // $i.on("mouseleave",function(e){
        //   $c.removeClass("custom-cursor-active-img");
        // });        
        
        $(document).mousemove(function(e) {
          $('.cursor')
            .eq(0)
            .css({
              left: e.pageX,
              top: e.pageY,
              opacity: 1
            }); })

        $(window).scroll(function(){
          $('.cursor')
            .eq(0)
            .css({
              opacity: 0
            });
      });
  
});







