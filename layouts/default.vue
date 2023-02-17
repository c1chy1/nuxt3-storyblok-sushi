<template>
  <TheHeader />
  <div id="smooth-content" class="page mt-16">
    <slot />
  </div>
</template>

<script setup lang="ts">
useState('locale', () => 'en')

import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

let smoother = ScrollSmoother.create({
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

gsap.timeline().to(smoother, {
  duration: 3
})
</script>
