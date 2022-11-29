// Create ScrollMagic timeline by layers
var controller_all_pixels_animation = new ScrollMagic.Controller();

function generatePixels (
    // Вводные переменные для функции
    how_much_pixels, // Сюда вводим соклько надо пикселей
    how_much_layers, // Сколько слоёв генерируем
    start_block, // Начальный блок генерации
    end_block, // Последний блок генерации
    padding_sides_offset // Отступы по бокам в процентах
    ) {

    // Main setting
    var sum_of_pixels = how_much_pixels, base_size = 2 // Base settings
        y_start = start_block.offset().top, y_end = end_block.offset().top + end_block.height(), perc_padd = padding_sides_offset / 100 // Area Y of generating
        pixel_container = $('#pixel-bc') // Container identify
        padding = ($(window).width()-$('.block-1 .container').width())/2 // Area X of generating
        container_width = $('.block-1 .container').width(); // Take container width

    // Set up mobile adaptation
    if ($(window).width() < 600) { 
        sum_of_pixels = how_much_pixels / 2
        perc_padd = padding_sides_offset / 200
        base_size = 1
    }

    let arr = [], y_arr = [], x_arr = []; // Main array for all settings and X/Y for position saving

    // Random integer from interval MIN and MAX
    function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }

    // Generate random hash for this layers pack
    var pack_index = randomIntFromInterval(1, 9999)

    // RAndom colors generation with probabilities
    function getRandomColor(){
        var num = Math.random();
        if(num < 0.3) return "#BE141B";  //probability 0.3
        else if(num < 0.6) return "#383838"; // probability 0.3
        else return "#ffffff"; //probability 0.4
    }

    // Y positions generating
    for(i=y_start; i<=y_end; i++) { y_arr.push(i) }

    // X positions generating
    for(i=0; i <= $(window).width(); i++) { 
        if (i < padding + $(window).width() * perc_padd || i > padding + container_width - $(window).width() * perc_padd) { 
            x_arr.push(i)
        }
    }

    // Generating HTML element
    function pxGen(obj) {
        var layer_num = randomIntFromInterval(1, how_much_layers)
        pixel_container.append('<svg data-pack="'+ pack_index + '" data-layer="'+ layer_num +'" class="pixel pack-'+ pack_index +'" id="pixel-'+ obj.index +'" width="'+ obj.size +'" height="'+ obj.size +'" viewBox="0 0 '+ obj.size +' '+ obj.size +'" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; left: '+ obj.x +'px; top: '+ obj.y +'px; translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><rect width="'+ obj.size +'" height="'+ obj.size +'" fill='+ obj.color +'></rect></svg>')
    }

    // Generating settings objects in Array
    for(pxObj=1; pxObj<=sum_of_pixels; pxObj++) {
        arr[pxObj] = {
            index: pxObj,
            size: randomIntFromInterval(1, 7) * base_size,
            x: x_arr.splice(Math.random()*x_arr.length,1)[0],
            y: y_arr.splice(Math.random()*y_arr.length,1)[0],
            color: getRandomColor()
        }
        pxGen(arr[pxObj])
    }

    for(l=1; l <= how_much_layers; l++) {

        // Creating triggers for every layer
        pixel_container.append('<div class="trigger-for-pixel-scroll-'+ l +' trigger trigger-'+ pack_index +'" style="position: absolute; left: 1px; top: '+ y_start +'px;"></div>')

        // Each pixel animating
        $(".pack-"+ pack_index +"[data-layer='"+ l + "']").each(function () {
            var tl_scroll_pixel = new TimelineMax();
            tl_scroll_pixel.fromTo(this, { y: 0 }, { y: -1000 * l, duration: 0.5});
            var scene = new ScrollMagic.Scene({
                offset: 150 / l,
                triggerElement: ".trigger-"+ pack_index +".trigger-for-pixel-scroll"+l,
                triggerHook: 0,
                duration: 10000,
                reverse: true
            })
                // .addIndicators()
                .setTween(tl_scroll_pixel).addTo(controller_all_pixels_animation);
        });
    }
}

// Document loaded
$(document).ready(function () { 
    generatePixels(100, 5, $('.header'), $('.block-2'), 10)
    generatePixels(110, 5, $('.block-8'), $('.block-10'), 10)
    generatePixels(120, 5, $('.block-11'), $('.block-12'), 10)
})