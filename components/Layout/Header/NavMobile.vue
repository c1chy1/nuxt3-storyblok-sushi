<template>
  <div>
    <ButtonsNavHamburger
        @show-menu.once="toggleMenu" @click="toggle"
    />

    <nav id="menu"
         ref="menu"
         class="w-0 h-0 z-40 flex items-center"
    >
      <div class="menu-nav h-full flex flex-col items-center">
      <IconsNavIcons
      :close="toggle"
      />
      </div>
    </nav>
  </div>

</template>

<script setup lang="ts">


import gsap from 'gsap'

let menu = ref(null);
const tl = gsap.timeline({paused:true})



onMounted(() => {
  const links = document.querySelectorAll('.menu-nav svg')
  const divs = document.querySelectorAll('.menu-nav .quadrant__item')

  tl.to(menu.value, 0.5, {
    width: '100%',
    height: '0.5%'
  }, '-=0.2')

      .to(menu.value, 0.5, {
        height: '100%',
        ease: "Bounce.easeOut"
      }, '-=0.2')

      .to(divs, 0.4, {
        width: '50%'
      })

      .to(links, 0.4, {
        opacity:1
  })

})

const { isOpenMenu,closeMenu,toggleMenu , openMenu } = useMenu()



function toggle() {

  if (isOpenMenu.value) {
    tl.reverse();
    closeMenu()
  } else {
    tl.play()
    openMenu()

  }

}
</script>

<style scoped lang="scss">

#menu {
  position: fixed;
  background-color: #FA6A14;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-nav {
  list-style: none;
  margin: 0;
  padding: 30px 0;
  text-align: center;
  width: 100%;
  font-size: 2rem;
  overflow: hidden;

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    display: block;
    opacity: 0;
    font-family: 'Space Mono', monospace;

    &:hover {
      background-color: lighten(#00ffff, 60%);
    }
  }
}


</style>
