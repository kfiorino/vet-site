import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2 h1", {duration:1, alpha:0})
    .from("#section-2 img", {duration:1, alpha:0, x: 300})
    .from("#section-2 p", {duration:1, alpha:0, x:-300})
    .from(".services-container", {duration:1, alpha:0})
    

export function section2Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top, 70%",
        end: "bottom 20%"

    });
}