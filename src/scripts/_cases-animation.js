$(document).ready(function () {
    var cases = $('cases-scroll')
    var cases_count = cases.length;

    
    // for (paragraph_index = 0; paragraph_index < paragraph_count; paragraph_index++) {        
    //     cases.each(function(case_index) {
            
    //     })
    // }    
    // Set ScrollMagic controller 
    var controller_text_anim = new ScrollMagic.Controller();
    var text_anim_duration = 4800;


    // Set timeline with zero delay after parameters
    var text_animation_timeline = new TimelineMax()
        .to(".row:nth-child(1)", {x: '-4%'}, 0)
        .to(".row:nth-child(2)", {x: '-20%'}, 0)
        .to(".row:nth-child(3)", {x: '-6%'}, 0)
        .to(".row:nth-child(4)", {x: '-26%'}, 0)

    // ScrollMagic animation for texts timeline
    var scene = new ScrollMagic.Scene({
        triggerElement: cases,
        duration: text_anim_duration,
        reverse: true
    })
    .offset($(window).height() * 0.5 - 680)
    .setTween(text_animation_timeline)
    .addTo(controller_text_anim)
})