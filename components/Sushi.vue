<script setup>
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";


const props = defineProps({

  story : Object

 })



const ctx = ref();
const scope = ref();


onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    ScrollTrigger.update()
  }, 100)

  const timeline = new gsap.timeline({
    defaults: {
      duration: 1,
      transformOrigin: "center",
      ease: "ease"
    }
  });

  ctx.value = gsap.context((self) => {

    const circle1 = self.selector("#bg-01");
    const circle2 = self.selector("#bg-02");
    const bowl = self.selector("#bowl")
    const sushi1 = self.selector("#sushi-01")
    const sushi2 = self.selector("#sushi-02")
    const chopstick1 = self.selector("#chopstick-01")
    const chopstick2 = self.selector("#chopstick-02")
    const heading = self.selector("#heading")


    timeline.from(circle1, {
      x: "-=300",
      opacity: 0,
      scrollTrigger: {
        trigger: scope.value,
        start: '-=200',
        end: 'top 70%',
        scrub: 3,
      },
    })
        .from(circle2, {
          x: "+=300",
          opacity: 0,
          scrollTrigger: {
            trigger: scope.value,
            start: '-=200',
            end: 'top 70%',
            scrub: 3,
          },
        })
        .from(bowl, {
          x: "-=190",
          opacity: 0,
          scrollTrigger: {
            trigger: scope.value,
            /*      start : "top top",
                  pin:true,
                  scrub: 1*/
            start: '-=120',
            end: 'top 40%',
            scrub: 1
          },
        }, "-=1").from(sushi1, {
      duration: 0.4,
      opacity: 0,
      y: "-=400",
      rotation: -70,
      ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: scope.value,
        start: '-=90',
        end: 'top 30%',
        scrub: 1
      },
    }).from(
        sushi2, {
          duration: 0.4,
          opacity: 0,
          y: "-=400",
          rotation: 70,
          ease: "Bounce.easeOut",
          scrollTrigger: {
            trigger: scope.value,
            start: '-=30',
            end: 'top 30%',
            scrub: 1
          },
        },
        "-=0.2"
    ).from(
        chopstick1, {
          duration: 0.4,
          y: -350,
          opacity: 0,
          rotation: 20,
          scrollTrigger: {
            trigger: scope.value,
            start: '0',
            end: 'top 30%',
            scrub: 1
          },
        },
        "-=.7").from(
        chopstick2, {
          duration: 0.4,
          y: -350,
          opacity: 0,
          rotation: 20,
          scrollTrigger: {
            trigger: scope.value,
            start: '0',
            end: 'top 30%',
            scrub: 1
          }
        },
        "-=.4")
        .from(heading, {
          y: 400,
          opacity: 0,
          scrollTrigger: {
            trigger: scope.value,
            scrub: true,
            start: '-15% -15%',
            end: '0'
          },
        })
  }, scope.value)
})

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});


</script>

