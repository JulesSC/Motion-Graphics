import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

const mainTL = gsap.timeline();

function morphEllipseLeft(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, ease: "power4.out", y:"-=500", delay: 0.15});
    // tl.to("#Left-Ellipse", {duration: 2, morphSVG:"#Left-Surfboard"}, "+=1")
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

function lineFour(){
    const tl = gsap.timeline();
    tl.to("#Line-4", {duration: 1, ease: "power4.out", scaleY:1.25, transformOrigin: "center center", delay:0.25});
    return tl;
}

function lineInterior(){
    const tl = gsap.timeline();
    tl.to(".lineInterior", {duration: 3, ease: "power4.out", scaleY:-1, stagger: 0.15, transformOrigin: "center center"});
    return tl;
}

function flipWaveUpper(){
    const tl = gsap.timeline();
    tl.to(".upper", {duration: 2, ease: "power4.out", scaleY:-1, transformOrigin: "center bottom", delay: 0.15, stagger: 0.25});
    return tl;
}

function ellipseLeftEnd(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, ease: "power4.out", y:"+=500", alpha:0});
    return tl;
}

function ellipseRightEnd(){
    const tl = gsap.timeline();
    tl.to("#Right-Ellipse", {duration: 2, ease: "power4.out", y:"-=500", alpha:0});
    return tl;
}

function groupTwo(){
    const tl = gsap.timeline();
    tl.to("#Group-1, #Group-3", {duration: 2, ease: "power4.out", y:"+=130", delay: 0.15});
    return tl;
}

function groupFive(){
    const tl = gsap.timeline();
    tl.to("#Group-4, #Group-6", {duration: 2, ease: "power4.out", y:"-=130", delay: 0.15});
    return tl;
}

function lines(){
    const tl = gsap.timeline();
    tl.to(".lineCenter", {duration: 4, ease: "power4.out", scaleY:0.25, transformOrigin: "center center"}, "go" );
    tl.to("#Line-2, #Line-3", {duration: 2, ease: "power4.out", scaleY:-0.25, transformOrigin: "center top"}, "go");
    tl.to("#Line-5, #Line-6", {duration: 2, ease: "power4.out", scaleY:-0.25, transformOrigin: "center bottom"}, "go");
    tl.to("#Line-1", {duration: 2, ease: "power4.out", y:"+=130", transformOrigin: "center bottom"}, "go");
    tl.to("#Line-7", {duration: 2, ease: "power4.out", y:"-=130", transformOrigin: "center top"}, "go");
    return tl;
}

function final(){
    const tl = gsap.timeline();
    tl.to("#Final", {duration: 2, ease: "power4.out", scaleY:0, transformOrigin: "center center"}, "go" );
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
.add(lineFour(), "morph")
.add(lineInterior(), "morph")
.add(ellipseLeftEnd(), "madeUp")
.add(ellipseRightEnd(), "madeUp")
.add(groupTwo(), "madeUp")
.add(groupFive(), "madeUp")
.add(lines(), "madeUp")
.add(final());

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
