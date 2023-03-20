<script setup>
const { slug } = useRoute().params;
const { locale } = useI18n(); // Read the locale
const resolveRelations = ['categories']
const storyblokApiInstance = useStoryblokApi();
const url = slug && slug.length > 0 ? slug.join('/') : 'home';
const { data } = await useAsyncData(
    `${locale.value}-${url}`,
    async () => await storyblokApiInstance.get(
        `cdn/stories/${url}`,
        {
          version: 'draft',
          language: locale.value, // Send the locale
          resolve_relations: resolveRelations, // Resolved for the API request
        }
    )
);
const story = useState(`${locale.value}-${url}`, () => data.value.data.story);
onMounted(() => {
  if (story.value && story.value.id) {
    useStoryblokBridge(
        story.value.id,
        (evStory) => (story.value = evStory),
        {
          resolveRelations, // Resolved for the Storyblok Bridge
        }
    );
  }
});

</script>


<template>


  <LayoutSeoHead
      title="c1chy.Sushi"
      url="https://c1chy-sushi.netlify.app/"
      image="https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"

  />
  <main role="main">
<!--
    <LayoutSeoHead
        :title="slug"

    />
-->
<!--    <ButtonsSocial
    title="c1chy sushi facebook"
    url="https://c1chy-sushi.netlify.app/"
    />-->

<ShareNetwork
    network="facebook"
    url="https://c1chy-sushi.netlify.app/"
    title="facebook title"
    description="description"
    class="text-gray-600 hover:text-gray-900 widget"

> Facebook</ShareNetwork>

    <ShareNetwork
        network="twitter"
        url="https://c1chy-sushi.netlify.app/"
        title="facebook title"
        description="description"
        class="text-gray-600 hover:text-gray-900 widget"

    > Twitter</ShareNetwork>

    <ShareNetwork
        network="telegram"
        url="https://c1chy-sushi.netlify.app/"
        title="whatsapp title"
        description="description he he he"
        class="text-gray-600 hover:text-gray-900 widget"

    > Telegram</ShareNetwork>

    <ShareNetwork
        network="whatsapp"
        url="https://c1chy-sushi.netlify.app/"
        title="whatsapp title"
        description="description he he he"
        class="text-gray-600 hover:text-gray-900 widget"

    > Whatsapp</ShareNetwork>



  <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
