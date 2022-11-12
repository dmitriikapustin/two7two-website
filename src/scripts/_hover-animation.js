// gsap.from('.instagram',{
//     scale: 1,
//     duration: 5
//   });
// gsap.from('.twitter',{
//     scale: 1,
//     duration: 5
//   });
// gsap.from('.facebook',{
//     scale: 1,
//     duration: 5
//   });
// gsap.from('.youtube-cont',{
//     scale: 1,
//     duration: 5
//   });
// gsap.from('.youtube',{
//     scale: 1,
//     duration: 5
//   });  
// gsap.from('.vk-cont',{
//     scale: 1,
//     duration: 5
//   }); 
// gsap.from('.vk',{
//     scale: 1,
//     duration: 5
//   });    
// gsap.from('.behance',{
//     scale: 1,
//     duration: 5
//   });
  
const instagram = document.getElementById("instagram")
const twitter = document.getElementById("twitter")  
const facebook = document.getElementById("facebook")  
const behance = document.getElementById("behance")
const vk_cont = document.getElementById("vk-cont")  
const youtube_cont = document.getElementById("youtube-cont")  




// let social_icons = document.querySelector('.container-for-social')
// social_icons.addEventListener('mouseover', (e) => {
//   let target = e.target.closest('a')
//   if (!target) {return}
//   gsap.to('.cssVar', {duration: 1.35 ,'--color': 'salmon', '--size': '100%'})
// })
  

let hover_first_step_instagram = gsap.to(instagram, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_instagram = gsap.to(instagram, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
instagram.addEventListener("mouseenter", () => hover_first_step_instagram.play());
instagram.addEventListener("mouseenter", () => hover_second_step_instagram.play());
instagram.addEventListener("mouseleave", () => hover_second_step_instagram.reverse());

let hover_first_step_twitter = gsap.to(twitter, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_twitter = gsap.to(twitter, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
twitter.addEventListener("mouseenter", () => hover_first_step_twitter.play());
twitter.addEventListener("mouseenter", () => hover_second_step_twitter.play());
twitter.addEventListener("mouseleave", () => hover_second_step_twitter.reverse());

let hover_first_step_facebook = gsap.to(facebook, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_facebook = gsap.to(facebook, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
facebook.addEventListener("mouseenter", () => hover_first_step_facebook.play());
facebook.addEventListener("mouseenter", () => hover_second_step_facebook.play());
facebook.addEventListener("mouseleave", () => hover_second_step_facebook.reverse());

let hover_first_step_youtube_cont = gsap.to(youtube_cont, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_youtube_cont = gsap.to(youtube_cont, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
youtube_cont.addEventListener("mouseenter", () => hover_first_step_youtube_cont.play());
youtube_cont.addEventListener("mouseenter", () => hover_second_step_youtube_cont.play());
youtube_cont.addEventListener("mouseleave", () => hover_second_step_youtube_cont.reverse());


let hover_first_step_behance = gsap.to(behance, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_behance = gsap.to(behance, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
behance.addEventListener("mouseenter", () => hover_first_step_behance.play());
behance.addEventListener("mouseenter", () => hover_second_step_behance.play());
behance.addEventListener("mouseleave", () => hover_second_step_behance.reverse());


let hover_first_step_vk_cont = gsap.to(vk_cont, {scale: 0.93, duration: 0.1, paused: true, ease: "linear"});
let hover_second_step_vk_cont = gsap.to(vk_cont, {scale: 1.1, duration: 0.4, paused: true, ease: "linear"}, 0.1)
vk_cont.addEventListener("mouseenter", () => hover_first_step_vk_cont.play());
vk_cont.addEventListener("mouseenter", () => hover_second_step_vk_cont.play());
vk_cont.addEventListener("mouseleave", () => hover_second_step_vk_cont.reverse());
