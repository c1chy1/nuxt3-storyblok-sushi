<template>



<main>
<!--  <SectionIntro/>-->
  <LayoutNavigation/>
  <ButtonsDarkModeButton/>
    <IconsLogo/>

  <transition name="scale-slide">
    <NuxtPage class="page mt-16" />
  </transition>

  <IconsShareIcons/>
</main>
</template>

<script setup lang="ts">

const router = useRouter()

useState('locale', () => 'en')


</script>
