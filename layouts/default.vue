<template>




  <Intro/>
  <dark-mode-button/>

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Logo/>
      <slot class="page mt-16" />
    </div>
  </div>
  <Navigation/>
  <ShareIcons/>


</template>

<script setup lang="ts">

useState('locale', () => 'en')


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother,ScrollTrigger)


onMounted(()=> {
  if (ScrollTrigger.isTouch === 1) {

    ScrollSmoother.create({
      smooth: 2,
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: 0.1
    })

  } else {

   ScrollSmoother.create({
      smooth: 2,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })

  }

})
</script>
