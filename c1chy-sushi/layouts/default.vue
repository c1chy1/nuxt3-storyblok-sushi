<template>
  <TheHeader />
  <div class="page mt-16">
    <slot />
  </div>
</template>

<script setup>
useState('locale', () => 'en')
</script>
