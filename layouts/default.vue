<template>


     <Intro/>
    <LayoutNavigation/>
    <ButtonsDarkModeButton/>
    <IconsLogo/>
    <slot class="overflow-y-hidden w-full"/>
    <IconsShareIcons/>

</template>


<script setup lang="ts">

const { locale } = useI18n()

</script>

