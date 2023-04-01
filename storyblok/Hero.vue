<template>

  <div id="hero" class="hero container mx-auto flex flex-col  px-4  md:px-1  lg:px-4 xl:px-8 2xl:px-12">
    <div class="flex pt-8 lg:pt-12 justify-between flex-col sm:flex-row mx-auto  font-sans">

      <div class=" w-full sm:w-1/2">
        <NuxtImg
            preload
            v-if="blok.media"
            provider="storyblok"
            format="webp"
            quality="100"
            sizes="sm:75vw lg:50vw xl:100vw "
            class=" lg:w-full h-full mx-auto"
            :src="blok.media.filename"
            :alt="blok.media.alt"
            :title="blok.media.title"
        />
      </div>
      <div class=" p-4 md:p-4 mt-6 lg:mt-24 w-full sm:w-1/2 lg:w-1/3">
        <h1 class="text-shrimp-600 text-center lg:text-left font-display text-xl lg:text-3xl font-bold mb-4">
          {{ blok.title }}
        </h1>
        <p class="mb-8  text-xs lg:text-base">{{ blok.text }}</p>
        <ul class="flex justify-end">
          <li v-for="(action, index) in blok.actions" class="mr-4" >
            <NuxtLink :to="action.link.cached_url" v-if="index === 0">
              <StoryblokComponent :blok="action" />
            </NuxtLink>

          </li>
          <ButtonsInstallApp/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
 defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
 const {locale} = useI18n()

const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''

</script>
