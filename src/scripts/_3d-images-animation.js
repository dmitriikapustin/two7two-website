$(document).ready(function () {

    // Set controller
    var controller_3d_images = new ScrollMagic.Controller();

    // #TASK Add trigger append

    // Set controller
    var scene = new ScrollMagic.Scene({
            // #TASK Rename foк universal use
            triggerElement: '.shapes-3d', // -> pseudo-3d-trigger
            duration: 1150,
            reverse: true
        })
        .offset($(window).height() * 0.5) // -> 0

        // #TASK Rename foк universal use
        .setClassToggle(".rectangle_2", "active3d") // -> pseudo-3d-item, active-pseudo-3d ???


        .addTo(controller_3d_images)

});