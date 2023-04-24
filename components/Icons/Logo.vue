<template>
  <div class=" px-4 lg:px-8 container mx-auto flex flex-col z-50">

  <NuxtLink :to="localeUrl() || '/'"
            class=" logo pt-4  flex items-center font-display text-xl lg:text-3xl font-bold text-gray-800 dark:text-white transition-all">
    <img src="/logo.svg" class="h-5 w-6 lg:h-8 lg:w-10 mr-2" alt="Sushi Wuut"/>
    c1chy<span class="text-shrimp-600">Sushi</span>
  </NuxtLink>
  </div>
</template>

<script setup lang="ts">

const {locale} = useI18n()


const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
</script>
