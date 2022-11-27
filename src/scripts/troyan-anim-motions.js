$(document).ready(function () { 
    if(location.href.indexOf('troyan')!==-1) { 
        var tl_signer = new TimelineMax({repeat: -1, repeatDelay: 0});
        tl_signer.fromTo(".signer", {y: 0, x: 0}, {y: 10, x: 10, duration: 0.8, ease: "none"})
        tl_signer.to(".signer", 0.24, {y: 5, x: 11.5, ease: "none"}, 0.8)
        tl_signer.to(".signer", 0.24, {y: 0, x: 13, ease: "none"}, 1.04)
        tl_signer.to(".signer", 0.24, {y: -5, x: 11.5, ease: "none"}, 1.28)
        tl_signer.to(".signer", 0.24, {y: -10, x: 10, ease: "none"}, 1.52)
        tl_signer.to(".signer", 1.6, {y: 10, x: -10, ease: "none"}, 1.76)
        tl_signer.to(".signer", 0.24, {y: 5, x: -11.5, ease: "none"}, 3.36)
        tl_signer.to(".signer", 0.24, {y: 0, x: -13, ease: "none"}, 3.6)
        tl_signer.to(".signer", 0.24, {y: -5, x: -11.5, ease: "none"}, 3.84)
        tl_signer.to(".signer", 0.24, {y: -10, x: -10, ease: "none"}, 4.08)
        tl_signer.to(".signer", 0.8, {y: 0, x: 0, ease: "none"}, 4.32)
    }
})