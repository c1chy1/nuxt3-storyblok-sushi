<template>
  <div class="sushi-container bg-[#BBBBAA] dark:bg-dark top-0 left-0 absolute flex flex-col  items-center  z-50 h-screen transition-all">
    <div class="chopstick-container ">
      <div class="chopstick1"></div>
      <div class="chopstick2"></div>
    </div>
    <div class="roll  ">
      <div class="rice"></div>
      <div class="seaweed"></div>
      <div class="salmon"></div>
      <div class="eye-left"></div>
      <div class="shine-left"></div>
      <div class="eye-right"></div>
      <div class="shine-right"></div>
      <div class="mouth"></div>
      <div class="tongue"></div>

    </div>
    <div class="dish -bottom-16"></div>
  </div>
</template>

<script setup lang="ts">


/*var restart = document.querySelector(".seaweed");
restart.onclick = function() {
  slowbounce.reverse();
}*/

import gsap from 'gsap'
const beginAnimation =  gsap.timeline();

onMounted(()=> {

  start();
})

function start() {

  beginAnimation.from('.sushi-container',3,{y:-0, ease:"Back.easeOut"})
      .to('.chopstick-container', 1.5, {top: 325}, 1.5)
      .to('.chopstick1', 2, {rotation:10}, 3.5)
      .to('.chopstick2', 2, {rotation:-10}, 3.5)

      .to('.shine-left', .5, {left:'36.3%'}, 4.2)
      .to('.shine-right', .5, {left:'45.5%'}, 4.2)
      .to('.mouth', .5, {borderRadius: '90% 90% 10% 10%'}, 4.2)
      .to('.shine-left', .5, {left:'35%',top:'68.8%',width:'16px',height:'16px'}, 5.2)
      .to('.roll', 1, {animation:'shake 1s 4'}, 2)
      .to('.shine-right', .5, {left:'44%',top:'69.8%',width:'16px',height:'16px'}, 5.2)
      .to('.sushi-container',0.6,{ease:"Power4.easeOut", y:'-100%'}, 6.7)
}

</script>

<style>

.sushi-container {

  position: relative;

  /*animation: bounce 2s infinite;*/
}
.roll {

  display: flex;
  height: 500px;
  width: 500px;
  position: relative;
}
.chopstick-container {
  height: 500px;
  width: 500px;
  position: relative;
}


.rice {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 230px;
  height: 50px;
  border-radius: 50%;
  background-color: #fef3d4;
  border: 3px solid black;
  box-shadow: inset -30px -5px 0 3px #ffeab1;
  z-index: 1;
}
.seaweed {
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%);
  width: 230px;
  height: 150px;
  background-color: #2e362a;
  border-radius: 0 0 40% 40%;
  border: 3px solid black;
  box-shadow: inset -10px 0 0 10px #21271f;
}
.salmon {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%);
  width: 130px;
  height: 40px;
  background-color: #ff4f20;
  border-radius: 50% 50% 30% 30%;
  border: 3px solid black;
  box-shadow: inset -40px -20px 0 0 #ff3600;
  z-index: 2;
}
.eye-left {
  position: absolute;
  top: 68%;
  left: 35%;
  transform: translate(-50%);
  width: 18px;
  height: 18px;
  background-color: #000;
  border-radius: 50%;
  border: 3px solid black;
}
.shine-left {
  position: absolute;
  top: 69.2%;
  left: 34.1%;
  transform: translate(-50%);
  width: 5px;
  height: 5px;
  background-color: #e7e7e7;
  border-radius: 50%;
}
.eye-right {
  position: absolute;
  top: 69%;
  left: 44%;
  transform: translate(-50%);
  width: 18px;
  height: 18px;
  background-color: #000;
  border-radius: 50%;
  border: 3px solid black;
}
.shine-right {
  position: absolute;
  top: 70%;
  left: 43.3%;
  transform: translate(-50%);
  width: 5px;
  height: 5px;
  background-color: #e7e7e7;
  border-radius: 50%;
}
.mouth {
  position: absolute;
  top: 75%;
  left: 35.7%;
  transform: translate(-50%) rotate(3deg);
  width: 30px;
  height: 20px;
  background-color: #000;
  border-radius: 0 0 90% 90%;
}
.tongue {
  position: absolute;
  top: 77.3%;
  left: 37%;
  transform: translate(-50%) rotate(3deg);
  width: 17px;
  height: 5px;
  background-color: #ff1233;
  border-radius: 50%;
}
.chopstick1 {
  position: absolute;
  top: 1%;
  left: 52%;
  transform: translate(-50%) rotate(-20deg);
  border-top: 480px solid #b48f48;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  height: 0;
  width: 10px;
  z-index: 3;
}
.chopstick2 {
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translate(-50%) rotate(-5deg);
  border-top: 450px solid #907031;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  height: 0;
  width: 10px;
  -ms-transform: rotate(-5deg); /* IE 9 */
  -webkit-transform: rotate(-5deg); /* Safari */
}


.dish
{
  position: absolute;

  z-index:-1;
  width: 350px;
  height: 350px;
  background:rgb(243 244 246);
  border-radius:50%;
  transform:rotateX(60deg);
  -webkit-box-shadow:inset 0px 0 0 35px #FFF;
  -moz-box-shadow:inset 0px 0 0 35px #FFF;
  -o-box-shadow:inset 0px 0 0 35px #FFF;
  box-shadow:inset 0px 0 0 35px #FFF;
}

/*.heart {
  background-color: #ff4f20;
  display: inline-block;
  height: 15px;
  position: absolute;
  top: 40%;
  left: 49%;
  transform: rotate(-45deg);
  width: 15px;
}
.heart:before,
.heart:after {
  content: "";
  background-color: #ff4f20;
  border-radius: 50%;
  height: 15px;
  position: absolute;
  width: 15px;
}
.heart:before {
  top: -8px;
  left: 0;
}
.heart:after {
  left: 8px;
  top: 0;
}*/

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
}

</style>
