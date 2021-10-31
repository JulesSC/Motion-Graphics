import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

// mainTL.to("#Left-Ellipse", {duration: 1, alpha: 0, scale:2});

function morphEllipseLeft(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, ease: "power4.out", y:"-=500"});
    return tl;
}

function morphEllipseRight(){
    const tl = gsap.timeline();
    tl.to("#Right-Ellipse", {duration: 2, ease: "power4.out", y:"+=500"});
    return tl;
}

function flipWaveLower(){
    const tl = gsap.timeline();
    tl.to(".lower", {duration: 2, ease: "power4.out", scaleY:-1, stagger: 0.25}, "morph");
    tl.to("#Line-1", {duration: 0.75, ease: "power4.out", scaleY:0.60, y:"-=60"}, "morph");
    return tl;
}

function line(){
    const tl = gsap.timeline();
    tl.to(".line", {duration: 2, ease: "power4.out", scaleY:-1, stagger: 0.25}, "morph");
    return tl;
}

// function flipWaveUpper(){
//     const tl = gsap.timeline();
//     tl.to(".upper", {duration: 2, ease: "power4.out", scaleY:-1, stagger: 0.25});
//     return tl;
// }

mainTL.add(flipWaveLower(), "morph")
.add(morphEllipseLeft(), "morph")
.add(morphEllipseRight(), "morph")
.add(line(), "morph");
// .add(flipWaveUpper(), "morph");

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
