<template>
  <div
      class="sushi-container fixed w-full h-screen bg-[#BBBBAA]   dark:bg-dark top-0 left-0  flex flex-col  items-center justify-end z-50 h-screen transition-all">


    <div class="chopstick bg-[#654F4F] dark:bg-[#F1E3AA] chopstick1 transition-all z-50  bottom-36"></div>
    <div class="chopstick bg-[#654F4F] dark:bg-[#F1E3AA] chopstick2 transition-all bottom-36"></div>

<div class="transform scale-[60%] md:scale-75 h-1/5 mb-12 relative">


  <div class="roll h-52 w-52 sm:w-60 bottom-12 flex flex-col justify-center items-center">

      <div class="rice w-3/4   h-12 top-4 absolute"></div>
      <div class="seaweed w-3/4 h-32 "></div>
      <div class="salmon w-1/2 h-8 top-3  absolute"></div>
      <div class="eye-left  w-5 h-5 left-[25%] top-[40%]  absolute"></div>
      <div class="shine-left h-1 w-1  left-[26.4%] top-[44%] absolute"></div>
      <div class="eye-right w-5 h-5 left-[43%] top-[40%]  absolute"></div>
      <div class="shine-right h-1 w-1 left-[44.4%] top-[44%] absolute"></div>
      <div class="mouth w-7 h-5 left-[30%] top-[59%] absolute"></div>
      <div class="tongue w-5 h-1.5 left-[31.7%] top-[65%] absolute"></div>
    <div class="dish opacity-1  w-52 h-48  md:h-52 md:w-64    -bottom-12     sm:bottom-8  md:-bottom-12 absolute"></div>

  </div>

  </div>
  </div>
</template>

<script setup lang="ts">


import gsap from 'gsap'

const beginAnimation = gsap.timeline();




onMounted(() => {

  start();
})

function start() {



  let responsive = gsap.matchMedia()
  responsive.add("(min-width: 0)", () => {
    beginAnimation  .set('body', {
      overflow: 'hidden',
    })
        .from('.dish', 1, {opacity: 0, bottom: '-25%', ease: "Back.easeOut"})
        .from('.sushi-container', 3, {y: -0, ease: "Back.easeOut"})
        .to('.chopstick-container', 1.5, {top: '20%'}, 1.5)
        .to('.chopstick', 1.5, {opacity: 1}, 1.5)
        .to('.chopstick2', 1, {
          webkitFilter: "brightness(0.8)",
          filter: "brightness(0.8)",
        }, 2)
        .set( window , {duration: 2, scrollTo: {y: "min"}})
        .to('.chopstick1', 2, {rotation: 190}, 3.5)
        .to('.chopstick2', 2, {rotation: 165}, 3.5)
        .to('.shine-left', .5, {left: '30%'}, 4.2)
        .to('.shine-right', .5, {left: '48%'}, 4.2)
        .to('.mouth', .5, {borderRadius: '90% 90% 10% 10%'}, 4.2)
        .to('.shine-left', .5, {left: '26.4%', top: '41.7%', width: '14px', height: '14px'}, 5.2)
        .to(".roll", {
          keyframes: {
            rotation: [0, -1, 1, 0, 1, -1, 0, -1, 1, 0, -1],
            x: [1, -1, -3, 3, 1, -1, -3, 3, -1, 1, 1],
            y: [1, -2, 0, 2, -1, 2, 1, 1, -1, 2, -2]
          },
          repeat: 2,
          duration: 1,
          yoyo: true
        })

        .set('body', {
          overflow: 'auto',
        })

        .to('.shine-right', .5, {left: '44.2%', top: '41.4%', width: '14px', height: '14px'}, 5.2)
/*
        .to('.sushi-container', 0.6, {ease: "Power4.easeOut", y: '-100%'}, 6.7)
*/



  })
  function scrollToTop() {
    beginAnimation.to(window, {duration: 0, scrollTo: {x:0,y:0}})

  }

  responsive.add("(min-width: 1024px)", () => {
    beginAnimation.to('.chopstick-container', 1.5, {top: '34%'}, 1.5)

  })
}

</script>

<style scoped lang="scss">

.sushi-container {


  .roll {


    position: relative;
  }

  .chopstick-container {

  }


  .rice {
    border-radius: 50%;
    background-color: #fef3d4;
    border: 3px solid black;
    box-shadow: inset -30px -5px 0 3px #ffeab1;
    z-index: 1;
  }

  .seaweed {


    background-color: #2e362a;
    border-radius: 0 0 40% 40%;
    border: 3px solid black;
    box-shadow: inset -10px 0 0 10px #21271f;
  }

  .salmon {

    background-color: #ff4f20;
    border-radius: 50% 50% 30% 30%;
    border: 3px solid black;
    box-shadow: inset -45px -16px 0 0 #ff3600;
    z-index: 2;
  }

  .eye-left {

    background-color: #000;
    border-radius: 50%;
    border: 3px solid black;
  }

  .shine-left {

    background-color: #e7e7e7;
    border-radius: 50%;
  }

  .eye-right {
    background-color: #000;
    border-radius: 50%;
    border: 3px solid black;
  }

  .shine-right {

    background-color: #e7e7e7;
    border-radius: 50%;
  }

  .mouth {


    background-color: #000;
    border-radius: 0 0 90% 90%;
  }

  .tongue {

    background-color: #ff1233;
    border-radius: 50%;
  }

  .chopstick1 {

    transform: translate(-50%) rotate(-187deg);
    height: 0;
    width: 10px;

  }

  .chopstick2 {

    transform: translate(-50%) rotate(-200deg);
    height: 0;
    width: 10px;
  }

  .chopstick {
    height: 50%;
    opacity: 0;
    width: 15px;
    border-radius: 10px;
    clip-path: polygon(35% 0%, 80% 0%, 100% 100%, 0% 100%);
    position: absolute;
    overflow: hidden;
  }

  .chopstick::before, .chopstick::after {
    content: "";
    width: 15px;
    display: block;
  }

  .chopstick::before {
    height: 25px;
    background: #fff;
  }

  .chopstick::after {
    height: 60px;
    background: repeating-linear-gradient(0deg, #654F4F, #654F4F 11px, #F1E3AA 2px, #F1E3AA 19px);
    position: absolute;
    bottom: 0px;
  }




  .dish {
    z-index: -1;
    background: rgb(243 244 246);
    border-radius: 50%;
    transform: rotateX(60deg);
    -webkit-box-shadow: inset 0px 0 0 35px #FFF;
    -moz-box-shadow: inset 0px 0 0 35px #FFF;
    -o-box-shadow: inset 0px 0 0 35px #FFF;
    box-shadow: inset 0px 0 0 35px #FFF;
  }
}
</style>
