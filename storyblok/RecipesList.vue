<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto py-20 px-8 sm:px-0">
      <h2 class="text-shrimp-500 font-display text-2xl lg:px-8 lg:text-4xl font-bold mb-8 lg:mb-16 w-2/3">
{{blok.title}}
      </h2>
      <div class="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:px-8">        <RecipeCard
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

const props = defineProps<{

  blok:{
    title:string,

  }}>();
const locale = useState('locale')

const { recipes, fetchRecipes } = useRecipes()

await fetchRecipes()
</script>
