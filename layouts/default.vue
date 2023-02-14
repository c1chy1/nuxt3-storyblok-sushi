<template>
  <TheHeader />
  <div class="page mt-16">
    <slot />
  </div>
</template>

<script setup lang="ts">
useState('locale', () => 'en')

</script>
