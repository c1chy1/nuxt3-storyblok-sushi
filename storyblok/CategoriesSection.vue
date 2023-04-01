<template>
  <section
      class="relative categories bg-shrimp-400 dark:bg-dark-background dark:border-b-4 dark:border-dark-paragraph w-full   lg:h-[600px] mt-24 md:mt-[9rem] transition-all duration-700">


    <nuxt-img
        sizes=" 25vw  xl:75vw"
        format="webp"
        aspect-ratio="16/9"
        provider="storyblok"
        class="absolute w-full right-0 -top-12 md:-top-[12rem] z-10"
        src="https://a.storyblok.com/f/193348/1440x506/a5c0bcfea5/tint-orange.png" alt="" />

    <div class="z-10  w-full lg:pb-12 px-8 md:px-0 ">
      <div class="container  px-2  sm:px-4 md:px-8  lg:px-12 xl:px-16 2xl:px-28 mx-auto flex items-center md:justify-between z-10 flex-col-reverse md:flex-row">
        <div class="w-full py-8 md:py-4 md:w-1/2 z-20">
          <h2 class="text-white font-display text-2xl text-center lg:text-left lg:text-4xl font-bold mb-8 w-full md:w-2/3">
            {{ blok.title }}
          </h2>
          <ul class="sm:grid  sm:grid-cols-3 gap-8 py-8 ">
            <li v-for="{ icon, name, uuid  } of formattedCategories" :key="uuid" class="py-4 sm:py-2 sm:last:col-span-3"
            >
              <div
                  class="bg-dark-paragraph dark:bg-dark-navigation shadow-lg rounded-lg p-4 flex flex-col items-center  transition-all duration-700"
              >
                <img
                    class="w-[76px] h-[76px] mb-4"
                    :src="icon.filename"
                    :alt="icon.alt"
                />
                <h3 class="text-shrimp-600 dark:text-dark-paragraph font-display text-xl font-bold mb-4 ">
                  {{ name }}
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-2/3 sm:w-1/3 lg:w-1/4 z-10 mx-auto">

          <NuxtImg
              v-if="blok.media"
              format="webp"
              aspect-ratio="16/9"
              provider="storyblok"
              sizes="sm:100vw md:75vw lg:[600px] xl:[1200px]"
              class="object-cover mx-auto h-full w-full"
              :src="blok.media.filename"
              :alt="blok.media.alt"/>

        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {useCategories} from "~/composables/useCategories";
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  }
})

const {categories, fetchCategories, formattedCategories} = useCategories()
await fetchCategories()
</script>
