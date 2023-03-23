<template>
  <main>
    <!--  <Intro/>-->


    <!--  <ButtonsInstallApp/>-->


<div v-if="isInstallable"  class="w-80 h-32">
    <button
        type="button"
        class="app-menu__link app-menu__button button"
        @click="installApp"
    >
      <SvgIcon name="plus-icon" class="app-menu__icon" />

      <span class="app-menu__link-name">
              {{ $t("addToHomescreen") }}
            </span>
    </button>

</div>
    <LayoutNavigation/>
    <ButtonsDarkModeButton/>
    <IconsLogo/>
    <slot class="overflow-y-hidden w-full"/>
    <IconsShareIcons/>
  </main>
</template>


<script setup lang="ts">

import { storeToRefs } from "pinia";
import { useInstallationStore } from "~/stores/installation";


const emit = defineEmits(["close"]);

const installationStore = useInstallationStore();
const { isInstallable } = storeToRefs(installationStore);
function installApp() {
  installationStore.installApp().then(() => emit("close"));
}


useState('locale', () => 'en')


</script>
<style lang="scss">
.mainPage {
  background-color: #121445;
  --vw: 1vw;
  @media (min-width: 800px) {
    --vw: 8px;
  }

  &__container {
    max-width: 800px;
    margin: 0 auto;

  }

  &__image {
    width: 50%;
    display: block;
  }

  &__button {
    position: fixed;
    width: 50%;
    height: 30%;
    left: 10%;
    top: 10%;

    &_c {
      background-color: #ECB300 !important;
    }

    &_1 {
      left: calc(6.87 * var(--vw));
      bottom: calc(111.7 * var(--vw));
    }

    &_2 {
      right: calc(9.9 * var(--vw));
      bottom: calc(14.7 * var(--vw));
    }

    &_3 {
      right: calc(6.87 * var(--vw));
      top: calc(372.5 * var(--vw));
    }

    &_4 {
      right: calc(6.1 * var(--vw));
      top: calc(78.88 * var(--vw));
    }
  }
}
</style>
