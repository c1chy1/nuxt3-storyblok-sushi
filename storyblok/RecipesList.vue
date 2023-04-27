<template>
  <section v-if="blok" class="recipes-list w-full">
    <div class="container mx-auto py-20 px-2  sm:px-4 md:px-8  lg:px-12 xl:px-16 2xl:px-28">
      <h2 class="text-shrimp-700 font-display text-2xl pl-7 sm:pl-0 lg:text-4xl font-bold mb-8 lg:mb-16 w-2/3">
{{blok.title}}
      </h2>
      <div class="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-6 2xl:gap-y-12 ">
        <lazy-SectionRecipeCard
            v-for="{ uuid, content, slug } in recipes"
            :key="uuid"
            :uuid="uuid"
            :content="content"
            :slug="slug"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useRecipes} from "~/composables/useRecipes";

defineProps<{

  blok:{
    title:string,

  }}>();

const { recipes, fetchRecipes } = useRecipes()

await fetchRecipes()
</script>
