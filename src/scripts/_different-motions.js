
// ------------
// Eye tracking
// ------------
const seraphim = document.getElementById('seraphim');
const tu1 = document.getElementById('t-u-1');
const tu2 = document.getElementById('t-u-2');
const eyeRightPupil = document.getElementById('eye-right-pupil');
const eyeLeftPupil = document.getElementById('eye-left-pupil');
const eyeLeftInner = document.getElementById('eye-left-inner');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth)/2;
const yMovement = (innerEyeHeight - pupilHeight)/2;

window.addEventListener('mousemove', updateEyePosition);



function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * xMovement;
  const posY = ((event.clientY / window.screen.height) * 2 - 1) * yMovement;

  seraphim.style.transform = `translate(${posX * 5}px, ${posY * 5}px)`;
  tu1.style.transform = `translate(0px, ${posY * 1.3}px)`;
  tu2.style.transform = `translate(0px, ${posY * -0.9}px)`
  eyeLeftPupil.style.transform = `translate(${posX * 0.25}px, ${posY * -0.5}px)`;
  eyeRightPupil.style.transform = `translate(${posX * -0.3}px, ${posY * 0.45}px)`;
}




// DEMON ANIMATION

var tl_demon = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_demon.fromTo(".demon", {y: 0}, {y: 30, duration: 0.8, ease: "none"})
tl_demon.to(".demon", 1.6, {y: -30, ease: "none"}, 0.8)
tl_demon.to(".demon", 0.8, {y: 0, ease: "none"}, 2.4)

// MEAT & COMISSAR ANIMATION

var tl_move_c = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_move_c.fromTo(".comissar", {x: 0}, {x: 120, duration: 1.2, ease: "none"})
tl_move_c.to(".comissar", 2.4, {x: -120, ease: "none"}, 1.2)
tl_move_c.to(".comissar", 0, {scaleX: -1, ease: "none"}, 1.2)
tl_move_c.to(".comissar", 1.2, {x: 0, ease: "none"}, 3.6)
tl_move_c.to(".comissar", 0, {scaleX: 1, ease: "none"}, 3.6)


var tl_move_m = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_move_m.fromTo(".meat", {x: 0}, {x: 100, duration: 1.2, ease: "none"})
tl_move_m.to(".meat", 2.4, {x: -100, ease: "none"}, 1.2)
tl_move_c.to(".meat", 0, {scaleX: -1, ease: "none"}, 1.2)
tl_move_m.to(".meat", 1.2, {x: 0, ease: "none"}, 3.6)
tl_move_c.to(".meat", 0, {scaleX: 1, ease: "none"}, 3.6)

// DIGITS ANIMATION 



$(".count").each(function(index) {
  var tl_digits_m = new TimelineMax({repeat: -1, repeatDelay: 0});
  tl_digits_m.to(this, 1.5, {opacity: 0.4, ease: "none"}, 0 + index * 0.3)
  tl_digits_m.to(this, 1.5, {opacity: 1, ease: "none"}, 1.8 + index * 0.3)
})