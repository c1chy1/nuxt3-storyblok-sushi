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























useHead(
    {
      title: ` home - c1chy.Sushi`,
      meta: [

        {
          hid: 'description',
          name: 'c1chy Sushi description',
          content: "test",
        },
        // og
        {
          hid: 'og:description',
          property: 'og:description',
          content: "c1chy Sushi description",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `c1chy Sushi title`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://c1chy-sushi.netlify.app/home/`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: "https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png",
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: "alt image c1chy sushi",
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@c1chy' },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Twitter title`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Twitter description",
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: "https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png",
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: "Twitter alt",
        },
      ]
    }
)


</script>


<template>

  <main role="main">

    <ShareNetwork
        network="facebook"
        url="https://c1chy-sushi.netlify.app/home/"
        title="CV online."
        description="I'm mohammad sharifi programmer front-end."
        hashtags="vuejs,javascript"
    >
      Share
    </ShareNetwork>

    <ShareNetwork
        network="twitter"
        url="https://c1chy-sushi.netlify.app/home/"
        title="CV online."
        description="I'm mohammad sharifi programmer front-end."
        hashtags="vuejs,javascript"
    >
      Share Twitter
    </ShareNetwork>

  <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
