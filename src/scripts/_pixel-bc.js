const pixel_bc = document.getElementById("pixel-bc")

// const fifty_x_fifty_red = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="50" height="50" fill="#BE141B"/>
// </svg>
// `;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var pixelArr = $(".pixel");
console.log(pixelArr)
console.log($(".pixel").length)

$(".pixel").each(function(index) {
    if (index >= 0 && index < 2) {
        var correctY = Math.random() * 5;
        var randomLeft = getRandomArbitrary(0.4, 0.6) * 100;
        var randomTop = (Math.pow(0.25 * randomLeft - 12.5, 2)) 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 3 && index < 7) {
        var correctY = Math.random() * 32;
        var randomLeft = getRandomArbitrary(0.2, 0.39) * 100;
        var randomTop = (Math.pow(0.25 * randomLeft - 12.5, 2)) 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop - correctY + "vh"})
    }
    if (index >= 7 && index < 11) {
        var correctY = Math.random() * 32;
        var randomLeft = getRandomArbitrary(0.61, 0.8) * 100;
        var randomTop = (Math.pow(0.25 * randomLeft - 12.5, 2)) 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop - correctY + "vh"})
    }
    if (index >= 11 && index <= 19) {
        var correctY = Math.random(0, 1.15) * 110;
        var randomLeft = getRandomArbitrary(0, 0.19) * 100;
        var randomTop = (Math.pow(0.25 * randomLeft - 12.5, 2)) 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop - correctY + "vh"})
    }
    if (index > 19 && index <= 27) {
        var correctY = Math.random(0, 1.15) * 110;
        var randomLeft = getRandomArbitrary(0.81, 1) * 100;
        var randomTop = (Math.pow(0.25 * randomLeft - 12.5, 2)) 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop - correctY + "vh"})
    }
    if (index > 27 && index <= 32) {
        var randomTop = Math.random() * 200 + 100;
        var randomLeft = getRandomArbitrary(0.92, 1) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index > 32 && index <= 37) {
        var randomTop = Math.random() * 200 + 300;
        var randomLeft = getRandomArbitrary(0.92, 1) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index > 37 && index <= 42) {
        var randomTop = Math.random() * 200 + 100;
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index > 42 && index <= 47) {
        var randomTop = Math.random() * 200 + 300;
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})

