<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
const route = useRoute()
const { slug } = route.params
const { fetchRecipeBySlug } = useRecipes()
const story = await fetchRecipeBySlug(slug as string)


console.log(story)

</script>
<template>
    <div class="text-gray-600">
      <header v-if="story" class="relative mb-24 container mx-auto px-4 md:px-0">
        <div class="flex justify-end w-full md:w-1/2">
          <NuxtImg
              loading="lazy"
              preload
              provider="storyblok"
              format="webp"
              aspect-ratio="16/9"
              sizes="sm:50vw md:75vw lg:[600px] xl:[1200px]"
              class="object-cover"
              :src="story.content.media.filename"
              :alt="story.content.media.alt"
          />
        </div>
        <div
            class="bg-white rounded-lg overflow-hidden md:shadow-md md:px-8 py-8 w-full md:absolute md:w-1/2 top-4 right-8"
        >
        <h1 class="text-shrimp-500 font-display text-4xl font-bold mb-8 w-2/3">
          {{ story.content.title }}
        </h1>
          <span class="bg-gray-100 rounded-full absolute right-8 p-4">
          <img
              class="w-[36px] h-[36px] grayscale contrast-[.25]"
              :src="story.content.category.content.icon.filename"
              alt=""
          />
        </span>
        <ul class="flex mb-8 border-b border-gray-200 pb-4">
          <li class="flex items-center mr-4">
            <ClientOnly>
              <Icon name="ic:outline-more-time"  size="28" class="dark:text-dark-buttonText "/>
            </ClientOnly>
            <span class="ml-2">{{ story.content.prep_time }} mins</span>
          </li>
          <li class="flex items-center">
            <ClientOnly>
              <Icon name="mdi:user-group"  size="28" class="dark:text-dark-buttonText"/>
            </ClientOnly>
            <span class="ml-2">Serves {{ story.content.comensales }}</span>
          </li>
        </ul>
          <div class="mx-auto prose px-8 md:px-0 prose-img:rounded-xl prose:pl-0">
          <RichTextRenderer :document="story.content.ingredients"></RichTextRenderer>
        </div>
      </div>
    </header>
      <div class="mx-auto prose prose px-8 md:px-0 prose-img:rounded-xl ">
        <RichTextRenderer v-if="story.content.steps" :document="story.content.steps"></RichTextRenderer>
      </div>
    </div>
</template>
