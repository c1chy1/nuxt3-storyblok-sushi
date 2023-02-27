<template>
  <div class="sushi-container w-[100vw] absolute h-screen bg-[#BBBBAA] dark:bg-dark top-0 left-0  flex flex-col  items-center  z-50 h-screen transition-all">
    <div class="chopstick-container h-1/2">
      <div class="chopstick chopstick1 z-50"></div>
      <div class="chopstick chopstick2 "></div>
    </div>
    <div class="roll w-3/4 bottom-12 flex flex-col items-center">
      <div class="rice w-3/4 h-12 -top-6 absolute"></div>
      <div class="seaweed w-3/4 h-32 "></div>
      <div class="salmon w-5/12 h-10 -top-10 absolute"></div>
      <div class="eye-left left-[39%]"></div>
      <div class="shine-left left-[38.4%]"></div>
      <div class="eye-right left-[46%]"></div>
      <div class="shine-right left-[45.4%] top-[70.5%]"></div>
      <div class="mouth left-[40%] top-[44.5vh]"></div>
      <div class="tongue left-[41%] top-[45.5vh]"></div>

    </div>
    <div class="dish w-64 h-64 -bottom-12"></div>
  </div>
</template>

<script setup lang="ts">


import gsap from 'gsap'
const beginAnimation =  gsap.timeline();

onMounted(()=> {

/*  start();*/
})

function start() {


  let mm = gsap.matchMedia()

  mm.add("(max-width: 480px)", ()=> {


    beginAnimation.from('.sushi-container',3,{y:-0, ease:"Back.easeOut"})
        .to('.chopstick-container', 1.5, { top: '40%'}, 1.5)
        .to('.chopstick', 1.5, { opacity:1}, 1.5)
        .to('.chopstick2', 1, {backgroundColor: '#3F2F2FFF'}, 2)
        .to('.chopstick1', 2, {rotation:190}, 3.5)
        .to('.chopstick2', 2, {rotation:165}, 3.5)
        .to('.shine-left', .5, {left:'36.3%'}, 4.2)
        .to('.shine-right', .5, {left:'45.5%'}, 4.2)
        .to('.mouth', .5, {borderRadius: '90% 90% 10% 10%'}, 4.2)
        .to('.shine-left', .5, {left:'35%',top:'68.8%',width:'16px',height:'16px'}, 5.2)
        .to('.roll', 1, {animation:'shake 1s 4'}, 2)
        .to('.shine-right', .5, {left:'44%',top:'69.8%',width:'16px',height:'16px'}, 5.2)
        .to('.sushi-container',0.6,{ease:"Power4.easeOut", y:'-100%'}, 6.7)


  })


}

</script>

<style scoped lang="scss">

.sushi-container {

  position: relative;


.roll {

  position: absolute;
}
.chopstick-container {


  position: relative;
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
  position: absolute;
  top: 68%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border-radius: 50%;
  border: 3px solid black;
}
.shine-left {
  position: absolute;
  top: 69.2%;

  width: 5px;
  height: 5px;
  background-color: #e7e7e7;
  border-radius: 50%;
}
.eye-right {
  position: absolute;
  top: 69%;


  width: 18px;
  height: 18px;
  background-color: #000;
  border-radius: 50%;
  border: 3px solid black;
}
.shine-right {
  position: absolute;


  width: 5px;
  height: 5px;
  background-color: #e7e7e7;
  border-radius: 50%;
}
.mouth {
  position: absolute;

  width: 30px;
  height: 20px;
  background-color: #000;
  border-radius: 0 0 90% 90%;
}
.tongue {
  position: absolute;
  width: 17px;
  height: 5px;
  background-color: #ff1233;
  border-radius: 50%;
}
.chopstick1 {
  position: absolute;
  transform: translate(-50%) rotate(-200deg);
  height: 0;
  width: 10px;
  background: #654F4F;

}
.chopstick2 {
  position: absolute;
  transform: translate(-50%) rotate(-185deg);
  height: 0;
  width: 10px;
  background: #654F4F;
}

  .chopstick {
 height: 100%;
    opacity: 0;
    left:50%;
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

  .chopstick-one {

    right: 24px;
    transform: translate(-50%) rotate(-20deg);
  }

  .chopstick-two {
    right: 40px;
    transform: rotate(10deg);
  }


  .dish
{
  position: absolute;

  z-index:-1;
  background:rgb(243 244 246);
  border-radius:50%;
  transform:rotateX(60deg);
  -webkit-box-shadow:inset 0px 0 0 35px #FFF;
  -moz-box-shadow:inset 0px 0 0 35px #FFF;
  -o-box-shadow:inset 0px 0 0 35px #FFF;
  box-shadow:inset 0px 0 0 35px #FFF;
}

@keyframes bounce {
  0%{transform: translateY(0);
    animation-timing-function: ease-out;
  }
  50% {transform: translateY(-35px);
    animation-timing-function: ease-in;
  }
}

@keyframes eyemove {
  50% { transform: translateY(5px); }
  100% { transform: translateY(0px); }
}




@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}


@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@-moz-keyframes fade-in { /* Firefox */
  from { opacity: 0; }
  to   { opacity: 1; }
}
@-webkit-keyframes fade-in { /* Safari and Chrome */
  from { opacity: 0; }
  to   { opacity: 1; }
}}

</style>
