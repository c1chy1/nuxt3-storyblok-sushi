<template>




  <SectionIntro/>
  <LayoutNavigation/>
  <ButtonsDarkModeButton/>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <IconsLogo/>
      <slot class="page mt-16" />
    </div>
  </div>
  <IconsShareIcons/>


</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'


useState('locale', () => 'en')


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
