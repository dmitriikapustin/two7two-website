$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_horizontal_scroll = new ScrollMagic.Controller();
    var text_anim_duration = 4800;


    // Set timeline with zero delay after parameters
    var text_h_animation_timeline = new TimelineMax()
        .to(".section-horizontal-scroll", {left: '-50%'}, 0)
    // var text_h_animation_tween = TweenMax.to(".section-horizontal-scroll", 0.5, {left: '-100%'});


    // ScrollMagic animation for text timeline
    var scene = new ScrollMagic.Scene({
        triggerElement: '.section-horizontal-scroll',
        duration: text_anim_duration,
        reverse: true
    })
    .offset($(window).height() * 0.5 - 680)
            // .addIndicators()
    .setTween(text_h_animation_timeline)
    .addTo(controller_horizontal_scroll)

    var controller_horizontal_scroll_pin = new ScrollMagic.Controller();
    var text_anim_duration = 4800;


    // Set timeline with zero delay after parameters


    // ScrollMagic animation for text timeline
    var scene = new ScrollMagic.Scene({
        triggerElement: '.section-horizontal-scroll',
        duration: text_anim_duration,
        reverse: true
    })
    .setPin('html')
    .offset($(window).height() * 0.5 - 680)
    .addIndicators()
    .addTo(controller_horizontal_scroll_pin)


    // var controller_horizontal_scroll_pin = new ScrollMagic.Controller();
    // var text_anim_duration = 4800;


    // // Set timeline with zero delay after parameters
    // var text_h_pin_animation_timeline = new TimelineMax()
    //     .to(".section-horizontal-scroll", {left: '-100%'}, 0)

    // // ScrollMagic animation for text timeline
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '.section-horizontal-scroll',
    //     duration: text_anim_duration,
    //     reverse: true
    // })
    // .offset($(window).height() * 0.5 - 680)
    // .setPin(text_h_pin_animation_timeline)
    // .addTo(controller_horizontal_scroll_pin)
})
