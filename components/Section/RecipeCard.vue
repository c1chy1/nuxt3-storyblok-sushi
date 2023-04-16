<template>
  <article class="rounded-lg overflow-hidden shadow-2xl w-64 sm:w-full h-full  max-w-xs mx-auto " :key="uuid">
    <div class="card-hover  h-[28rem] sm:[h-24rem]    lg:h-[32rem]  mx-auto  group w-full relative text-right rounded-xl ">
      <div class="card-hover__content  after:bg-white before:bg-white dark:after:bg-shrimp-900  dark:before:bg-shrimp-900 max-h- dark:bg-shrimp-900 text-base font-display bg-white  flex flex-col items-center h-2/5 lg:h-1/3 ">
        <h3 class="card-hover__title mx-auto w-5/6 lg:w-full font-bold text-base lg:text-xl font-display text-shrimp-600 dark:text-shrimp-300 px-2 z-50">
          {{ content.title }}
        </h3>
        <p class="card-hover__text group-hover:translate-y-[90%] lg:group-hover:translate-y-[120%]  2xl:group-hover:translate-y-[130%] dark:text-dark-paragraph w-4/5 text-xs lg:text-sm z-50 absolute top-4 lg:top-2 ">
          {{ content.description }}</p>

        <img
            class="absolute lg:relative mt-16  lg:mt-6 group-hover:ml-4  px-auto  dark:text-red dark:contrast-[1]
              group-hover:translate-x-[90px] group-hover:scale-75 group-hover:translate-y-[65px]
            lg:group-hover:translate-x-[100px] lg:group-hover:scale-50 xl:group-hover:scale-75 lg:group-hover:translate-y-[90px]  lg:group-hover:absolute  w-16 h-16 grayscale contrast-[.25] z-50 transform transition-all  duration-500 "
            :src="content.category.content.icon.filename"
            alt=""
        />

        <NuxtLink :to="`${localeUrl()}/recipes/${slug}`"
                  class="card-hover__link dark:bg-shrimp-900  dark:text-shrimp-300 text-xl lg:text-2xl text-shrimp-600 font-semibold  font-display invisible  group-hover:visible  absolute flex justify-center items-end  left-0 top-0 w-full h-full z-30"

        >
          <span v-if="localeLang === 'en'" >Learn How</span>
          <span v-if="localeLang === 'pl'" >Naucz się jak</span>
          <span v-if="localeLang === 'de'" >Lern wie</span>
          <svg class=" w-6 lg:w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </NuxtLink>
      </div>
      <div class="card-hover__extra text-[#55423d] text-2xl font-mono  rounded-lg">
        <h4  v-if="localeLang === 'en'"  >Learn <span class="text-[#9A3C03]">now!<br></span> it's very<span  class="text-[#9A3C03]"> simple!</span></h4>
        <h4  v-if="localeLang === 'pl'" >Naucz <span class="text-[#9A3C03]">się !<br></span> to bardzo<span  class="text-[#9A3C03]"> proste!</span></h4>
        <h4  v-if="localeLang === 'de'" >Lern <span class="text-[#9A3C03]">jetzt !<br></span> es ist<span  class="text-[#9A3C03]"> einfach!</span></h4>
      </div><NuxtImg
        preload
        loading="lazy"
        aspect-ratio="16/9"
        provider="storyblok"
        format="webp"
        width="100"
        height="100"
        sizes="sm:100px md:200px lg:400px" class="card__img w-full rounded-lg aspect-video object-cover"
        :src="content.media.filename"
        :alt="content.media.alt"/>
    </div>
  </article>


</template>

<script setup lang="ts">
const { locale } = useI18n()
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
const localeLang = locale.value

defineProps<{
  uuid: string
  content: any
  slug: string
}>()
</script>
<style scoped lang="scss">




@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap');

$firaSans: 'Fira Sans', sans-serif;


.card-hover {
  $root: &;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);

  &:has(#{$root}__link:hover) {

    #{$root}__extra {
      transform: translateY(0);
      transition: transform 0.5s;
      transition-delay: 200ms;
    }
  }

  &:hover {
    #{$root} {

      &__content {
        bottom: 100%;
        transform: translateY(100%);
        transition: all 0.5s cubic-bezier(.1, .72, .4, .97);

        h3 {

          transform: translateY(10%) scale(0.8);
        }

      }



      &__link {
        transition: all 0.3s 0.5s cubic-bezier(.1, .72, .4, .97);
        opacity: 1
      }

      &__text {

        opacity: 1;
        transition: all 0.3s 0.5s cubic-bezier(.1, .72, .4, .97);
      }

    }

    .card__img {
      transform: translateY(100%);
      transition: 0.25s 0.1s transform cubic-bezier(.1, .72, .4, .97);
    }
  }

  &__content {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.5s;
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      /*      background-color: inherit;*/
      position: absolute;
      left: 0;
      z-index: -1;
    }

    &::before {
      top: -80px;
      transition: all 0.5s;
      clip-path: ellipse(60% 80px at bottom center);
    }

    &::after {
      transition: all 0.5s;
      bottom: -80px;
      clip-path: ellipse(60% 80px at top center);
    }
  }
  &__text {
    opacity: 0;
  }


  &__link {
    flex-wrap: wrap;
    text-decoration: none;
    padding: 10px;
    transition: all 0.5s;
    opacity: 0;

    &:hover {

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      margin-left: 4px;
      transition: transform 0.3s;
    }
  }

  &__extra {
    height: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background-color: #FCA673;
    padding: 40px;
    bottom: 0;
    z-index: 0;
    transform: translateY(100%);
    will-change: transform;
    transition: transform 0.5s;

  }

  .card__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    transform: translateY(0);
    transition: 0.5s 0.5s transform cubic-bezier(.1, .72, .4, .97);
  }
}

</style>
