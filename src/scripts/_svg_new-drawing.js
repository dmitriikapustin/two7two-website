$(document).ready(function () {


    var svg_animation = $('.svg-animation_item');
    var svg_count = svg_animation.length;



    $('.svg-animation_item').each(function(svg_index) {
        $(this).addClass("svg-index-" + svg_index) 

        $(this).parent().prepend('<div class="trigger-for-svg-' + svg_index + ' trigger"></div>');

    })

    var controller_svg_animation = new ScrollMagic.Controller();

    var svg_paths_count = 0;

    for (svg_index = 0; svg_index < svg_count; svg_index++) {
        var svg_paths_count = $(".svg-index-" + svg_index + " path").length;
        console.log(svg_paths_count);
        $(".svg-index-" + svg_index + " path").each(function (index) {
            $(this).addClass("path-" + index)
            $(this).attr('id', "path-" + index);
            const path = $('path#path-' + index)
            console.log(path)
            var lineLength = Math.round(path[0].getTotalLength());
            $(this).css("stroke-dasharray", lineLength );
            $(this).css("stroke-dashoffset", lineLength - 0.5 );
            var duration = 1 / svg_paths_count;
            // console.log("duration:" + 1 / svg_paths_count);
            var delay = 1 / svg_paths_count * index;
            // console.log("delay:" + 2 / svg_paths_count * index);
            var tween = new TimelineMax()
            .to($(this), duration, {strokeDashoffset: 0, ease:Linear.easeNone}, delay) // draw word for 0.9        
        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "trigger-for-svg-" + svg_index, duration: 100})
            .setTween(tween)
            // .addIndicators()
            .addTo(controller_svg_animation);
        })
    }
})                    