
<template>

  <StoryblokComponent v-if="story" :blok="story.content" class="px-10" />

</template>


<script setup lang="ts">



const story = ref(null);
onMounted(async () => {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/Home", {
    version: 'draft',

  });
  story.value = data.story;

  console.log(story)
});
</script>
