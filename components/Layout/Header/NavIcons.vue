<template>
  <div v-for="item in icons" :key="icons.name"
       :id="item.id"
       class="quadrant__item  my-1 w-0 sm:my-4   lg:w-1/2 h-1/6 lg:h-1/2 xl:my-0 bg-shrimp-500 lg:bg-shrimp-600 dark:bg-dark-navigation transition-all  shadow-2xl  border-dark dark:border-white active:border-2 "
       @click="changeLocale(item.loc)">
    <div
        @click="close"
        class="quadrant__item__content   lg:absolute transform lg:-translate-x-1/2 lg:-translate-y-1/2"
    ><component
            class=" w-12 h-12 opacity-0 "
        :is="item.icon" :id="item.name">
    </component>
    </div>
  </div>
    <div
      @click="close"
     id="quadrant_3"
      class="quadrant__item  my-1 w-0 sm:my-4  lg:w-1/2 h-1/6 lg:h-1/2 xl:my-0 bg-shrimp-500 lg:bg-shrimp-600 dark:bg-dark-navigation transition-all  shadow-2xl  border-dark dark:border-white active:border-2 "
  >
    <NuxtLink
        class="flex justify-center"
        :to="localePath('recipes')">
      <SearchIcon
    id="fade-down"
    class=" w-16 h-16 opacity-0 "/>
  </NuxtLink>
  </div>

</template>

<script setup lang="ts">
 defineProps({
  close : Function
})

import SearchIcon from "~/components/Icons/SearchIcon.vue";
 const localePath = useLocalePath()
const router = useRouter()
 const locale = useState('locale')


const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : '/'
const changeLocale = (loc:any ) => {
  locale.value = loc
  router.push({path: localeUrl() || '/'})
}


const id = 0
const number = ref(0)

const icons = shallowRef([
  {
    loc: "pl",
    id: `quadrant_${number.value++}`,
    name: "fade-up",
    icon: defineComponent({
      render: () =>
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'xl:arrow-up'}, [
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
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'xl:arrow-right'}, [
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
    loc: "",
    id: `quadrant_${number.value++}`,
    name: "fade-left",
    icon: defineComponent({
      render: () =>
          h('svg', {height: '40px', fill: '#973928', viewBox: '0 0 496 496', class: 'xl:arrow-left'}, [
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


])


</script>

<style scoped>
.quadrant__item {

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

}

#quadrant_0 {

  border-top-left-radius: 12px;
}
#quadrant_1 {
  border-top-right-radius: 12px;

}
#quadrant_2 {
  border-bottom-left-radius: 12px;
}
#quadrant_3 {
  border-bottom-right-radius: 12px;
}


.quadrant__item__content {
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
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

</style>