<template>

  <div
      class=" h-screen  container mx-auto relative flex flex-col justify-center items-center w-full box-border"
      ref="scope"
      id="scope"
  >
    <svg class="xl:w-3/4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1181 595">
      <g id="sushi" transform="translate(-93 -86)">
        <rect id="frame" width="1181" height="595" transform="translate(93 86)" fill="none"/>
        <circle id="bg-01" cx="177" cy="177" r="177" transform="translate(394 186)"
                class="fill-dark-navigation dark:fill-[#f3fcf0]" opacity="0.11"/>
        <circle  id="bg-02" cx="54" cy="54" r="54" transform="translate(866 186)"
                class="fill-dark-navigation dark:fill-[#f3fcf0]" opacity="0.11"/>
        <g  id="bowl" transform="translate(15 27)">
          <path id="Path_7" data-name="Path 7"
                d="M637.812,458.906s52.01,49.079,94.922,66.775,120.291,34.031,165.456,25.545,40.848-52.973,7.524-73.964S763.962,440.672,740.978,451.5s-62.3,16.651-62.3,16.651Z"
                opacity="0.095"/>
          <g id="Group_1" data-name="Group 1" transform="translate(78.005 66.923)">
            <path id="Path_1" data-name="Path 1"
                  d="M604,401.038c-37.5,0-57.444-11.641-75-42.046-19.989-27.228-100-100-100-100s-2.043-25.6,175-25,175,25,175,25-81.83,71.85-100,100S643.047,401.936,604,401.038Z"
                  transform="translate(-0.001)" fill="none" stroke="#1f271b" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="10"/>
            <path id="Path_2" data-name="Path 2" d="M429,273s-3.055,25,175,25,175-25,175-25"
                  transform="translate(0 -14.006)" fill="none" stroke="#1f271b" stroke-width="10"/>
          </g>
        </g>
        <path  id="chopstick-02"
              d="M6.3,259.738V0c5.983,0,6.3,14.393,6.3,14.393S9.984,242.467,8.608,251.987c-1,6.941-1.772,7.881-2.115,7.881a.248.248,0,0,1-.193-.13Zm-2.311-7.751C2.611,242.467,0,14.393,0,14.393S.315,0,6.3,0V259.738a.248.248,0,0,1-.2.13c-.341,0-1.11-.94-2.113-7.881Z"
              transform="translate(927.733 214.295) rotate(43)" fill="#1f271b"/>
        <path ref="chopstick1" id="chopstick-01"
              d="M6.3,259.738V0c5.983,0,6.3,14.393,6.3,14.393S9.984,242.467,8.608,251.987c-1,6.941-1.772,7.881-2.115,7.881a.248.248,0,0,1-.193-.13Zm-2.311-7.751C2.611,242.467,0,14.393,0,14.393S.315,0,6.3,0V259.738a.248.248,0,0,1-.2.13c-.341,0-1.11-.94-2.113-7.881Z"
              transform="matrix(0.848, 0.53, -0.53, 0.848, 871.709, 186.214)" fill="#1f271b"/>
        <g  id="sushi-01"
           transform="matrix(0.899, 0.438, -0.438, 0.899, 408, 224)">
          <g id="Union_3" data-name="Union 3" transform="translate(312 78)">
            <path id="Path_1-2" data-name="Path 1"
                  d="M22.783,34.467A68.972,68.972,0,0,1,6.794,32.811a18.4,18.4,0,0,1-4.749-1.758C1.34,30.635.5,29.986.5,29.263A.976.976,0,0,1,.514,29.1l.1-.584H.5V5.7c0-.723.84-1.373,1.545-1.79A18.4,18.4,0,0,1,6.794,2.156,68.972,68.972,0,0,1,22.783.5,68.974,68.974,0,0,1,38.772,2.156a18.4,18.4,0,0,1,4.749,1.758c.7.417,1.545,1.066,1.545,1.79V28.515h-.114l.1.584a.976.976,0,0,1,.014.164c0,.723-.84,1.373-1.545,1.79a18.4,18.4,0,0,1-4.749,1.758A68.974,68.974,0,0,1,22.783,34.467Z"
                  fill="#1f271b"/>
            <path id="Path_2-2" data-name="Path 2"
                  d="M22.783,33.967A68.47,68.47,0,0,0,38.65,32.326c4.68-1.172,5.916-2.516,5.916-3.063a.468.468,0,0,0-.007-.08l-.2-1.168h.206V5.7c0-.547-1.236-1.892-5.916-3.063A68.47,68.47,0,0,0,22.783,1,68.468,68.468,0,0,0,6.916,2.641C2.236,3.812,1,5.157,1,5.7V28.015h.206l-.2,1.168a.467.467,0,0,0-.007.08c0,.547,1.236,1.892,5.916,3.063a68.468,68.468,0,0,0,15.867,1.641m0,1C10.2,34.967,0,32.413,0,29.263a1.471,1.471,0,0,1,.021-.248H0V5.7C0,2.554,10.2,0,22.783,0S45.566,2.554,45.566,5.7V29.015h-.021a1.47,1.47,0,0,1,.021.248C45.566,32.413,35.366,34.967,22.783,34.967Z"
                  fill="#707070"/>
          </g>
          <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(317.094 80.547)" fill="#fff" stroke="#707070"
             stroke-width="1">
            <ellipse cx="17.83" cy="4.245" rx="17.83" ry="4.245" stroke="none"/>
            <ellipse cx="17.83" cy="4.245" rx="17.33" ry="3.745" fill="none"/>
          </g>
        </g>
        <g id="sushi-02"
           transform="matrix(0.788, -0.616, 0.616, 0.788, 425, 585)">
          <g id="Union_3-2" data-name="Union 3" transform="translate(312 78)">
            <path id="Path_3" data-name="Path 3"
                  d="M22.783,34.467A68.972,68.972,0,0,1,6.794,32.811a18.4,18.4,0,0,1-4.749-1.758C1.34,30.635.5,29.986.5,29.263A.976.976,0,0,1,.514,29.1l.1-.584H.5V5.7c0-.723.84-1.373,1.545-1.79A18.4,18.4,0,0,1,6.794,2.156,68.972,68.972,0,0,1,22.783.5,68.974,68.974,0,0,1,38.772,2.156a18.4,18.4,0,0,1,4.749,1.758c.7.417,1.545,1.066,1.545,1.79V28.515h-.114l.1.584a.976.976,0,0,1,.014.164c0,.723-.84,1.373-1.545,1.79a18.4,18.4,0,0,1-4.749,1.758A68.974,68.974,0,0,1,22.783,34.467Z"
                  fill="#1f271b"/>
            <path id="Path_4" data-name="Path 4"
                  d="M22.783,33.967A68.47,68.47,0,0,0,38.65,32.326c4.68-1.172,5.916-2.516,5.916-3.063a.468.468,0,0,0-.007-.08l-.2-1.168h.206V5.7c0-.547-1.236-1.892-5.916-3.063A68.47,68.47,0,0,0,22.783,1,68.468,68.468,0,0,0,6.916,2.641C2.236,3.812,1,5.157,1,5.7V28.015h.206l-.2,1.168a.467.467,0,0,0-.007.08c0,.547,1.236,1.892,5.916,3.063a68.468,68.468,0,0,0,15.867,1.641m0,1C10.2,34.967,0,32.413,0,29.263a1.471,1.471,0,0,1,.021-.248H0V5.7C0,2.554,10.2,0,22.783,0S45.566,2.554,45.566,5.7V29.015h-.021a1.47,1.47,0,0,1,.021.248C45.566,32.413,35.366,34.967,22.783,34.967Z"
                  fill="#707070"/>
          </g>
          <g id="Ellipse_3-2" data-name="Ellipse 3" transform="translate(317.094 80.547)" fill="#fff" stroke="#707070"
             stroke-width="1">
            <ellipse cx="17.83" cy="4.245" rx="17.83" ry="4.245" stroke="none"/>
            <ellipse cx="17.83" cy="4.245" rx="17.33" ry="3.745" fill="none"/>
          </g>
        </g>
      </g>
    </svg>
    <h1  id="heading" class="heading text-3xl font-display">{{story.content.thanks}}</h1>

  </div>

</template>
