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
      class="font-bold font-sans border-2 rounded-full px-2 py-1.5 relative"
      :class="
      blok.type === 'solid'
        ? 'bg-shrimp-600 text-white border-transparent  dark:border-dark-buttonBackground dark:text-dark-buttonText dark:bg-dark-buttonBackground'
        : 'bg-white text-shrimp-600 border-shrimp-600  dark:border-dark-buttonBackground dark:text-dark-buttonText dark:bg-dark-buttonBackground'
    "
  >
    {{ blok.label }}
    <span></span><span></span><span></span><span></span>
  </button>


</template>


<style>
button {
  --c: #ffc0ad;
  color: var(--c);
  font-size: 16px;
  border: 0.3em solid var(--c);
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

button span {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: var(--c);
  transform: translateY(150%);
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.5s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}

button:hover {
  color: #271c19;
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




</style>
