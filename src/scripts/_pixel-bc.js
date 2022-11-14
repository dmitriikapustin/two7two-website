const pixel_bc = document.getElementById("pixel-bc")


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var pixelArr = $(".pixel");
var pixelArrBottom = $(".pixel-bottom");
var pixelMobArr = $(".pixel-mob");
// console.log(pixelArr)

console.log($(".pixel").length)

var pixel_count = pixelArr.length;
var pixel_bottom_count = pixelArrBottom.length;
var pixel_mob_count = pixelMobArr.length;


$(".pixel").each(function(index) {
    if (index >= 0 && index < 7) {
        var randomLeft = getRandomArbitrary(0, 0.12) * 100;
        var randomTop = getRandomArbitrary(0, 0.15) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 7 && index < 14) {
        var randomLeft = getRandomArbitrary(0, 0.1) * 100;
        var randomTop = getRandomArbitrary(0.16, 0.31) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 14 && index < 21) {
        var randomLeft = getRandomArbitrary(0.01, 0.17) * 100;
        var randomTop = getRandomArbitrary(0.33, 0.53) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 21 && index < 28) {
        var randomLeft = getRandomArbitrary(0.01, 0.19) * 100;
        var randomTop = getRandomArbitrary(0.54, 0.96) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 28 && index < 35) {
        var randomLeft = getRandomArbitrary(0.88, 1) * 100;
        var randomTop = getRandomArbitrary(0, 0.15) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 35 && index < 42) {
        var randomLeft = getRandomArbitrary(0.9, 1) * 100;
        var randomTop = getRandomArbitrary(0.16, 0.31) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 42 && index < 49) {
        var randomLeft = getRandomArbitrary(0.83, 0.99) * 100;
        var randomTop = getRandomArbitrary(0.33, 0.53) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 49 && index < 56) {
        var randomLeft = getRandomArbitrary(0.81, 0.99) * 100;
        var randomTop = getRandomArbitrary(0.54, 0.96) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }



    if (index >= 56 && index < 61) {
        var randomLeft = getRandomArbitrary(0.15, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 61 && index < 66) {
        var randomLeft = getRandomArbitrary(0.52, 0.85) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 66 && index < 70) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 70 && index < 74) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 74 && index < 78) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 78 && index < 82) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 82 && index < 86) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 86 && index < 90) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 90 && index < 93) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(3.5, 4.8) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 93 && index < 96) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(3.5, 4.8) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
 
})

$(".pixel-bottom").each(function(index) {

    if (index >= 0 && index < 3) {
        var randomLeft = getRandomArbitrary(0, 0.15) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.5) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 3 && index < 6) {
        var randomLeft = getRandomArbitrary(0.85, 1) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.5) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 6 && index < 8) {
        var randomLeft = getRandomArbitrary(0, 0.3) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 8 && index < 10) {
        var randomLeft = getRandomArbitrary(0.7, 1) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})


$(".pixel-mob").each(function(index) {
    if (index >= 0 && index < 2) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    } 
    if (index >= 2 && index < 4) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.11, 0.19) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 4 && index < 5) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.2, 0.3) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 5 && index < 6) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.31, 0.42) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 6 && index < 8) {
        var randomLeft = getRandomArbitrary(0.3, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 21 && index < 22) {
        var randomLeft = getRandomArbitrary(0.3, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 22 && index < 25) {
        var randomLeft = getRandomArbitrary(0.52, 0.7) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 8 && index < 10) {
        var randomLeft = getRandomArbitrary(0.92, 1) * 100;
        var randomTop = getRandomArbitrary(0.11, 0.19) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    // if (index >= 10 && index < 11) {
    //     var randomLeft = getRandomArbitrary(0.85, 0.97) * 100;
    //     var randomTop = getRandomArbitrary(0.2, 0.3) * 100; 
    //     $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    // }
    // if (index >= 11 && index < 12) {
    //     var randomLeft = getRandomArbitrary(0.83, 0.96) * 100;
    //     var randomTop = getRandomArbitrary(0.38, 0.43) * 100; 
    //     $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    // }


    if (index >= 10 && index < 13) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.4) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 13 && index < 16) {
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.4) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 16 && index < 19) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(1.5, 2.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 19 && index < 21) {
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(1.5, 2.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})

$(".pixel").each(function (pixel_scroll_index) {
    $(this).addClass("pixel-scroll-" + pixel_scroll_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-scroll-' + pixel_scroll_index + ' trigger"></div>');

})

$(".pixel-bottom").each(function (pixel_scroll_bottom_index) {
    $(this).addClass("pixel-scroll-bottom-" + pixel_scroll_bottom_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-scroll-bottom-' + pixel_scroll_bottom_index + ' trigger"></div>');

})

$(".pixel-mob").each(function (pixel_mob_scroll_index) {
    $(this).addClass("pixel-mob-scroll-" + pixel_mob_scroll_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-mob-scroll-' + pixel_mob_scroll_index + ' trigger"></div>');

})

var controller_all_pixels_animation = new ScrollMagic.Controller();

for (pixel_scroll_index = 0; pixel_scroll_index < pixel_count; pixel_scroll_index++) {

    $(".pixel-scroll-" + pixel_scroll_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax = Math.random()
        var tl_scroll_pixel = new TimelineMax();
        tl_scroll_pixel.fromTo(this, { y: 0 }, { y: -700 - 3000 * randParallax, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: 0,
            triggerElement: ".trigger-for-pixel-scroll-" + pixel_scroll_index,
            triggerHook: 0,
            duration: 10000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_scroll_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}

for (pixel_scroll_bottom_index = 0; pixel_scroll_bottom_index < pixel_bottom_count; pixel_scroll_bottom_index++) {

    $(".pixel-scroll-bottom-" + pixel_scroll_bottom_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax = Math.random()
        var tl_scroll_bottom_pixel = new TimelineMax();
        tl_scroll_bottom_pixel.fromTo(this, { y: 0 }, { y: -200 - 200 * randParallax, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: -700,
            triggerElement: ".block-11",
            triggerHook: 0,
            duration: 1600,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_scroll_bottom_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}

var controller_all_pixels_mob_animation = new ScrollMagic.Controller();

for (pixel_mob_scroll_index = 0; pixel_mob_scroll_index < pixel_mob_count; pixel_mob_scroll_index++) {

    $(".pixel-mob-scroll-" + pixel_mob_scroll_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax_mob = Math.random()
        var tl_mob_scroll_pixel = new TimelineMax();
        tl_mob_scroll_pixel.fromTo(this, { y: 0 }, {y: -400 - 800 * randParallax_mob, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: 0,
            triggerElement: ".trigger-for-pixel-mob-scroll-" + pixel_mob_scroll_index,
            triggerHook: 0,
            duration: 2000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_mob_scroll_pixel)
            .addTo(controller_all_pixels_mob_animation);
    });
}