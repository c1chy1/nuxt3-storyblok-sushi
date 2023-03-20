<template><div v-if="false"></div></template>

<script setup lang="ts">
const { WEBSITE_URL } = useRuntimeConfig()


interface Props {
  title: string
  description: string
  image: string
  url: string
}
const props = defineProps<Props>()
useHead({
  title: props.title,
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: props.description,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: props.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: props.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: "https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png",
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: props.title,
    },


    {
      hid: 'og:url',
      property: 'og:url',
      content: props.url,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: props.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: props.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: props.image},
    {
      hid: "og:image:type",
      property: "og:image:type" ,
      content: "image/png"
    },

    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: props.image},
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: props.title,
    },
  ],
})
</script>
