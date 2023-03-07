<template>
  <div
      class="switch z-50 fixed  right-2 top-2 h-20   w-10 lg:h-28  lg:right-24 lg:top-6 bg-shrimp-500 dark:bg-dark-navigation"
      @click="open"
  >
    <div class="toggle-button">
      <div class="toggle h-8 w-8 mx-auto"></div>
      <div class="moon-mask bg-shrimp-500 dark:bg-dark-navigation "></div>
      <div class="circles-wrapper absolute -left-2.5 top-11">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import {useColorModeStore} from '~/stores/darkMode'
const colorModeStore = useColorModeStore()
/*
const colorModeIcon = computed(() => colorModeStore.isDarkMode ? 'ph:moon-duotone' : 'ph:sun-duotone')
*/
import gsap from "gsap"
const tl = gsap.timeline({ paused: true });
let toggle = false

const localDarkMode = localStorage.getItem("nuxt-color-mode")
console.log(localDarkMode)





onMounted(()=> {

  tl
      .set(".switch", { boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" })
      .to(".toggle-button", 0.2, { scale: 0.7 }, 0)
      .set(".toggle", { backgroundColor: "#FFF" })
      .set(".circle", { display: "none" })
      .to(".moon-mask", 0.2, { translateY: 20, translateX: -10 }, 0.2)
      .to(".toggle-button", 0.2, { translateY: 49 }, 0.2)
      .to(".toggle-button", 0.2, { scale: 0.9 }, 0.5)


})

const open = () => {
  colorModeStore.switchColorMode()

  toggle = !toggle
  if(toggle){
    tl.restart();
  } else {
    tl.reverse();
  }}
</script>

<style scoped lang="scss">
$black: #111;
$yellow: #fdb813;
$grey: #514e4b;
$white: #fff;
/* ***** Colors - End ***** */
/* ***** Global Styles - Start ***** */
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ***** Global Styles - End ***** */
/* ***** Specific Styles - Start ***** */
.switch {

  padding-top: 2px;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.toggle-button {
  transform: scale(0.5);
  transform-origin: center center;
}
.toggle {
  position: relative;
  background-color: $yellow;
  border-radius: 50%;
}
.moon-mask {
  position: absolute;
  width: 35px;
  height: 35px;
  margin: -74px 0 0 34px;
  border-radius: 50%;
}
.circles-wrapper {
  .circle {
    position: absolute;
    width: 4px;
    height: 8px;
    background-color: $white;
    border-radius: 10px;
    &:first-child {
      margin: -57px 0 0 27px;
    }
    &:nth-child(2) {
      margin: -9px 0 0 28px;
    }
    &:nth-child(3) {
      margin: -32px 0 0 51px;
      transform: rotate(90deg);
    }
    &:nth-child(4) {
      margin: -33px 0 0 4px;
      transform: rotate(90deg);
    }
    &:nth-child(5) {
      margin: -14px 0 0 10px;
      transform: rotate(45deg);
    }
    &:nth-child(6) {
      margin: -14px 0 0 45px;
      transform: rotate(320deg);
    }
    &:nth-child(7) {
      margin: -50px 0 0 10px;
      transform: rotate(135deg);
    }
    &:nth-child(8) {
      margin: -50px 0 0 45px;
      transform: rotate(235deg);
    }
  }
}
</style>
