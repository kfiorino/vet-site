import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from(".pets", {duration:0.5, alpha:0});

section3TL.from("#container-3a", {duration:0.5, alpha:0});
    

export function section3Animation(){
    ScrollTrigger.create({

        //markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start: "top, 70%",
        end: "bottom 30%"

    });
}