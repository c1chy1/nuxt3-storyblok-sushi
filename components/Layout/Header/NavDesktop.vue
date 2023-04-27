<template>
  <nav class="fixed  lg:right-24 bottom-24 z-20  rounded-full dark:bg-transparent transition-all">
    <div class="cube  xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 shadow-2xl rounded-lg " ref="cube" @mouseenter="playTimeline" @mouseleave="reverseTimeline">
      <div class="plus ">
        <div class="plus-horizontal bg-white " ref="horizontal"></div>
        <div class="plus-vertical bg-white" ref="vertical"></div>
      </div>
      <div class="quadrant rounded-2xl  bg-transparent dark:bg-dark-navigation">
    <LayoutHeaderNavIcons/>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import gsap from 'gsap/gsap-core'
let tl = gsap.timeline();

const cube = ref()
const horizontal = ref()
const vertical = ref()

onMounted(() => {

  let responsive = gsap.matchMedia()
  responsive.add("(min-width: 1280px)", () => {
    tl.timeScale(1.6)
    .to(cube.value, 0.7, {
      translate: '25% 25%',
      rotation: 45,
      width: '150px',
      height: '150px',
      ease: "Expo.easeOut",
    }, 'first')
    .to(".cube svg", 0.3, {rotate: -45}, 'first')
    .to(vertical.value, 0.3, {height: '0', ease: "Power1.easeIn"}, 'first')
    .to(horizontal.value, 0.3, {width: '0',  ease: "Power1.easeIn"}, 'first')
    .to('.quadrant', 0.5, {backgroundColor: 'transparent' , borderRadius : 25}, 'first')
    .to('#quadrant_0', 0.15, {x: -5, y: -5 , borderRadius : 10}, 'seperate')
    .to('#fade-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2')
    .to('#quadrant_1', 0.15, {x: 5, y: -5, borderRadius : 10}, 'seperate')
    .to('#fade-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2')
    .to('#quadrant_2', 0.15, {x: -5, y: 5, borderRadius : 10}, 'seperate')
    .to('#fade-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2')
    .to('#quadrant_3', 0.15, {x: 5, y: 5, borderRadius : 10}, 'seperate')
    .to('#fade-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2')


  })
})
function playTimeline(e: any) {
  e.stopPropagation();
  tl.play();
}
function reverseTimeline(e: any) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}
</script>

<style scoped>


.cube {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

}
.plus-vertical,
.plus-horizontal {
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.plus-vertical {
  height: 50%;
  width: 5px;
}
.plus-horizontal {
  width: 50%;
  height: 5px;
}
.quadrant {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}



</style>
