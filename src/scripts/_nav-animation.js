$(document).ready(function () {
       
    //  console.log("LESS")
    var duration = 800;
    var offset = 0;

    if(location.href.indexOf('reprobates')!==-1) {
        offset = 100;
    }

    var controller_navigation_animation = new ScrollMagic.Controller();

    // var hide_nav_timeline = new TimelineMax()
    //     .to($(".navigation > :nth-child(1)"), 0.3, {x: 500}, 0)
    //     .to($(".navigation > :nth-child(1)"), 0.05, { opacity: '0' }, 0.2)
    //     .to($(".navigation > :nth-child(2)"), 0.3, {x: 400}, 0)
    //     .to($(".navigation > :nth-child(2)"), 0.05, { opacity: '0' }, 0.2)
    //     .to($(".navigation > :nth-child(3)"), 0.3, {x: 300}, 0)
    //     .to($(".navigation > :nth-child(3)"), 0.05, { opacity: '0' }, 0.2)
    //     .to($(".navigation > :nth-child(4)"), 0.3, {x: 200}, 0)
    //     .to($(".navigation > :nth-child(4)"), 0.05, { opacity: '0' }, 0.2)
    //     .to($(".navigation > :nth-child(5)"), 0.3, {x: 100}, 0)
    //     .to($(".navigation > :nth-child(5)"), 0.05, { opacity: '0' }, 0.2)
    //     .to($(".navigation"), 0.01, {display: "none"}, 0.35)
    if (burger_boolean === false && $(document).width() > 800) {
        var hide_burger_timeline = new TimelineMax({
            onComplete: function () {
                console.log("I am visible!!!")
            }
        })
            // .fromTo($(".burger-menu"), {x: 100}, {x: 0, duration: 0.15}, 0.4)
            .to($(".burger-menu"), 0.2 , { opacity: '1', pointerEvents: "all" })
    
        
            var scene = new ScrollMagic.Scene({
                offset: offset,
                triggerElement: '.our-games',
                triggerHook: 0.1,
                reverse: true
            })
                // .addIndicators("main")
                .setTween(hide_burger_timeline)
                .addTo(controller_navigation_animation)
            
            // var scene = new ScrollMagic.Scene({
            //     offset: offset,
            //     triggerElement: '.block-1',
            //     triggerHook: 0.1,
            //     reverse: true
            // })
            //     .addIndicators("rep")
            //     .setTween(hide_burger_timeline)
            //     .addTo(controller_navigation_animation)    
    }

    


})