$(document).ready(function () {
    // LINES ANIMATION
    // if ($( window ).width() >= 801 ) {
        
    // }
    var duration = 800;
    var offset = -50;



    var controller_logo_animation = new ScrollMagic.Controller();

    var hide_letters_timeline = new TimelineMax()
        .to(".u", { x: '-100%' }, 0)
        .to(".u", 0.05, { opacity: '0' }, 0.4)
        .to(".n", { x: '-200%' }, 0)
        .to(".n", 0.05, { opacity: '0' }, 0.4)
        .to(".r", { x: '-400%' }, -0.1)
        .to(".r", 0.05, { opacity: '0' }, 0.3)
        .to(".e", { x: '-600%' }, -0.1)
        .to(".e", 0.05, { opacity: '0' }, 0.3)
        .to(".s", { x: '-700%' }, -0.1)
        .to(".s", 0.05, { opacity: '0' }, 0.3)
        .to(".h", { x: '-800%' }, -0.1)
        .to(".h", 0.05, { opacity: '0' }, 0.3)
        .to(".second-f", { x: '-375%' }, 0)
        .to(".ampersand", { x: '-270%' }, 0)
        .to(".text-change", 0.1, { x: '-150%', ease: Linear.easeNone }, 0.2)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        // duration: duration,
        reverse: true
    })
        .setTween(hide_letters_timeline)
        //.addIndicators()
        .addTo(controller_logo_animation)

    // var scene = new ScrollMagic.Scene({
    //     offset: offset,
    //     triggerElement: '.hero-title',
    //     triggerHook: 0,
    //     duration: duration,
    //     reverse: true
    // })
    //     .setClassToggle(".first-f", "f-1")
    //     .addTo(controller_logo_animation)

    // var scene = new ScrollMagic.Scene({
    //     offset: offset,
    //     triggerElement: '.hero-title',
    //     triggerHook: 0,
    //     duration: duration,
    //     reverse: true
    // })
    //     .setClassToggle(".ampersand", "amp")

    //     .addTo(controller_logo_animation)

    // var scene = new ScrollMagic.Scene({
    //     offset: offset,
    //     triggerElement: '.hero-title',
    //     triggerHook: 0,
    //     duration: duration,
    //     reverse: true
    // })
    //     .setClassToggle(".second-f", "f-2")
    //     .addTo(controller_logo_animation)

    // var scene = new ScrollMagic.Scene({
    //     offset: offset,
    //     triggerElement: '.hero-title',
    //     triggerHook: 0,
    //     duration: duration,
    //     reverse: true
    // })

    //     .setClassToggle(".text-change", "change")

    //     .addTo(controller_logo_animation)    
})