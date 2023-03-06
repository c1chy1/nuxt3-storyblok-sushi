import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default defineNuxtPlugin(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }

    return { provide: { gsap, ScrollToPlugin, ScrollTrigger } };
});
