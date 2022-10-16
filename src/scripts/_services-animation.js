$(document).ready(function () {
    // LINES ANIMATION



    var controller_lines_animation = new ScrollMagic.Controller();
    var text_anim_duration = 4800;


    // Set timeline with zero delay after parameters
    // var text_animation_timeline_1 = new TimelineMax()
    //     .to(".line-1", {width: '100%'}, 0)

    // var text_animation_timeline_2 = new TimelineMax()
    //     .to(".line-2", {width: '100%'}, 0)


    // ScrollMagic animation for texts timeline
    var scene = new ScrollMagic.Scene({
        triggerElement: '.container-lines:nth-child(1)',
        // duration: 200,
    })
    .offset($(window).height() - 400)
    .setClassToggle(".line-1", "ready")
    .addIndicators()
    .addTo(controller_lines_animation)
    scene.removeClassToggle(".line-1", "ready");

    var scene = new ScrollMagic.Scene({
        triggerElement: '.container-lines:nth-child(2)',
        // duration: 200,
    })
    .offset($(window).height() - 400)
    .setClassToggle(".line-2", "ready")
    .addTo(controller_lines_animation)
    scene.removeClassToggle(".line-2", "ready");
})