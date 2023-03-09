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
<style>
.page-enter-from {

  opacity: 0;
  transform: translateY(100px);
}
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
/* .page-enter, */
.page-leave-to {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
#smooth-content {
  will-change: transform;
}

</style>
