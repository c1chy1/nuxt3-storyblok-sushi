<script setup lang="ts">
/*import { storeToRefs } from "pinia";
import { usePWAInstallation } from "@/stores/pwa.store";
import { useAppStore } from "@/stores/app.store";*/

/*import { usePWAInstallation } from "@/stores/pwa.store";*/
import Modal from "~/components/Modal.vue";

defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})

</script>
<template>
  <div class="hero">

    <div class="flex py-12 justify-between flex-col sm:flex-row mx-auto container font-sans">

      <div class="w-full sm:w-1/2">
        <NuxtImg
            preload
            v-if="blok.media"
            provider="storyblok"
            format="webp"
            quality="100"
            sizes="sm:w-16 md:w-32 lg:50vw xl:70vw"
            class="h-auto"
            :src="blok.media.filename"
            :alt="blok.media.alt"
            :title="blok.media.title"
        />

      </div>

      <div class=" pt-16 w-full sm:w-1/3">
        <h1 class="text-shrimp-600 font-display text-3xl font-bold mb-4">
          {{ blok.title }}
        </h1>
        <p class="mb-8">{{ blok.text }}</p>
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
