<template>
  <header class="fixed   top-0 w-full h-24 dark:bg-dark-navigation z-50">
    <div class="container   h-full mx-auto flex items-center justify-around">

      <NuxtLink :to="localeUrl() || '/home'"
                class="logo flex items-center font-display text-3xl font-bold text-gray-800 dark:text-white transition-all">
        <img src="/logo.svg" class="h-10 w-10 mr-2" alt="Sushi Wuut"/>
        c1chy<span class="text-shrimp-600 ">Sushi</span>
      </NuxtLink>

      <nav>
        <ul class="flex  items-center space-x-8 text-lg font-bold transition-all duration-300">

          <li class="flex relative">
            <span
                v-for="loc in locales"
                :class="{ 'bg-black text-white': (loc === locale) }"
                class="block uppercase px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer"
                @click="changeLocale(loc)"
            >
              {{ loc }}
            </span>
            <button
                type="button"
                @click="colorModeStore.switchColorMode"
                class="transition-all"
            >



              <ClientOnly>
                <Icon :name="colorModeIcon" size="48" class="absolute top-0"/>
              </ClientOnly>
            </button>
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup lang="ts">
import {useColorModeStore} from '@/stores/darkMode'

import { gsap } from "gsap";

console.log(gsap)



const colorModeStore = useColorModeStore()
const colorModeIcon = computed(() => colorModeStore.isDarkMode ? 'ph:moon-duotone' : 'ph:sun-duotone')


const router = useRouter()
const locales = ['en', 'de', 'pl']
const locale = useState('locale')
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
const changeLocale = (loc) => {
  locale.value = loc
  router.push({path: localeUrl() || '/home'})
}


</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>
