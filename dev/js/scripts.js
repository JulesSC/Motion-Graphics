import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero",{duration:2, alpha:0});
mainTL.from("#hero >div",{duration:0.5, alpha:0}, "madeUp");
mainTL.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUp");

// gsap.set("#hero >div section", {xPercent: -50, yPercent: -50});

// var ball = document.querySelector("#hero >div section");
// var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// var mouse = { x: pos.x, y: pos.y };
// var speed = 0.35;

// var xSet = gsap.quickSetter(ball, "x", "px");
// var ySet = gsap.quickSetter(ball, "y", "px");

// window.addEventListener("mousemove", e => {    
//   mouse.x = e.x;
//   mouse.y = e.y;  
// });

// gsap.ticker.add(() => {
  
//   // adjust speed for higher refresh monitors
//   var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
//   pos.x += (mouse.x - pos.x) * dt;
//   pos.y += (mouse.y - pos.y) * dt;
//   xSet(pos.x);
//   ySet(pos.y);
// });

