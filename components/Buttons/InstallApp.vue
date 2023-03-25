<template>
  <li>
    <button
        type="button"
        class="font-bold  font-sans text-xs lg:text-base border-2  px-2 py-1.5 relative bg-shrimp-600 text-white border-transparent hover:text-dark-buttonText dark:hover:text-white  dark:border-dark-buttonBackground dark:text-dark-buttonText dark:bg-dark-buttonBackground"
        @click="installApp"

    ><div v-if="isInstallable"

      >
        <span class="bg-shrimp-600 dark:bg-dark "/>
        <span class="bg-shrimp-600 dark:bg-dark"/>
        {{ label }}
        <span class="bg-shrimp-600 dark:bg-dark"/>
        <span class="bg-shrimp-600 dark:bg-dark"/>
      </div>
      <button
          :disabled="!isInstallable"
              :title="label + ' / Chrome / Android'"
              class=" px-2 md:px-4  xl:px-8" v-else>
      <Icon name="zondicons:hand-stop"  />
      </button>
    </button>

  </li>


</template>

<script lang="ts" setup>

import {storeToRefs} from "pinia";
import {useInstallationStore} from "~/stores/installation";



const emit = defineEmits(["close"]);


const installationStore = useInstallationStore();
const {isInstallable} = storeToRefs(installationStore);

const {locale} = useI18n()
const label = ref()
onMounted(() => {

  if (locale.value === "en") label.value = 'Install'
  if (locale.value === "de") label.value = 'Installieren'
  if (locale.value === "pl") label.value = 'Zainstaluj'

})

function installApp() {

  installationStore.installApp().then(() => emit("close"));
}

</script>

<style lang="scss">

button {

  border-radius: 0.5em;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
}

button:disabled,
button[disabled] {

  cursor: not-allowed;
}

button span {
  position: absolute;
  width: 25%;
  height: 100%;
  transform: translateY(150%);
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.5s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}

button:hover span {
  transform: translateY(0) scale(2);
}

button span:nth-child(1) {
  --n: 1;
}

button span:nth-child(2) {
  --n: 2;
}

button span:nth-child(3) {
  --n: 3;
}

button span:nth-child(4) {
  --n: 4;
}


/*
.button {
  border: 1px solid black;
  background-color: red;
  color: white;
  padding: 15px;
}
button:disabled,
button[disabled] {
  border: 1px solid black;
  background-color: grey;
  color: white;
  padding: 15px;
  cursor: not-allowed;
}
*/


</style>
