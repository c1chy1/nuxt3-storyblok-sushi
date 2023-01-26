<script setup>


const route = useRoute()

const slug = route.params.slug
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with: "jobs/",
  by_slugs: "jobs/" + slug,

});
const story = data.stories[0];

</script>



<template>

  <StoryblokComponent v-if="story" :blok="story.content" />

</template>
