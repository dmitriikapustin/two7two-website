$(document).ready(function () {

    // Set controller
    var controller_3d_images = new ScrollMagic.Controller();

    // Set controller
    var scene = new ScrollMagic.Scene({
            triggerElement: '.pseudo-3d-trigger',
            duration: 1150,
            reverse: true
        })
        .offset(0)

        // #TASK Rename foк universal use
        .setClassToggle(".pseudo-3d-item", "active-pseudo-3d") 


        .addTo(controller_3d_images)

});