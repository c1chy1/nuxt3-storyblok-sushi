<template>



<main>
<!--  <SectionIntro/>-->
  <LayoutNavigation/>
  <ButtonsDarkModeButton/>
    <IconsLogo/>
      <NuxtPage class="page mt-16" />
  <IconsShareIcons/>
</main>
</template>

<script setup lang="ts">

const router = useRouter()

useState('locale', () => 'en')


</script>
