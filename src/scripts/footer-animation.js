$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_footer_anim = new ScrollMagic.Controller({
        container: "body"
    })
    var footer = document.getElementById("footer");
    var prev_block = document.getElementById("big-text");

    var scene = new ScrollMagic.Scene({
            triggerElement: footer,
            triggerHook: 1,
            reverse: true
        })
        .offset($(window).height() / 2)
        .setPin(footer)
        .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"})
        .addTo(controller_footer_anim) 
        
})