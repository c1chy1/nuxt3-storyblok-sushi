<template>


  <TheHeader />
   <slot class="page mt-16" />

</template>

<script setup lang="ts">
useState('locale', () => 'en')
</script>
