import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("header",{duration:1, y:"+=100"}, "madeUp");
mainTL.from("#hero",{duration:1, y:"+=100"}, "madeUp");
mainTL.from("#content",{duration:1, y:"+=100"}, "madeUp");
mainTL.from("#hero >div",{duration:0.5, alpha:0}, "madeUP");
mainTL.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUP");
