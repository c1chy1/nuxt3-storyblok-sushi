<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <button
      class="font-bold font-sans border-2 rounded-full px-2 py-1.5"
      :class="
      blok.type === 'solid'
        ? 'bg-shrimp-600 text-white border-transparent  dark:border-dark-buttonBackground dark:text-dark-buttonText dark:bg-dark-buttonBackground'
        : 'bg-white text-shrimp-600 border-shrimp-600  dark:border-dark-buttonBackground dark:text-dark-buttonText dark:bg-dark-buttonBackground'
    "
  >
    {{ blok.label }}
  </button>
</template>
