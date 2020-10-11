import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 h4", {duration:1, alpha:0})
.from("#container-4a", {duration:1, alpha:0, x: -300},"play-section-4")
.from("#container-4b", {duration:1, alpha:0, y: 300},"play-section-4")
.from("#container-4c", {duration:1, alpha:0, x: 300},"play-section-4");
    

export function section4Animation(){
    ScrollTrigger.create({

        //markers: true,
        animation: section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start: "top, 80%",
        end: "bottom 25%"

    });
}