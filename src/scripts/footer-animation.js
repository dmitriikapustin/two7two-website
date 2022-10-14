$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_footer_anim = new ScrollMagic.Controller({
        container: "body"
    })
    // var heaiding_anim_duration = 1000;
    var footer = document.getElementById('footer')

    var scene = new ScrollMagic.Scene({
            triggerElement: footer,
            triggerHook: 1,
            reverse: true
        })
        .offset(0)
        .setPin(footer)
        .addIndicators()
        .addTo(controller_footer_anim) 
        
})