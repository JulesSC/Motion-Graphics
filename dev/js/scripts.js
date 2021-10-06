import { gsap } from "gsap";

const mainTL = gsap.timeline();

// mainTL.to("#hero >div section",{duration:1, alpha:1, y:"-=100"});
// mainTL.to("#hero >div section",{duration:0.5, rotation: 180});
// mainTL.to("#hero >div section",{duration:1, alpha:0, y:"+=100"});

// mainTL.from("#hero",{duration:1, y:"+=100", delay: 2.5}, "madeUp");
// mainTL.from("#hero",{duration:0.7, alpha:0, delay: 2.5}, "madeUp");
// mainTL.from("header",{duration:1, y:"+=100", delay: 2.5}, "madeUp");
// mainTL.from("header",{duration:0.7, alpha:0, delay: 2.5}, "madeUp");
// mainTL.from("#content",{duration:1, y:"+=100", delay: 2.5}, "madeUp");
// mainTL.from("#hero-body",{duration:0.5, alpha:0}, "madeUP");


mainTL.from("#hero",{duration:1, y:"+=100"}, "madeUp");
mainTL.from("header",{duration:1, alpha:0, y:"+=100"}, "madeUp");
// mainTL.from("header",{duration:0.7, alpha:0}, "madeUp");
mainTL.from("#content",{duration:1, y:"+=100"}, "madeUp");
mainTL.from("header ul",{duration:0.5, alpha:0, y:"+=10", delay: 0.2}, "madeUP");
mainTL.from("#hero >div",{duration:0.5, alpha:0, y:"+=5", delay: 0.2}, "madeUP");
mainTL.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUP");


// gsap.from("#content", {
//     scrollTrigger: "#content", duration:0.5, alpha:0 // start the animation when ".box" enters the viewport (once)
//     // y:"+=100"
//   });
