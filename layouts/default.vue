<template>



<main>
<!--  <Intro/>-->
  <LayoutNavigation/>
  <ButtonsDarkModeButton/>
    <IconsLogo/>

    <NuxtPage class="page mt-16 overflow-y-hidden w-full" />

  <IconsShareIcons/>
</main>
</template>

<script setup lang="ts">

import FadeTransition from "~/components/Transitions/FadeTransition.vue";

const router = useRouter()

useState('locale', () => 'en')


</script>
