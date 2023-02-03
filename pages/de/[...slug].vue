<script setup>
let { slug } = useRoute().params
onBeforeMount(() => {
  useState('locale').value = 'de'
})
const resolveRelations = ['recipes-list']
const story = await useStoryblok(
    slug && slug.length > 0 ? slug.join('/') : 'home',
    {
      version: 'draft',
      language: 'de',
      resolve_relations: resolveRelations,
    },
    {
      resolveRelations,
    }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
