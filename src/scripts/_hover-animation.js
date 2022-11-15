
  
const instagram = document.getElementById("instagram")
const twitter = document.getElementById("twitter")  
const facebook = document.getElementById("facebook")  
const behance = document.getElementById("behance")
const vk_cont = document.getElementById("right-empty")  
const youtube_cont = document.getElementById("left-empty")  

function SetAnimation(element, x_pos, y_pos) {
    var timeline = new TimelineMax()
    var anim_1 = 0.05
    var anim_2 = 0.05
    element.addEventListener("mouseenter", () => {
        timeline.add( TweenLite.to(element, anim_1, {scale: 0, ease: "easeOut"}) ) 
        setTimeout( function() {
            timeline.add( TweenLite.to(element, anim_2, {scale: 1.13, x: x_pos, y: y_pos, ease: "easeOut"}) ) 
        }, anim_1 * 200)
    });
    element.addEventListener("mouseleave", () => {
        setTimeout( function() {
            timeline.add( TweenLite.to(element, 0.05,{scale: 1, x: 0, y: 0, ease: "none"}) ) 
        }, 300)
    });    
}

SetAnimation(instagram, 0, -5)
SetAnimation(twitter, 5, 3)
SetAnimation(facebook, -5, 3)
SetAnimation(behance, 0, 5)
SetAnimation(vk_cont, 5, -3)
SetAnimation(youtube_cont, -5, -3)