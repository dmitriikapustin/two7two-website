jQuery(document).ready(function () {
    var controller_parallax = new ScrollMagic.Controller({container: "body"})
    var controller_3d = new ScrollMagic.Controller();
    var controller_cards_anim = new ScrollMagic.Controller();
    /////////////////// FLOATING TEXT num 1 ///////////////////////
    // var controller_anim_h = new ScrollMagic.Controller();
    // var duration = 0.3;
    // $('.anim-h').each(function(index) {
    //     var tl = new TimelineMax();
    //     tl.to(this, duration, {y: 0});

    //     var scene = new ScrollMagic.Scene({
    //         offset: 1000 + 30 * index,
    //         triggerElement: ".block__1",
    //         triggerHook: 0.5,
    //         reverse: true
    //     })
    //         .setTween(tl)
    //         .addIndicators()
    //         .addTo(controller_anim_h);
    // });


    /////////////////// FLOATING TEXT num 2 ///////////////////////
    var controller_anim_h = new ScrollMagic.Controller();


    $('.anim-h').each(function(index) {
        var tl = new TimelineMax();
        tl.to(this, 100000 , {y: 0});

        var scene = new ScrollMagic.Scene({
            offset: 1000 + 30 * index,
            triggerElement: ".block__1",
            triggerHook: 0.5,
            duration: 100,
            reverse: true
        })
            .setTween(tl)
            // .addIndicators()
            .addTo(controller_anim_h);
    });

    /////////////////// PARALLAX ///////////////////////

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block__1__shapes',
        duration: 300,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5)
    .setTween(new TimelineMax()
    .to(".circle__1", 1, {y: '100vh'

        }
    )
    // .to(".circle__1", 1, {y: '85vh', x: '25vw'

    //     }
    // )
    // .to(".circle__1", 1, {y: '100vh', x: '40vw'

    //     }
    // )
    // .to(".circle__1", 1, {transform: 'translate(50vw, 100vh) scale(3.5)'

    //     } )
     ) 
    .addTo(controller_parallax )

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block__1__shapes',
        duration: 300,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5)
    .setTween(".circle__2", {y: '85vh'})
    .addTo(controller_parallax )

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block__1__shapes',
        duration: 300,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5)
    .setTween(".circle__3", {y: '70vh'})
    .addTo(controller_parallax )


/////////////////// PSEUDO 3D ///////////////////////

    var scene = new ScrollMagic.Scene({
        triggerElement: '.shapes-3d',
        duration: 1150,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5)
    .setClassToggle(".rectangle_2", "active3d")
    .addTo(controller_3d)

    /////////////////// CARDS ANIMATION ///////////////////////

    var scene = new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: 1200,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5 - 600)
    .setTween(".card_1", {transform: 'rotate(-15deg) translate3d(10%, 15%, 0)'
    })
    .addTo(controller_cards_anim)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: 1200,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5 - 600)
    .setTween(".card_2", {transform: 'rotate(-8deg) translate3d(50%, 35%, 0)'
    })
    .addTo(controller_cards_anim)


    var scene = new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: 1200,
        reverse: true 
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset($(window).height() * 0.5 - 600)
    .setTween(".card_3", {transform: 'rotate(0deg) translate3d(90%, 55%, 0)'
    })
    .addTo(controller_cards_anim)
})  




