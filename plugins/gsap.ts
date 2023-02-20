import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    }

    if (ScrollTrigger.isTouch === 1) {
        // ScrollTrigger.defaults({ scroller: '#viewport' })
        // ScrollTrigger.normalizeScroll({ target: "#viewport", allowNestedScroll: true })

        // gsap.set('body, html', {
        // 	overflow: 'hidden',
        // 	height: '100vh',
        // 	width: '100vw'
        // })

        // gsap.set('#viewport', {
        // 	position: 'fixed',
        // 	overflowX: 'hidden',
        // 	overflowY: 'scroll',
        // 	height: '100vh',
        // 	width: '100vw',
        // })

        ScrollSmoother.create({
            smooth: 2,
            // normalizeScroll: true,
            // invalidateOnRefresh: true,
            // ignoreMobileResize: true,
            smoothTouch: 0.1,
        })
    } else {
        ScrollSmoother.create({
            smooth: 2,
            normalizeScroll: true,
            ignoreMobileResize: true,
        })
    }



    return {
        provide: {
            gsap,
            ScrollTrigger
        },
    }

    // nuxtApp.gsap = gsap
})
