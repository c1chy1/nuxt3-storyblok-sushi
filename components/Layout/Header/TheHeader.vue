<template>
  <header class="fixed top-0 w-full h-24 bg-shrimp-400 dark:bg-shrimp-900 z-30 transition-all duration-500">
    <div class="container   h-full mx-auto flex items-center justify-around">

      <NuxtLink :to="localeUrl() || '/'"
                class="logo flex items-center font-display text-3xl font-bold text-gray-800 dark:text-white transition-all">
        <img src="/logo.svg" class="h-10 w-10 mr-2" alt="Sushi Wuut"/>
        c1chy<span class="text-shrimp-600  ">Sushi</span>
      </NuxtLink>

      <nav>
        <ul class="flex bg-shrimp-400 dark:bg-shrimp-900  items-center space-x-8 text-lg font-bold transition-all duration-500">

          <li class="flex relative">
            <span
                v-for="loc in locales"
                :class="{ 'bg-black text-white ': (loc === locale) }"
                class="block uppercase px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer transition-all duration-500"
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
import {useColorModeStore} from '~/stores/darkMode'
const colorModeStore = useColorModeStore()
const colorModeIcon = computed(() => colorModeStore.isDarkMode ? 'ph:moon-duotone' : 'ph:sun-duotone')


const router = useRouter()
const locales = ['en', 'de', 'pl']
const locale = useState('locale')
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
const changeLocale = (loc) => {
  locale.value = loc
  router.push({path: localeUrl() || '/'})
}


</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>
