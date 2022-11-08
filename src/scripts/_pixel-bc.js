const pixel_bc = document.getElementById("pixel-bc")


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var pixelArr = $(".pixel");
var pixelMobArr = $(".pixel-mob");
// console.log(pixelArr)

console.log($(".pixel").length)


$(".pixel").each(function(index) {
    if (index >= 0 && index < 2) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 2 && index < 4) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.1, 0.26) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 4 && index < 6) {
        var randomLeft = getRandomArbitrary(0.03, 0.15) * 100;
        var randomTop = getRandomArbitrary(0.26, 0.43) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 6 && index < 8) {
        var randomLeft = getRandomArbitrary(0.04, 0.17) * 100;
        var randomTop = getRandomArbitrary(0.44, 0.62) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 8 && index < 10) {
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 10 && index < 12) {
        var randomLeft = getRandomArbitrary(0.92, 1) * 100;
        var randomTop = getRandomArbitrary(0.1, 0.26) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 12 && index < 14) {
        var randomLeft = getRandomArbitrary(0.85, 0.97) * 100;
        var randomTop = getRandomArbitrary(0.26, 0.43) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 14 && index < 16) {
        var randomLeft = getRandomArbitrary(0.83, 0.96) * 100;
        var randomTop = getRandomArbitrary(0.44, 0.62) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }



    if (index >= 16 && index < 19) {
        var randomLeft = getRandomArbitrary(0.2, 0.45) * 100;
        var randomTop = getRandomArbitrary(0, 0.06) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 19 && index < 22) {
        var randomLeft = getRandomArbitrary(0.55, 0.8) * 100;
        var randomTop = getRandomArbitrary(0, 0.06) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 22 && index < 25) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 25 && index < 28) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 28 && index < 31) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 31 && index < 34) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 34 && index < 37) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 37 && index < 40) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
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
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100; 
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

