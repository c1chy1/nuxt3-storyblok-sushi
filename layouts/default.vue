<template>
<main>
  <Intro/>
  <LayoutNavigation/>
  <ButtonsDarkModeButton/>
    <IconsLogo/>
  <slot class="page mt-16 overflow-y-hidden w-full" />
  <IconsShareIcons/>
</main>
</template>

<script setup lang="ts">

const router = useRouter()

useState('locale', () => 'en')


</script>
