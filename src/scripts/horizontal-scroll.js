$(document).ready(function () {

    var controller_h_scroll = new ScrollMagic.Controller({container: "body"})
    // var h_scroll_duration = 2000;

        // BLOCK 16 going IN and PIN
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_6", duration: 200})
    //     .offset(-100)
    //     .setTween(".block_6 .section-horizontal-scroll", {opacity: 1, y: 0})
    //     .addTo(controller_h_scroll);
    var scene = new ScrollMagic.Scene({triggerElement: ".block_6", duration: 1000})
        .setTween(".block_6 .section-horizontal-scroll", {y: 0})
        .addTo(controller_h_scroll);
    var scene = new ScrollMagic.Scene({triggerElement: ".block_6", duration: 1000})
        .offset( $(window).height() / 2)
        .addIndicators()
        .setPin(".block_6")
        .addTo(controller_h_scroll);

        // BLOCK 16 INNER ANIMATION
    var scene = new ScrollMagic.Scene({triggerElement: ".block_6", duration: 1200})
        .offset($(window).height() / 2)
        .setTween(".section-horizontal-scroll", {x: -1000})
        .addIndicators()
        .addTo(controller_h_scroll);
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_6", duration: 150})
    //     .offset(-200)
    //     .setTween(".horizontal", {y: 80})
    //     .addTo(controller_h_scroll);
})


    //     // BLOCK 16 going IN and PIN
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 200})
    //     .setTween(".block-16 .row", {opacity: 1, y: 0})
    //     .addTo(ctrl);
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 1000})
    //     .offset( $(window).height() / 2.2)
    //     .setPin(".block-16 .row")
    //     .addTo(ctrl);

    //     // BLOCK 16 INNER ANIMATION
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 800})
    //     .offset(150)
    //     .setTween(".horizontal", {x: -2100})
    //     .addTo(ctrl);
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 150})
    //     .offset(200)
    //     .setTween(".horizontal", {y: 80})
    //     .addTo(ctrl);