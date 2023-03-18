<script setup>
let { slug } = useRoute().params
onBeforeMount(() => {
  useState('locale').value = 'pl'
})
const resolveRelations = ['category']
const story = await useStoryblok(
    slug && slug.length > 0 ? slug.join('/') : 'home',
    {
      version: 'draft',
      language: 'pl',
      resolve_relations: resolveRelations,
    },
    {
      resolveRelations,
    }
)

useHead(
    {
      title: ` index - c1chy.Sushi`,

      htmlAttrs: {
        lang: "pl",
      },
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
  <StoryblokComponent v-if="story" :blok="story.content" />

</template>
