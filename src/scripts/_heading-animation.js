$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_heading_anim = new ScrollMagic.Controller({container: "body"})
    var heaiding_anim_duration = 2000;

    // FROM ownex
    // var scene = new ScrollMagic.Scene({triggerElement: ".block_7", duration: 1200})
    //     .offset($(window).height() * 0.5 + 400)
    //     .setTween(".7_animated_heading_item", { scale: 0.25 })
    //     .addTo(controller_heading_anim);
    // var scene = new ScrollMagic.Scene({triggerElement: ".block_7", duration: 800})
    //     .offset($(window).height() * 0.5 + 800)
    //     .setPin('.7_animated_heading_item')
    //     .addIndicators()
    //     .addTo(controller_heading_anim);

    // Set timeline with zero delay after parameters
    var heaiding_animation_timeline = new TimelineMax()
        .to(".animated_heading_item", { scale: '.25'}, 0)


    
    // ScrollMagic animation for circles timeline
    var scene = new ScrollMagic.Scene({
            triggerElement: '#animated_heading',
            duration: heaiding_anim_duration,
            reverse: true
        })
        .offset($(window).height() * 0.5 + 400)
        // .setPin(".animated_heading_item")
        .setTween(heaiding_anim_duration)
        // .setClassToggle('.animated_heading', 'activePin')
        .addTo(controller_heading_anim);

    var scene = new ScrollMagic.Scene({
            triggerElement: '#animated_heading',
            duration: 500,
            reverse: true
        })
        .offset($(window).height() * 0.5 + 800)
        .setPin( '#animated_heading_item' )
        // .setClassToggle('.animated_heading', 'activePin')
        .addIndicators()
        .addTo(controller_heading_anim)

    // var controller_heading_anim_pin = new ScrollMagic.Controller({
    //     container: "body"
    // })

    // var scene = new ScrollMagic.Scene({
    //         triggerElement: pinned_block,
    //         duration: heaiding_anim_duration,
    //         reverse: true
    //     })
    //     .offset($(window).height() * 0.5)
    //     .setPin(pinned_block)
    //     .addIndicators()
    //     .addTo(controller_heading_anim_pin)        
        
})