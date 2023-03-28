<template>
  <main>


    <LayoutNavigation/>
    <ButtonsDarkModeButton/>
    <IconsLogo/>
    <slot class="overflow-y-hidden w-full"/>
    <IconsShareIcons/>
  </main>
</template>


<script setup lang="ts">

const locale = useState('locale')

</script>

