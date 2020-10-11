import {gsap} from "gsap";

export function section1Animation(){
    gsap.from("#container-1", {duration:1.5, alpha:0, y:400});
}