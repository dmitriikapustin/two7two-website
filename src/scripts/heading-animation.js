$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_heading_anim = new ScrollMagic.Controller({container: "body"})
    var heaiding_anim_duration = 2000;


    // ScrollMagic animation for circles timeline
    var scene = new ScrollMagic.Scene({ triggerElement: '#block_7', duration: heaiding_anim_duration, reverse: true })
        .offset($(window).height() * 1 + 400)
        .setTween(".animated_heading_item", { scale: 0.25 } )
        .addIndicators()
        .addTo(controller_heading_anim);

    var scene = new ScrollMagic.Scene({ triggerElement: '#block_7', duration: 700, reverse: true })
        .offset($(window).height() * 1 + 650)
        .setPin( '#block_7' )
        .addIndicators()
        .addTo(controller_heading_anim); 
        
})