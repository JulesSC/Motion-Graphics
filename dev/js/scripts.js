import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero",{duration:2, alpha:0});
mainTL.from("#hero >div",{duration:0.5, alpha:0}, "madeUp");
mainTL.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUp");
