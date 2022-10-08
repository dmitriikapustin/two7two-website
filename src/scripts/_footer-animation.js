$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_footer_anim = new ScrollMagic.Controller({
        container: "body"
    })
    // var heaiding_anim_duration = 1000;
    var footer = document.getElementById('block_8')



    var scene = new ScrollMagic.Scene({
            triggerElement: footer,
            triggerHook: 1,
            reverse: true
        })
        .offset($(window).height())
        // .setPin(".block_6", {pushFollowers: true})
        .setPin(footer)
        // .addIndicators()
        .addTo(controller_footer_anim)


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