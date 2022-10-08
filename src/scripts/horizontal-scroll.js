$(document).ready(function () {


        // BLOCK 16 going IN and PIN
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 200})
        .offset(100)
        .setTween(".block-16 .row", {opacity: 1, y: 0})
        .addTo(ctrl);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 600})
        .offset( $(window).height() / 2.2)
        .setPin(".block-16 .row")
        .addTo(ctrl);

        // BLOCK 16 INNER ANIMATION
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 800})
        .offset(150)
        .setTween(".horizontal", {x: -2100})
        .addTo(ctrl);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_16", duration: 150})
        .offset(200)
        .setTween(".horizontal", {y: 80})
        .addTo(ctrl);
})
