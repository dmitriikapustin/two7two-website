var controller_p_animation = new ScrollMagic.Controller();

console.log($(".animated-paragraph span"))

$(".ov-hidden span").each(function(index) {
    var tl = new TimelineMax();
    tl.to(this, 100000 , {y: 0});

    var scene = new ScrollMagic.Scene({
        offset: 0 + 15 * index,
        triggerElement: ".animated-paragraph",
        triggerHook: 0.7,
        duration: 69,
        reverse: true
    })
    .setTween(tl)
    .addTo(controller_p_animation);
});
