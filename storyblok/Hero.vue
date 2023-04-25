<template>

  <header id="hero" class="hero container h-screen mx-auto flex flex-col  px-2  sm:px-4 md:px-8  lg:px-12 xl:px-16 2xl:px-28">
    <div class="flex justify-end sm:justify-between  sm:h-auto xl:pt-12 flex-col-reverse sm:flex-row mx-auto">

      <div class="w-full sm:w-1/2">
        <NuxtImg
                preload
            format="webp"
            quality="100"
            width="500"
            height="500"
            sizes="sm:150px lg:250px  xl:500px "
            class="mx-auto"
            src="https://res.cloudinary.com/dy8wzssqw/image/upload/w_500,f_auto/v1682449796/sushi-hero_toxlsw.png"
            alt="sushi c1chy"
            decoding="async"
        />

      </div>
      <div class=" p-4 md:p-4 mt-6 lg:mt-24 w-full sm:w-1/2 lg:w-2/5">
        <h1 class="text-shrimp-600 text-center lg:text-left font-display text-base lg:text-3xl font-bold mb-4">
          {{ blok.title }}
        </h1>
        <p class="mb-8  text-xs lg:text-base">{{ blok.text }}</p>
        <ul class="flex justify-end">
            <li v-for="(action, index) in blok.actions" class="mr-4">
            <NuxtLink :to="action.link.cached_url" v-if="index === 0">
              <StoryblokComponent :blok="action" />
            </NuxtLink>

          </li>
          <ButtonsInstallApp/>
        </ul>
      </div>
    </div>
  </header>
</template>
<script defer setup lang="ts">
 defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
 const {locale} = useI18n()

const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''

</script>
