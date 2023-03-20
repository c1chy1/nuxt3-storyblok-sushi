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

console.log(story)

/*useServerSeoMeta({

  title: ()=> story.content.meta_data.title,
  ogTitle: ()=> story.content.metadata.title,
  description: ()=> story.content.metadata.description,
  ogDescription: ()=> story.content.metadata.description,

})*/



defineOgImageStatic({

title: "tytuł",
  description  : "opis"
})
/*useServerSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})*/
/*
useHead({

  meta:  [
    { hid: "og:site_name", property: "og:site_name", content: "c1chy.Sushi" },
    { hid: "og:type", property: "og:type", content: "website" },


    {
      hid: "og:title",
      property: "og:title",
      content: "c1chy.Sushi",
    },

    {
      hid: "og:description",
      property: "og:description",
      content: "Your favorite Japanese recipes app",
    },


    {
      hid: "og:url",
      property: "og:url",
      content: "https://c1chy-sushi.netlify.app/",
    },

    {
      hid: "og:image:type",
      property: "og:image:type" ,
      content: "image/png"
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"    },

    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url" ,
      content: "https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"
    },
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      content: '300',
    },
    {
      hid: 'og:image:height',
      name: 'og:image:height',
      content: '200',
    },


    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'c1chy.Sushi Preview',
    },


    { property: 'og:updated_time', content: new Date().toISOString() },
  ]
})
*/



</script>


<template>

<!--
  <LayoutSeoHead
      title="c1chy.Sushi"
      url="https://c1chy-sushi.netlify.app/"
      image="https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"

  />-->
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
