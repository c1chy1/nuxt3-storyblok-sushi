<template>
  <header class="z-40 bottom-8 right-4 h-10 w-12 fixed">
    <div class="nav-container flex items-center h-12 p-2 rounded-full bg-shrimp-600 transition-all transform delay-1000 print:invisible"
         :class="isOpenMenu ? 'dark:bg-transparent' : 'dark:bg-dark-navigation'"
    >
      <input
        class="checkbox flex items-center p-2 "
        type="checkbox"
        name="menu"
       v-model="isOpenMenu"
        aria-label="Menu"
      />
      <div for="menu" class="hamburger-lines w-[28px] h-[23px]  mx-auto flex flex-col justify-between">
        <span class="line line1 drop-shadow-2xl"></span>
        <span class="line line2 drop-shadow-2xl"></span>
        <span class="line line3 drop-shadow-2xl"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
/*import { useNavStore } from "~/stores/nav";
let store = useNavStore();*/
const {isOpenMenu } = useMenu()
const emit = defineEmits(["showMenu"]);
emit("showMenu");


</script>

<style scoped>
.nav-container {
  position: relative;

}
.nav-container .checkbox {

  position: absolute;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {

  z-index: 2;

}

.nav-container .hamburger-lines .line {
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 10px;
  background: white;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
  transition-delay: 0.5s;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
  transition-delay: 0.5s;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0 100%;
  transition: transform 0.4s ease-in-out;
  transition-delay: 0.5s;
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}
</style>
