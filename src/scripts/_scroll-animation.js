$(document).ready(function () { 
    var appearance_scroll_heading = $(".appearance-scroll-heading");
    var appearance_scroll_p_right = $(".appearance-scroll-p-right");
    var appearance_scroll_p_left = $(".appearance-scroll-p-left");
    var appearance_p_right_scroll = $(".appearance-p-right");




    var appearance_scroll_heading_count = appearance_scroll_heading.length;
    var appearance_scroll_p_right_count = appearance_scroll_p_right.length;
    var appearance_scroll_p_left_count = appearance_scroll_p_left.length;

    $(".appearance-scroll-p-right").each(function (appearance_scroll_p_right_index) {
        $(this).addClass("appearance-scroll-p-right-index-" + appearance_scroll_p_right_index)

        $(this).prepend('<div class="trigger-for-appearance-scroll-p-right-' + appearance_scroll_p_right_index + ' trigger"></div>');

    })

    $(".appearance-scroll-p-left").each(function (appearance_scroll_p_left_index) {
        $(this).addClass("appearance-scroll-p-left-index-" + appearance_scroll_p_left_index)

        $(this).prepend('<div class="trigger-for-appearance-scroll-p-left-' + appearance_scroll_p_left_index + ' trigger"></div>');

    })

    $(".appearance-scroll-heading").each(function (appearance_scroll_heading_index) {
        $(this).addClass("appearance-scroll-heading-index-" + appearance_scroll_heading_index)

        $(this).parent().prepend('<div class="trigger-for-appearance-scroll-heading-' + appearance_scroll_heading_index + ' trigger"></div>');

    })


    // HEADINGS WITH SCROLL. SCALE AND OPACITY

    var controller_heading_animation = new ScrollMagic.Controller();



    for (appearance_scroll_heading_index = 0; appearance_scroll_heading_index < appearance_scroll_heading_count; appearance_scroll_heading_index++) {

        $(".appearance-scroll-heading-index-" + appearance_scroll_heading_index).each(function () {
            // $(this).addClass('ov-hidden')
            var tl_a_heading = new TimelineMax();
            tl_a_heading.fromTo(this, { opacity: 0, scale: 1.3, y: 10 }, { y: 0, opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" }, 0.25);

            var scene = new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".trigger-for-appearance-scroll-heading-" + appearance_scroll_heading_index,
                triggerHook: 0.6,
                duration: 69,
                reverse: false
            })

                .setTween(tl_a_heading)
                .addTo(controller_heading_animation);
        });
    }

    // HEADINGS WITH SCROLL. LEFT TO RIGHT


    // PARAGRAPHS WITH SCROLL. FROM RIGHT TO LEFT

    var controller_p_right_animation = new ScrollMagic.Controller();

    for (appearance_scroll_p_right_index = 0; appearance_scroll_p_right_index < appearance_scroll_p_right_count; appearance_scroll_p_right_index++) {

        $(".appearance-scroll-p-right-index-" + appearance_scroll_p_right_index).each(function (index) {
            // $(this).addClass('ov-hidden')
            var tl_a_p_right = new TimelineMax();
            tl_a_p_right.fromTo(this, { x: 1000 }, { x: 0, duration: 0.2, ease: "power3.out" }, 0 + index * 0.5);

            var scene = new ScrollMagic.Scene({
                offset: -100 + index * 10,
                triggerElement: ".trigger-for-appearance-scroll-p-right-" + appearance_scroll_p_right_index,
                triggerHook: 0.7,
                duration: 69,
                reverse: false
            })
                // .addIndicators()
                .setTween(tl_a_p_right)
                .addTo(controller_p_right_animation);
        });
    }


    // PARAGRAPHS WITH SCROLL. FROM LEFT TO RIGHT

    var controller_p_left_animation = new ScrollMagic.Controller();

    for (appearance_scroll_p_left_index = 0; appearance_scroll_p_left_index < appearance_scroll_p_left_count; appearance_scroll_p_left_index++) {

        $(".appearance-scroll-p-left-index-" + appearance_scroll_p_left_index).each(function (index) {
            // $(this).addClass('ov-hidden')
            var tl_a_p_left = new TimelineMax();
            tl_a_p_left.fromTo(this, { x: -1000 }, { x: 0, duration: 0.2, ease: "power3.out" }, 0 + index * 0.5);

            var scene = new ScrollMagic.Scene({
                offset: -100 + index * 10,
                triggerElement: ".trigger-for-appearance-scroll-p-left-" + appearance_scroll_p_left_index,
                triggerHook: 0.7,
                duration: 69,
                reverse: false
            })

                .setTween(tl_a_p_left)
                .addTo(controller_p_left_animation);
        });
    }
})