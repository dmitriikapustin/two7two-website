$(document).ready(function () { 
    var welcome_text_appearance = $(".welcome-element-appearance");
    var from_left_to_right_element_appearance = $(".from-left-to-right-element-appearance")
    var from_right_to_left_element_appearance = $(".from-right-to-left-element-appearance")

    console.log(welcome_text_appearance)

    var from_left_to_right_element_appearance_count = from_left_to_right_element_appearance.length;
    var from_right_to_left_element_appearance_count = from_right_to_left_element_appearance.length;
    var welcome_text_appearance_count = welcome_text_appearance.length;


    // HEADING OF WELCOME BLOCK APPEARANCE

    $(".welcome-element-appearance").each(function (welcome_text_appearance_index) {
        $(this).addClass("welcome-element-appearance-index-" + welcome_text_appearance_index)
    })


    for (welcome_text_appearance_index = 0; welcome_text_appearance_index < welcome_text_appearance_count; welcome_text_appearance_index++) {
        $(".welcome-element-appearance-index-" + welcome_text_appearance_index).each(function (index) {
            var tl_element_app = new TimelineMax();
            tl_element_app.fromTo(this, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.8}, 0.5)
        })
    }


    // SCROLL ANIMATION. FROM LEFT TO RIGHT

    $(".from-left-to-right-element-appearance").each(function (from_left_to_right_element_appearance_index) {
        $(this).addClass("from-left-to-right-element-appearance-index-" + from_left_to_right_element_appearance_index)

        $(this).prepend('<div class="trigger-for-from-left-to-right-element-appearance-' + from_left_to_right_element_appearance_index + ' trigger"></div>');

    })

    var controller_from_left_to_right_element_appearance_animation = new ScrollMagic.Controller();

    for (from_left_to_right_element_appearance_index = 0; from_left_to_right_element_appearance_index < from_left_to_right_element_appearance_count; from_left_to_right_element_appearance_index++) {
        $(".from-left-to-right-element-appearance-index-" + from_left_to_right_element_appearance_index).each(function (index) {
            var tl_from_left_to_right_element_appearance = new TimelineMax();
            tl_from_left_to_right_element_appearance.fromTo(this, {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 0.6})
            var scene = new ScrollMagic.Scene({
                offset: 0, 
                triggerElement: ".trigger-for-from-left-to-right-element-appearance-" + from_left_to_right_element_appearance_index,
                triggerHook: 0.7,
                duration: 0,
                reverse: false
            })
                .addIndicators()
                .setTween(tl_from_left_to_right_element_appearance)
                .addTo(controller_from_left_to_right_element_appearance_animation);
        })
    }

    // SCROLL ANIMATION. FROM RIGHT TO LEFT 

    $(".from-right-to-left-element-appearance").each(function (from_right_to_left_element_appearance_index) {
        $(this).addClass("from-right-to-left-element-appearance-index-" + from_right_to_left_element_appearance_index)

        $(this).prepend('<div class="trigger-for-from-right-to-left-element-appearance-' + from_right_to_left_element_appearance_index + ' trigger"></div>');

    })

    var controller_from_right_to_left_element_appearance_animation = new ScrollMagic.Controller();

    for (from_right_to_left_element_appearance_index = 0; from_right_to_left_element_appearance_index < from_right_to_left_element_appearance_count; from_right_to_left_element_appearance_index++) {
        $(".from-right-to-left-element-appearance-index-" + from_right_to_left_element_appearance_index).each(function (index) {
            var tl_from_right_to_left_element_appearance = new TimelineMax();
            tl_from_right_to_left_element_appearance.fromTo(this, {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.6})
            var scene = new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".trigger-for-from-right-to-left-element-appearance-" + from_right_to_left_element_appearance_index,
                triggerHook: 0.7,
                duration: 0,
                reverse: false
            })
                .addIndicators()
                .setTween(tl_from_right_to_left_element_appearance)
                .addTo(controller_from_right_to_left_element_appearance_animation);
        })
    }




    // EYE APPEARANCE

    var tl_eye_app = new TimelineMax();
    tl_eye_app.fromTo(".red-eye", {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.3}, 0.8);


    // EYE APPEARANCE

    var tl_logo_app = new TimelineMax();
    tl_logo_app.fromTo(".logo-svg", {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.3}, 1.1);



    // BOTTOM TEXT APPEARANCE

    var tl_genres_and_platform_text_appearance = new TimelineMax();
    tl_genres_and_platform_text_appearance.fromTo(".welcome-text-first-appearance", {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.4}, 1.4);
    tl_genres_and_platform_text_appearance.fromTo(".welcome-text-second-appearance", {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.4}, 1.6);

})