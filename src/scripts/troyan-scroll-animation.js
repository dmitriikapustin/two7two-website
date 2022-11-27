$(document).ready(function () { 

    var from_left_to_right_element_appearance = $(".from-left-to-right-element-appearance")
    var from_right_to_left_element_appearance = $(".from-right-to-left-element-appearance")
    var from_bottom_to_top_element_appearance = $(".from-bottom-to-top-element-appearance")

    var from_left_to_right_element_appearance_count = from_left_to_right_element_appearance.length;
    var from_right_to_left_element_appearance_count = from_right_to_left_element_appearance.length;
    var from_bottom_to_top_element_appearance_count = from_bottom_to_top_element_appearance.length;


    // SCROLL ANIMATION. FROM BOTTOM TO TOP

    $(".from-bottom-to-top-element-appearance").each(function (from_bottom_to_top_element_appearance_index) {
        $(this).addClass("from-bottom-to-top-element-appearance-index-" + from_bottom_to_top_element_appearance_index)

        $(this).prepend('<div class="trigger-for-from-bottom-to-top-element-appearance-' + from_bottom_to_top_element_appearance_index + ' trigger"></div>');

    })

    var controller_from_bottom_to_top_element_appearance_animation = new ScrollMagic.Controller();

    for (from_bottom_to_top_element_appearance_index = 0; from_bottom_to_top_element_appearance_index < from_bottom_to_top_element_appearance_count; from_bottom_to_top_element_appearance_index++) {
        let offsetK;
        if (from_bottom_to_top_element_appearance_index === 0) {
            offsetK = -200;

        } else {
            offsetK = 0;

        }
        $(".from-bottom-to-top-element-appearance-index-" + from_bottom_to_top_element_appearance_index).each(function (index) {

                var tl_from_bottom_to_top_element_appearance = new TimelineMax();

                tl_from_bottom_to_top_element_appearance.fromTo(this, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.6})
                var scene = new ScrollMagic.Scene({
                    offset: offsetK, 
                    triggerElement: ".trigger-for-from-bottom-to-top-element-appearance-" + from_bottom_to_top_element_appearance_index,
                    triggerHook: 0.7,
                    duration: 0,
                    reverse: false
                })
                    .addIndicators()
                    .setTween(tl_from_bottom_to_top_element_appearance)
                    .addTo(controller_from_bottom_to_top_element_appearance_animation);

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
 })
    