<template>
  <div class="container mx-auto  py-10 lg:py-20 px-8">
    <h2 v-if="localeLang === 'en'" class="text-shrimp-500 font-display text-4xl font-bold mb-16 w-2/3">
    Recipes
    </h2>
    <h2 v-if="localeLang === 'de'" class="text-shrimp-500 font-display text-4xl font-bold mb-16 w-2/3">
      Rezepte
    </h2>
    <h2 v-if="localeLang === 'pl'" class="text-shrimp-500 font-display text-4xl font-bold mb-16 w-2/3">
      Recepty
    </h2>
    <div class="w-full flex justify-between py-8 mb-4">
      <div class="form-control w-1/2 flex items-center relative dark:text-dark-buttonText">
        <input type="text" class="w-full  dark:outline-0 bg-gray-200 rounded-lg px-4 py-2 text-sm"
               v-model="filter" />
        <ClientOnly>
          <Icon name="material-symbols:content-paste-search-rounded"  size="28" class="dark:text-dark-buttonText absolute right-4"/>
        </ClientOnly>
      </div>
      <div class="form-control w-1/3 flex  items-center relative dark:text-dark-buttonText">
        <select class="w-full bg-gray-200 dark:outline-0 rounded-lg px-4 py-2 text-sm appearance-none"
                v-model="category">
          <option value="">None</option>
          <option v-for="{ content, uuid  } of categories"
                  :value="uuid">{{ content.label }}</option>
        </select>
        <ClientOnly>
          <Icon name="material-symbols:keyboard-double-arrow-down"  size="28" class="absolute  right-4"/>
        </ClientOnly>
      </div>
    </div>

      <transition-group
          class="content__list"
          name="list"
          tag="div"
          @before-enter="beforeEnter"
          @enter="onEnter"
          :css="false"
          :class="`relative grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12  bottom-6 text-md `"
      >
      <SectionRecipeCard
          v-for="{ uuid, content, slug  } in filteredRecipes"
          :key="uuid"
          :uuid="uuid"
          :content="content"
          :slug="slug"
          :data-index="uuid"
      />
</transition-group>

  </div>
</template>

<style>

</style>

<script setup lang="ts">

import gsap from 'gsap'


const { locale } = useI18n()

const filter = ref('')

const category = ref('')
const { categories, fetchCategories } = useCategories()
await fetchCategories()

const { fetchRecipes , filteredRecipes } = useRecipes(filter, category)
await fetchRecipes()

function beforeEnter(el:any, done:any) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el:any , done:any) {

  gsap.to(el, {
    opacity: 1,
    height: "100%",
    delay: el.dataset.index * 0.15,
    onComplete: done
  });

}


watch(filter, async () => {


  await fetchRecipes()

})

watch(category, async () => {
  await fetchRecipes()
})

const localeLang = locale.value




</script>
<style lang="scss" scoped>

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>
