<template>
  <main>
<!--      <Intro/>-->

    <LayoutNavigation/>
    <ButtonsDarkModeButton/>
    <IconsLogo/>
    <slot class="overflow-y-hidden w-full"/>
    <IconsShareIcons/>
  </main>
</template>


<script setup lang="ts">

useState('locale', () => 'en')

</script>

