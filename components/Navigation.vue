<template>



  <button @click="store.toggleMenu" :class="{ active : !store.navOpen}" class="menu-button" ref="menuButton">
    <div class="menu-bar"></div>
    <div class="menu-bar"></div>
    <div class="menu-bar"></div>
  </button>
  <nav id="menu" ref="menu">
    <ul class="menu-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Our Team</a></li>
    </ul>
  </nav>


<!--  <nav class="fixed  right-24 bottom-[7rem] z-20  rounded-lg dark:bg-transparent transition-all">
    <div class="cube w-16 h-16 shadow-2xl rounded-lg" ref="cube" @mouseenter="playTimeline" @mouseleave="reverseTimeline">
      <div class="plus ">
        <div class="plus-horizontal bg-white " ref="horizontal"></div>
        <div class="plus-vertical bg-white" ref="vertical"></div>
      </div>
      <div class="quadrant ">
        <div v-for="item in icons" :key="icons.name"
             :id="item.id" class="quadrant__item bg-[#FA6A14] dark:bg-dark-navigation  shadow-2xl  border-dark dark:border-white active:border-2 "
             @click="changeLocale(item.loc)">
          <div class="quadrant__item__content  "
          ><component
              :is="item.icon" :id="item.name">
          </component>
          </div>
        </div>
      </div>
    </div>
  </nav>-->
</template>


