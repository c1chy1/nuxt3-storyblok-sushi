<script setup lang="ts">

const { locale } = useI18n()
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''

defineProps<{
  uuid: string
  content: any
  slug: string
}>()
</script>
<template>
<!--  <article class="bg-white dark:bg-shrimp-900  rounded-lg overflow-hidden shadow-2xl" :key="uuid">
    <NuxtLink :to="`${localeUrl()}/recipes/${slug}`" >
      <NuxtImg
          preload
          loading="lazy"
          aspect-ratio="16/9"
                provider="storyblok"
                format="webp"
                sizes="sm:100vw md:75vw lg:[600px] xl:[1200px]" class="w-full aspect-video object-cover"
                :src="content.media.filename"
                :alt="content.media.alt" />
      <div class="p-4 relative min-h-[200px]">
        <h3 class="font-bold text-xl text-shrimp-600 dark:text-dark-paragraph w-1/2">
          {{ content.title }}
        </h3>
        <span class="bg-gray-100 rounded-full absolute right-8 -top-[33px] p-4">
          <img
              class="w-[36px] h-[36px] grayscale contrast-[.25]"
              :src="content.category.content.icon.filename"
              alt=""
          />
        </span>
      </div>
    </NuxtLink>
  </article>-->
  <article>
    <NuxtLink :to="`${localeUrl()}/recipes/${slug}`" >
    <div class="card-hover w-full relative text-right rounded-xl">

      <div class="card-hover__content h-1/3 ">
        <h3 class="card-hover__title mx-auto w-2/3 font-bold text-lg text-shrimp-600 dark:text-dark-paragraph w-1/2">
          {{ content.title }}
        </h3>
        <p class="card-hover__text"> {{ content.description }}</p>

        <span class="absolute rounded-full w-32  left-0 top-10 p-4">
          <img
              class="icon  w-12 h-12 grayscale contrast-[.25]"
              :src="content.category.content.icon.filename"
              alt=""
          />
        </span>
        <a href="#" class="card-hover__link">
          <span>Learn How</span>
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
      <div class="card-hover__extra">

        <h4>Learn <span>now !<br></span> it's very<span> simple!</span></h4>
      </div>

      <NuxtImg
          preload
          loading="lazy"
          aspect-ratio="16/9"
          provider="storyblok"
          format="webp"
          sizes="sm:100vw md:75vw lg:[600px] xl:[1200px]" class="card__img w-full aspect-video object-cover"
          :src="content.media.filename"
          :alt="content.media.alt" />
    </div>
    </NuxtLink>
  </article>


</template>
<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap');

$firaSans: 'Fira Sans', sans-serif;


.card-hover {
  $root: &;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0,0,0,0.08);

  &:has(#{$root}__link:hover) {

    #{$root}__extra {
      transform: translateY(0);
      transition: transform 0.35s;
    }
  }

  &:hover {
    #{$root} {
      &__content {
        background-color: white;
        bottom: 100%;
        transform: translateY(100%);
        transition: all 0.35s cubic-bezier(.1,.72,.4,.97);
      }
      &__link {
        opacity: 1;
        transform: translate(-50%, 0);
        transition: all 0.3s 0.35s cubic-bezier(.1,.72,.4,.97);
      }
      &__text {
        opacity: 1;
        transition: all 0.3s 0.35s cubic-bezier(.1,.72,.4,.97);
      }
    }

    .card__img {
      transform: translateY(100%);
      transition: 0.35s 0.1s transform cubic-bezier(.1,.72,.4,.97);
    }
  }

  &__content {
    width: 100%;
    text-align: center;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.35s 0.35s cubic-bezier(.1,.72,.4,.97);
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      background-color: inherit;
      position: absolute;
      left: 0;
      z-index: -1;
    }

    &::before {
      top: -80px;
      clip-path: ellipse(60% 80px at bottom center);
    }

    &::after {
      bottom: -80px;
      clip-path: ellipse(60% 80px at top center);
    }
  }

  &__title {

    span {
      color: #2d7f0b;
    }
  }

  &__text {
    font-size: 0.75rem;
    opacity: 0;
  }

  &__link {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    color: #2d7f0b;
    opacity: 0;
    padding: 10px;
    transition: all 0.35s;

    &:hover {

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      width: 18px;
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
    font-size: 1.5rem;
    text-align: center;
    background-color: #86b971;
    padding: 80px;
    bottom: 0;
    z-index: 0;
    color: #dee8c2;
    transform: translateY(100%);
    will-change: transform;
    transition: transform 0.35s;

    span {
      color: #2d7f0b;
    }
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
    transition: 0.35s 0.35s transform cubic-bezier(.1,.72,.4,.97);
  }
}

</style>
