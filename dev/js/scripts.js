import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

// mainTL.to("#Left-Ellipse", {duration: 1, alpha: 0, scale:2});

function morphEllipseLeft(){
    const tl = gsap.timeline();
    tl.to("#Left-Ellipse", {duration: 2, y:"-=500"});
    return tl;
}

function morphEllipseRight(){
    const tl = gsap.timeline();
    tl.to("#Right-Ellipse", {duration: 2, y:"+=500"});
    return tl;
}

function flipWaveLower(){
    const tl = gsap.timeline();
    tl.to("#Group-1, #Group-3, #Group-5", {duration: 2, scaleY:-1});
    return tl;
}

// function flipWaveUpper(){
//     const tl = gsap.timeline();
//     tl.from("#Group-2, #Group-4, #Group-6", {duration: 2, scaleY:-1});
//     return tl;
// }

mainTL.add(morphEllipseLeft(), "morph")
.add(morphEllipseRight(), "morph")
.add(flipWaveLower()), "morph";

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
