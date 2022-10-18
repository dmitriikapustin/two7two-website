$(document).ready(function () {
    // LINES ANIMATION

    var duration = 800;
    var offset = -50;



    var controller_logo_animation = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })
        .setClassToggle(".first-f", "f-1")
        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })
        .setClassToggle(".ampersand", "amp")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })
        .setClassToggle(".second-f", "f-2")
        .addTo(controller_logo_animation)


    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".u", "u-hide")

        .addTo(controller_logo_animation)


    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".n", "n-hide")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".r", "r-hide")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".e", "e-hide")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".s", "s-hide")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".h", "h-hide")

        .addTo(controller_logo_animation)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        duration: duration,
        reverse: true
    })

        .setClassToggle(".text-change", "change")

        .addTo(controller_logo_animation)    


    // TRANSLATE AND HIDE "U", "N"

    // hide_letters_before.each(function(letter_index) {
    //     // $(this).attr("transform", "translate3d(0,0,0)")
    //     var translateK = 10 * letter_index;
    //     var letters_before_animation_timeline = new TimelineMax()
    //     .to($(this), { x: -10 + translateK }, 0)
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: '.hero-title',
    //         triggerHook: 0,
    //         duration: 800,
    //         reverse: true
    //     })
    //     // .offset($(window).height())
    //     .setTween(letters_before_animation_timeline)
    //     .addIndicators()
    //     .addTo(controller_logo_animation)
    // })

    // TRANSLATE AND HIDE "R", "E", "S", "H"

    // hide_letters_after.each(function(letter_index) {
    //     var letters_after_animation_timeline = new TimelineMax()
    //     .to($(this), { transform: 'translate3d(-50px + 10 * ' + letter_index + 'px, 0, 0)' }, 0)
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: '.hero-title',
    //         triggerHook: 0,
    //         duration: 800,
    //         reverse: true
    //     })
    //     // .offset($(window).height())
    //     .setTween(letters_after_animation_timeline)
    //     .addIndicators()
    //     .addTo(controller_logo_animation)
    // })




})