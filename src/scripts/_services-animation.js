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
        triggerElement: '.container-lines-1',
        duration: 2000,
    })
    .offset($(window).height() - 600)
    .setClassToggle(".line-1", "ready")
    .addTo(controller_lines_animation)
    .reverse(false)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.container-lines-2',
        duration: 2000,
    })
    .offset($(window).height() - 600)
    .setClassToggle(".line-2", "ready")
    .addTo(controller_lines_animation)
    .reverse(false)
})