<template>
  <div class="share-network-list flex fixed justify-end items-center gap-x-2 px-2 py-2">

    <input type="text" v-model=" props.url">
    <ShareNetwork v-for="network in networks"
                  :network="network.network"
                  :title="title"
                  :url="url"
                  :media="media"

                  quote="whesh la zone"
                  class="p-1 bg-trso-blue">
<h2>{{route.fullPath}}</h2>
      <h2>{{title}}</h2>
      <h2>{{media}}</h2>
      <component :is="network.icon" class="h-6 w-6" />  {{network.name}}
    </ShareNetwork>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
   url : String,
  media: String
})

const route = useRoute()
const networks = [
  { network: 'facebook', name: 'Facebook', icon: resolveComponent('IconsFacebook') },
  { network: 'twitter', name: 'Twitter', icon: resolveComponent('IconsTwitter') },
]
const tags = ref('')
onMounted(() => {
  tags.value = props.hashtags?.replace(', ', ',')
})






</script>
