jQuery(document).ready(function () {
    var controller = new ScrollMagic.Controller({container: "body"})

///////////////////////// SECOND BLOCK ////////////////////////////

    if ($( window ).width() >= 801 ) {
        // do some magic

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 700)
        .setTween(".block-2__bc-solid", {opacity: 1, left: '50%'})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2,
            reverse: true  
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 510)
        .setTween(".group-image", {opacity: 1, top: '0.5%'})
        .addTo(controller)


        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
        reverse: true })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 400)
        .setTween(".grape-image", {opacity: 1, top: '2.5vh', left: '3vw'})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 320)
        .setTween(".passion-fruit-image", {opacity: 1, top: '28.5vh', left: '34.3vw'})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 270)
        .setTween(".cherry-image ", {opacity: 1, top: '62vh', left: '.5vw'})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading ',
            duration: $(window).height() / 2 ,
            reverse: true
        })
        .offset( $(window).height() * 0.5 - 530)
        .setTween(".span__1", {opacity: 1})
        .addTo(controller)
        
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading ',
            duration: $(window).height() / 2 ,
            reverse: true
        })
        .offset( $(window).height() * 0.5 - 430)
        .setTween(".span__2", {opacity: 1})
        .addTo(controller)
        
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading ',
            duration: $(window).height() / 2 ,
            reverse: true
        })
        .offset( $(window).height() * 0.5 - 330)
        .setTween(".span__3", {opacity: 1})
        .addTo(controller)
        


        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading ',
            duration: $(window).height() / 2 ,
            reverse: true
        })
        .offset( $(window).height() * 0.5 - 230)
        .setTween(".span__4 p", {opacity: 1})
        .addTo(controller)


        
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2 ,
            reverse: true
        })
        .offset( $(window).height() * 0.5 - 180)
        .setTween(".marked__text", {opacity: 1})
        .addTo(controller)




///////////////////////// SECOND BLOCK - MOBILE ////////////////////////////

    }
    if ($( window ).width() <= 800) {
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 200)
        .setTween(".block-2__bc-solid", {opacity: 1, top: '50vh', scale: 1})
        .addTo(controller)


        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2,
            reverse: true  
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 120)
        .setTween(".group-image", {opacity: 1, top: '0vh'})
        .addTo(controller)


        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
        reverse: true })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 100)
        .setTween(".grape-image", {opacity: 1, delay: 0.5, top: '1vh', left: '-2vw', transform: 'rotate(.85turn)'})
        .addTo(controller)



        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 80)
        .setTween(".passion-fruit-image", {opacity: 1, delay: 0.5, top: '3.5vh', left: '74.3vw'})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-2-heading',
            duration: $(window).height() / 2.1,
            reverse: true 
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 70)
        .setTween(".cherry-image ", {opacity: 1, delay: 0.5, top: '28vh', left: '-7.5vw'})
        .addTo(controller)
    }

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading ',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 530)
    // .addIndicators()
    .setTween(".span__1", {opacity: 1})
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading ',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 430)
    .setTween(".span__2", {opacity: 1})
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading ',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 330)
    .setTween(".span__3", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading ',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 230)
    .setTween(".span__4 p", {opacity: 1})
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 240)
    // .addIndicators()
    .setTween(".marked__30", {opacity: 1})
    .addTo(controller)


    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-2-heading',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    .offset( $(window).height() * 0.5 - 180)
    .setTween(".marked__text", {opacity: 1})
    .addTo(controller)
   



///////////////////////// THIRD BLOCK ////////////////////////////

if ($( window ).width() >= 801) {
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__bc',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 700)
    .setTween(".mySwiper", {opacity: 1, top: '4vh'})
    .addTo(controller)
 
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '.block-3__content',
    //     duration: 200,
    //     reverse: true
    // })
    // // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    // .offset( $(window).height() * 0.5 - 645)
    // .setTween(".block-3__content__nav-options", {opacity: 1})
    // .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__content',
        duration: 200,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 505)
    .setTween(".block-3__content__description", {opacity: 1})
    .addTo(controller)


    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__bc',
        duration: 200,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 470)
    .setTween(".block-3__title", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__bc',
        duration: $(window).height() / 5 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 160)
    .setTween(".custom-swiper-button-next", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__bc',
        duration: $(window).height() / 5 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 160)
    .setTween(".custom-swiper-button-prev", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-3__bc',
        duration: 100,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 200)
    .setTween(".rounded-text", {opacity: 1})
    .addTo(controller)
    }


    var contrl = new ScrollMagic.Controller();
    var duration = 0.15;
    $('.block-3__content__nav-options a').each(function(index) {
        var tl_list = new TimelineMax();
        tl_list.to(this, duration, {opacity: 1});

        var scene = new ScrollMagic.Scene({
            offset: 100 + 20 * index,
            triggerElement: ".mySwiper",
            triggerHook: 0.5,
            reverse: true
        })
            .setTween(tl_list)
            .addTo(contrl);
    });
    if ($( window ).width() >= 1440) {
        // var scene = new ScrollMagic.Scene({
        //     triggerElement: '.block-3__content',
        //     duration: 200,
        //     reverse: true
        // })
        // // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        // .offset( $(window).height() * 0.5 - 650)
        // .setTween(".block-3__content__nav-options", {opacity: 1})
        // .addTo(controller)
    
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-3__content',
            duration: 200,
            reverse: true
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 600)
        .setTween(".block-3__content__description", {opacity: 1})
        .addTo(controller)

        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-3__bc',
            duration: $(window).height() / 5 ,
            reverse: true
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 200)
        .setTween(".custom-swiper-button-next", {opacity: 1})
        .addTo(controller)
    
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-3__bc',
            duration: $(window).height() / 5 ,
            reverse: true
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 200)
        .setTween(".custom-swiper-button-prev", {opacity: 1})
        .addTo(controller)
    
        var scene = new ScrollMagic.Scene({
            triggerElement: '.block-3__bc',
            duration: $(window).height() / 7 ,
            reverse: true
        })
        // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
        .offset( $(window).height() * 0.5 - 170)
        .setTween(".rounded-text", {opacity: 1})
        .addTo(controller);

        var contrl = new ScrollMagic.Controller();
        var duration = 0.3;
        $('.block-3__content__nav-options a').each(function(index) {
            var tl_list = new TimelineMax();
            tl_list.to(this, duration, {opacity: 1});
    
            var scene = new ScrollMagic.Scene({
                offset: 200 + 20 * index,
                triggerElement: ".mySwiper",
                triggerHook: 0.5,
                reverse: true
            })
                .setTween(tl_list)
                .addTo(contrl);
        });
    }