<script setup lang="ts">
import gsap from "gsap";
import SearchIcon from "~/components/SearchIcon.vue";
const router = useRouter()
const locale = useState('locale')
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
const changeLocale = (loc ) => {
  locale.value = loc
  router.push({path: localeUrl() || '/home'})
}
const id = 0
const cube = ref()
const horizontal = ref()
const vertical = ref()
const number = ref(0)
const icons = shallowRef([
  {
    loc: "pl",
    id: `quadrant_${number.value++}`,
    name: "fade-up",
    icon: defineComponent({
      render: () =>
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'arrow-up'}, [
            h('path', {
              d: 'M0,249.2v121.6c0,27.2,21.6,46.4,48,46.4h400c26.4,0,48-19.2,48-46.4V249.2H0z',
              style: 'fill:#E13E3E'
            }),
            h('path', {
              d: 'M248,249.2l197.6,168c26.4,0,50.4-19.2,50.4-46.4V249.2H248z',
              style: 'fill:#D12A2A'
            }),
            h('path', {
              d: 'M448,78.8H48c-26.4,0-48,21.6-48,48.8v121.6h496V127.6C496,100.4,474.4,78.8,448,78.8z',
              style: 'fill:#FFFFFF'
            }),
            h('path', {
              d: 'M448,78.8H48l200,170.4h248V127.6C496,100.4,474.4,78.8,448,78.8z',
              style: 'fill:#E9F3F4'
            }),
            h('path', {
              d: 'M496,370c0,28.8-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48',
              style: 'fill:#C11414'
            }),
            h('path', {
              d: 'M48,78.8h400c26.4,0,48,21.6,48,48.8v88.8',
              style: 'fill:#D9ECED'
            }),
          ]),
    }),
  },
  {
    loc: "de",
    id: `quadrant_${number.value++}`,
    name: "fade-right",
    icon: defineComponent({
      render: () =>
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'arrow-right'}, [
            h('path', {
              d: 'M0,304v65.6C0,396.8,21.6,416,48,416h400c26.4,0,48-19.2,48-46.4V304H0z',
              style: 'fill:#F8D12E'
            }),
            h('path', {
              d: 'M448,80H48C21.6,80,0,99.2,0,126.4V192h496v-65.6C496,99.2,474.4,80,448,80z',
              style: 'fill:#333333'
            }),
            h('rect', {
              width: '496',
              height: '112',
              style: 'fill:#DB2727',
              y: '192'
            }),
            h('path', {
              d: 'M446.4,416c26.4,0,49.6-19.2,49.6-46.4V304H315.2L446.4,416z',
              style: 'fill:#DBB30F'
            }),
            h('path', {
              d: 'M448,80H48l132.8,112H496v-65.6C496,99.2,474.4,80,448,80z',
              style: 'fill:#202121'
            }),
            h('polygon', {
              d: '',
              style: 'fill:#C10E0E',
              points: '316,304 496,304 496,192 180,192 '
            }),
            h('path', {
              d: 'M448,80H48l370.4,112H496v-65.6C496,99.2,474.4,80,448,80z',
              style: "fill:black"
            }),
            h('polygon', {
              style: 'fill:#A00808',
              points: '496,214.4 496,192 414.4,192'
            }),
            h('path', {
              d: 'M496,368.8c0,29.6-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48',
              style: 'fill:#D89F12'
            }),
          ]),
    }),
  },
  {
    loc: "en",
    id: `quadrant_${number.value++}`,
    name: "fade-left",
    icon: defineComponent({
      render: () =>
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'arrow-left'}, [
            h('path', {
              d: 'M496,369.6c0,27.2-21.6,46.4-48,46.4H48c-26.4,0-48-19.2-48-46.4V126.4C0,99.2,21.6,80,48,80h400 c26.4,0,48,19.2,48,46.4V369.6z',
              style: 'fill:#29337A'
            }),
            h('path', {
              d: 'M48,80h400c26.4,0,48,19.2,48,46.4v243.2c0,27.2-25.6,46.4-52,46.4',
              style: 'fill:#1B265B'
            }),
            h('path', {
              d: 'M48,80h400c26.4,0,48,19.2,48,46.4V216',
              style: 'fill:#111D49'
            }),
            h('path', {
              d: 'M496,368.8c0,27.2-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48',
              style: 'fill:#111D49'
            }),
            h('polygon', {
              points: '272,248 442.4,80 394.4,80 248,226.4 101.6,80 53.6,80 224,248 53.6,416 101.6,416 248,269.6 394.4,416 442.4,416',
              style: 'fill:#FFFFFF'
            }),
            h('polygon', {
              points: '102.4,368 53.6,416 101.6,416 149.6,368',
              style: 'fill:#D9ECED'
            }),
            h('polygon', {
              points: '346.4,368 394.4,416 442.4,416 393.6,368',
              style: 'fill:#D9ECED'
            }),
            h('polygon', {
              points: '411.2,386.4 272,249.6 442.4,80 394.4,80 248,226.4 101.6,80 53.6,80 85.6,110.4',
              style: 'fill:#D9ECED'
            }),
            h('polygon', {
              points: '496,216 280,216 280,80 216,80 216,216 0,216 0,280 216,280 216,416 280,416 280,280 496,280 ',
              style: 'fill:#FFFFFF'
            }),
            h('rect', {
              x: '216',
              y: '368',
              width: '64',
              height: '48',
              style: 'fill:#D9ECED'
            }),
            h('polygon', {
              points: '496,216 280,216 280,80 216,80 216,216 0,216 0,280 216,280 216,416 280,416 280,280 496,280 ',
              style: 'fill:#D9ECED'
            }),
            h('polygon', {
              points: '496,232 264,232 273.6,232 432.8,80 416.8,80 264,232 264,80 232,80 232,232 232,232 77.6,80 63.2,80 216,232 0,232 0,264 216.8,264 67.2,416 81.6,416 232,264 232,416 264,416 264,265.6 418.4,416 432.8,416 280,264 496,264 ',
              style: 'fill:#E51D35'
            }),
            h('rect', {
              x: '232',
              y: '368',
              width: '32',
              height: '48',
              style: 'fill:#AF0026'
            }),
            h('polygon', {
              points: '114.4,368 67.2,416 81.6,416 129.6,368',
              style: 'fill:#AF0026'
            }),
            h('polygon', {
              points: '369.6,368 418.4,416 432.8,416 384,368',
              style: 'fill:#AF0026'
            }),
            h('polygon', {
              points: '278.4,232 432.8,80 416.8,80 264,232 264,80 232,80 232,232 232,232 77.6,80 63.2,80 151.2,167.2 343.2,328.8 280,264 496,264 496,232 264,232',
              style: 'fill:#AF0026'
            }),
          ]),
    }),
  },
  {
    id: `quadrant_${number.value++}`,
    name: "fade-down",
    icon: SearchIcon,
    loc:'recipes'
  }
])
var tl = gsap.timeline({paused: true});
function playTimeline(e: any) {
  e.stopPropagation();
  tl.play();
}
function reverseTimeline(e: any) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}
onMounted(() => {
  tl.timeScale(1.6);
  tl.to(cube.value, 0.7, {
    translate: '25% 25%',
    rotation: 45,
    width: '150px',
    height: '150px',
    ease: "Expo.easeOut"
  }, 'first');
  tl.to("svg", 0.3, {rotate: -45}, 'first');
  tl.to(vertical.value, 0.3, {height: '0', ease: "Power1.easeIn"}, 'first');
  tl.to(horizontal.value, 0.3, {width: '0',  ease: "Power1.easeIn"}, 'first');
  tl.to('#quadrant_0', 0.15, {x: -5, y: -5 , borderRadius : 10}, 'seperate');
  tl.to('#fade-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
  tl.to('#quadrant_1', 0.15, {x: 5, y: -5, borderRadius : 10}, 'seperate');
  tl.to('#fade-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
  tl.to('#quadrant_2', 0.15, {x: -5, y: 5, borderRadius : 10}, 'seperate');
  tl.to('#fade-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
  tl.to('#quadrant_3', 0.15, {x: 5, y: 5, borderRadius : 10}, 'seperate');
  tl.to('#fade-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');



  if (store.navOpen) {
    tl.reverse();
    store.navOpen = false;
  } else {
    tl.play();
    store.navOpen = true;
  }


 /* tl.to(bars.value[0], 0.1, {
    top: '5px',
    rotation: 45,
  }, 0)
      .to(bars.value[1], 0.1, {
        opacity: 0
      }, 0)
      .to(bars.value[2], 0.1, {
        top: '-7px',
        rotation: -45,
      }, 0)
      .to('#menu', 0.4, {
        width: '100%',
        height: '0.5%',
      }, '-=0.2')
      .to('#menu', 0.4, {
        height: '100%',
        ease: "Bounce.easeOut"
      }, '-=0.2')
*/

})

import { useNavStore } from "~/stores/nav";
let store = useNavStore();




const menu = ref()

const menuButton = ref()



const open = ref(false)
const bars = ref(['.menu-bar'])

console.log(bars)




   /* .to(menu.value.find('a'), 0.4, {
      opacity: 1
    })*/



/*$(document).ready(function () {
  var bars = $('.menu-bar');
  var menu = $('#menu');
  var menuButton = $('.menu-button');
  var timeline = new TimelineMax({paused: true});
  var open = false;

  timeline
      .to(bars[0], 0.1, {
        top: '5px',
        rotation: 45,
      }, 0)
      .to(bars[1], 0.1, {
        opacity: 0
      }, 0)
      .to(bars[2], 0.1, {
        top: '-7px',
        rotation: -45,
      }, 0)
      .to(menu, 0.4, {
        width: '100%',
        height: '0.5%',
      }, '-=0.2')
      .to(menu, 0.4, {
        height: '100%',
        ease: Bounce.easeOut
      }, '-=0.2')
      .to(menu.find('a'), 0.4, {
        opacity: 1
      })

  menuButton.on('click', function () {
    $(this).toggleClass('active');
    if (open) {
      timeline.reverse();
      open = false;
    } else {
      timeline.play();
      open = true;
    }
  });

  menu.find('a').on('click', function () {
    timeline.reverse();
  });
});*/






</script>

<style scoped lang="scss">

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
  border-radius: 12px;
  flex-wrap: wrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.quadrant__item {
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#quadrant_0 {
  border-top-left-radius: 12px!important;
}
#quadrant_1 {
  border-top-right-radius: 12px!important;
}
#quadrant_2 {
  border-bottom-left-radius: 12px!important;
}
#quadrant_3 {
  border-bottom-right-radius: 12px!important;
}
.quadrant__item__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow-down,
.arrow-left,
.arrow-right,
.arrow-up {
  opacity: 0;
}
.arrow-up {
  transform: translateY(10px);
}
.arrow-down {
  transform: translateY(-10px);
}
.arrow-left {
  transform: translateX(10px);
}
.arrow-right {
  transform: translateX(-10px);
}







.menu-button {
  border: 0;
  background-color: transparent;
  padding: 15px;
  border-radius: 50px;
  margin: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 999999;
  outline: none;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: yellow;
    .menu-bar {
      background-color: black;
    }
  }

  .menu-bar {
    width: 30px;
    height: 2px;
    background-color: red;
    position: relative;
    margin: 4px 0;
    transform-origin: center center;
  }
}

#menu {
  height: 0;
  width: 0;
  position: fixed;
  background-color: lighten(#00ffff, 40%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.menu-nav {
  list-style: none;
  margin: 0;
  padding: 30px 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 2rem;
  overflow: hidden;

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    display: block;
    opacity: 0;
    font-family: 'Space Mono', monospace;

    &:hover {
      background-color: lighten(#00ffff, 60%);
    }
  }
}


</style>
