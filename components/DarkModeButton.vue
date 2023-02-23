<template>
  <div
        class="switch z-50 fixed right-24 top-6"
        @click="open"
    >
      <div class="toggle-button">
        <div class="toggle"></div>
        <div class="moon-mask"></div>
        <div class="circles-wrapper">
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

import {useColorModeStore} from '@/stores/darkMode'
const colorModeStore = useColorModeStore()
/*
const colorModeIcon = computed(() => colorModeStore.isDarkMode ? 'ph:moon-duotone' : 'ph:sun-duotone')
*/
import gsap from "gsap";
const tl = gsap.timeline({ paused: true });


const toggle = ref(false)


   const open = () => {

     colorModeStore.switchColorMode()

      tl
          .to(".wrapper", 0.1, { backgroundImage: "none", backgroundColor: "#111" , scale: 0.2 }, 0.2)
          .set(".switch", { boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" })

      tl
          .to(".toggle-button", 0.2, { scale: 0.7 }, 0)
          .set(".toggle", { backgroundColor: "#FFF" })
          .set(".circle", { display: "none" })
          .to(".moon-mask", 0.2, { translateY: 20, translateX: -10 }, 0.2)
          .to(".toggle-button", 0.2, { translateY: 49 }, 0.2)

      toggle.value = !toggle.value
      if(toggle.value){
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
  width: 60px;
  height: 110px;
  padding-top: 2px;
  background-color: $grey;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.toggle-button {
  transform: scale(0.8);
  transform-origin: center center;
}
.toggle {
  position: relative;
  width: 35px;
  height: 35px;
  margin: 12px;
  margin-top: 12px;
  background-color: $yellow;
  border-radius: 50%;
}
.moon-mask {
  position: absolute;
  width: 35px;
  height: 35px;
  margin: -74px 0 0 34px;
  background-color: $grey;
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
.text p {
  margin-left: 5px;
  font-size: 55px;
  line-height: 1.1;
  font-weight: 700;
}
.social-icons {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
}

</style>