///////////////////////// THIRD BLOCK - MOBILE ////////////////////////////

if ($( window ).width() <= 800) {
var scene = new ScrollMagic.Scene({
    triggerElement: '.block-3__bc',
    duration: $(window).height() / 2 ,
    reverse: true
})
// .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
.offset( $(window).height() * 0.5 - 660)
.setTween(".mySwiper", {opacity: 1, top: '0vh'})
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.block-3__bc',
    duration: $(window).height() / 2 ,
    reverse: true
})
// .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
.offset( $(window).height() * 0.5 - 660)
.setTween(".block-3__title", {opacity: 1})
.addTo(controller)


var scene = new ScrollMagic.Scene({
    triggerElement: '.slider-description',
    duration: $(window).height() / 2 ,
    reverse: true
})
// .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
.offset( $(window).height() * 0.5 - 820)
.setTween(".description-mobile-scroll ", {opacity: 1})
.addTo(controller)


var scene = new ScrollMagic.Scene({
    triggerElement: '.block-3__bc',
    duration: $(window).height() / 2 ,
    reverse: true
})
// .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
.offset( $(window).height() * 0.5 - 340)
.setTween(".custom-swiper-button-next", {opacity: 1})
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.block-3__bc',
    duration: $(window).height() / 2 ,
    reverse: true
})
// .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
.offset( $(window).height() * 0.5 - 340)
.setTween(".custom-swiper-button-prev", {opacity: 1})
.addTo(controller)
    }

///////////////////////// FOURTH BLOCK ////////////////////////////
if ($( window ).width() >= 801 && $( window ).width() <= 1440) {
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 640)
    .setTween(".block-4__title-h", {opacity: 1})
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 520)
    .setTween(".fourth-span__1", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 470)
    .setTween(".fourth-span__2", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 380)
    .setTween(".fourth-span__3", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: 100,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 330)
    .setTween(".buy-btn", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__bc',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 140)
    .setTween(".last-image", {opacity: 1, top: '-16vh'})
    .addTo(controller)
        
}
///////////////////////// FOURTH BLOCK MOBILE ////////////////////////////

if ($( window ).width() <= 801) {
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 410)
    .setTween(".block-4__title-h", {opacity: 1})
    .addTo(controller)
    

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__bc',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 400)
    .setTween(".last-image", {opacity: 1, top: '18vh'})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: 100,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 230)
    .setTween(".buy-btn", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 340)
    .setTween(".fourth-span__1", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 300)
    .setTween(".fourth-span__2", {opacity: 1})
    .addTo(controller)
}
if ($( window ).width() >= 1440) {
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 400)
    .setTween(".block-4__title-h", {opacity: 1})
    .addTo(controller)
    

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__bc',
        duration: 200,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 140)
    .setTween(".last-image", {opacity: 1, top: '7.5vh'})
    .addTo(controller)
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 640)
    .setTween(".block-4__title-h", {opacity: 1})
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 520)
    .setTween(".fourth-span__1", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 470)
    .setTween(".fourth-span__2", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: $(window).height() / 2 ,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 380)
    .setTween(".fourth-span__3", {opacity: 1})
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: '.block-4__title',
        duration: 100,
        reverse: true
    })
    // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    .offset( $(window).height() * 0.5 - 330)
    .setTween(".buy-btn", {opacity: 1})
    .addTo(controller)

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '.block-4__bc',
    //     duration: $(window).height() / 2 ,
    //     reverse: true
    // })
    // // .setTween(".span__text", {x: 0, y: $(window).height() * -0.1})
    // .offset( $(window).height() * 0.5 - 140)
    // .setTween(".last-image", {opacity: 1, top: '20vh'})
    // .addTo(controller)
}

})