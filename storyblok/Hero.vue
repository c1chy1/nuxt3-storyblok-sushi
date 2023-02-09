<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="hero">
    <div class="grid grid-cols-2 mx-auto container font-sans">
      <NuxtImg
          v-if="blok.media"
          provider="storyblok"
          format="webp"
          aspect-ratio="16/9"
          sizes="sm:w-16 md:w-32 lg:50vw xl:40vw"

          :src="blok.media.filename"
          :alt="blok.media.alt"
          :title="blok.media.title"
      />
      <div class="p-4 pt-16">
        <h1 class="text-shrimp-600 font-display text-3xl font-bold mb-4">
          {{ blok.title }}
        </h1>
        <p class="text-xs text-gray-700 mb-8">{{ blok.text }}</p>
        <ul class="flex justify-end">
          <li v-for="action in blok.actions" class="mr-4">
            <NuxtLink to="/recipes">
              <StoryblokComponent :blok="action" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
