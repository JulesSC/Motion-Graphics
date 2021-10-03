import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("content",{duration:2, alpha:0, y:"+=1000", scale:2});