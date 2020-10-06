import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 h4", {duration:0.5, alpha:0});

section4TL.from("#container-4a", {duration:0.5, alpha:0, x: -300});

section4TL.from("#container-4b", {duration:0.5, alpha:0, y: 300});

section4TL.from("#container-4c", {duration:0.5, alpha:0, x: 300});
    

export function section4Animation(){
    ScrollTrigger.create({

        //markers: true,
        animation: section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start: "top, 80%",
        end: "bottom 20%"

    });
}