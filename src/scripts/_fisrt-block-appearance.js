$(document).ready(function () {
    // HEADING APPEARANCE
    var heading = $('.words-wrapped');
    
    // PARAGRAPHS APPEARANCE

    var parapraphs = $(".animated-paragraph_item_no-scroll");
    var paragraph_count = parapraphs.length;

    $(".animated-paragraph_item_no-scroll").each(function (paragraph_index) {
        $(this).addClass("paragraph-index-" + paragraph_index)
    })

    for (paragraph_index = 0; paragraph_index < paragraph_count; paragraph_index++) {
        $('.paragraph-index-' + paragraph_index + " span").each(function (index) {
            var tl = new TimelineMax();
            tl.to(this, 0.3, { y: 0 }, 3.2 + index * 0.05);
        });
    }
})