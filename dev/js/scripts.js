import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

// mainTL.to("#Left-Ellipse", {duration: 1, alpha: 0, scale:2});

function morphEllipseLeft(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, ease: "power4.out", y:"-=500", delay: 0.15});
    return tl;
}

function morphEllipseRight(){
    const tl = gsap.timeline();
    tl.to("#Right-Ellipse", {duration: 2, ease: "power4.out", y:"+=500", delay: 0.5});
    return tl;
}

function flipWaveLower(){
    const tl = gsap.timeline();
    tl.to(".lower", {duration: 2, ease: "power4.out", scaleY:-1, stagger: 0.25});
    return tl;
}

function lineOne(){
    const tl = gsap.timeline();
    tl.to("#Line-1", {duration: 1, ease: "power4.out", scaleY:0.25});
    tl.to("#Line-1", {duration: 1, ease: "power4.out", scaleY:0.6, transformOrigin: "center bottom"});
    return tl;
}
function lineSeven(){
    const tl = gsap.timeline();
    tl.to("#Line-7", {duration: 1, ease: "power4.out", scaleY:0.25, transformOrigin: "center bottom", delay:0.65});
    tl.to("#Line-7", {duration: 1, ease: "power4.out", scaleY:0.6, transformOrigin: "center top"});
    return tl;
}

function flipWaveUpper(){
    const tl = gsap.timeline();
    tl.to(".upper", {duration: 2, ease: "power4.out", scaleY:-1, transformOrigin: "center bottom", delay: 0.15, stagger: 0.25});
    return tl;
}

function ellipseLeftEnd(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, ease: "power4.out", y:"+=500", delay: 0.15});
    return tl;
}

function ellipseRightEnd(){
    const tl = gsap.timeline();
    tl.to("#Right-Ellipse", {duration: 2, ease: "power4.out", y:"-=500", delay: 0.5});
    return tl;
}

function groupTwo(){
    const tl = gsap.timeline();
    tl.to(".lower", {duration: 2, ease: "power4.out", y:"+=65", delay: 0.15});
    return tl;
}

function groupFive(){
    const tl = gsap.timeline();
    tl.to(".upper", {duration: 2, ease: "power4.out", y:"-=65", delay: 0.15});
    return tl;
}

// function line(){
//     const tl = gsap.timeline();
//     tl.to(".line", {duration: 2, ease: "power4.out", scaleY:-1, stagger: 0.25}, "morph");
//     return tl;
// }

mainTL.add(flipWaveLower(), "morph")
.add(morphEllipseLeft(), "morph")
.add(flipWaveUpper(), "morph")
.add(morphEllipseRight(), "morph")
.add(lineOne(), "morph")
.add(lineSeven(), "morph")
.add(ellipseLeftEnd(), "madeUp")
.add(ellipseRightEnd(), "madeUp")
.add(groupTwo(), "madeUp")
.add(groupFive(), "madeUp");

GSDevTools.create();

/* =============
    Hero
============= */

// mainTL.from("#hero",{duration:1, y:"+=100"}, "madeUp");
// mainTL.from("header",{duration:1, alpha:0, y:"+=100"}, "madeUp");
// mainTL.from("#content",{duration:1, y:"+=100"}, "madeUp");
// mainTL.from("header ul",{duration:0.5, alpha:0, y:"+=10", delay: 0.2}, "madeUP");
// mainTL.from("#hero >div",{duration:0.5, alpha:0, y:"+=5", delay: 0.2}, "madeUP");
// mainTL.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUP");
