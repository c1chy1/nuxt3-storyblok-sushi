<template>
  <div>
    <NavHamburger
        @show-menu.once="toggleMenu" @click="open"
    />


    <nav id="menu"
         ref="menu"
         class="w-0 h-0 z-40"

    >
      <ul class="menu-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Our Team</a></li>
      </ul>
    </nav>
  </div>

</template>

<script setup lang="ts">

let menu;


onMounted(() => {

  menu = document.querySelector('#menu')


  /*  tl.timeScale(1.6);
    tl.to(cube.value, 0.7, {
      translate: '25% 25%',
      rotation: 45,
      width: '150px',
      height: '150px',
      ease: "Expo.easeOut"
    }, 'first');
    tl.to("svg", 0.3, {rotate: -45}, 'first');
    tl.to(vertical.value, 0.3, {height: '0', ease: "Power1.easeIn"}, 'first');
    tl.to(horizontal.value, 0.3, {width: '0',  ease: "Power1.easeIn"}, 'first');
    tl.to('#quadrant_0', 0.15, {x: -5, y: -5 , borderRadius : 10}, 'seperate');
    tl.to('#fade-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
    tl.to('#quadrant_1', 0.15, {x: 5, y: -5, borderRadius : 10}, 'seperate');
    tl.to('#fade-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
    tl.to('#quadrant_2', 0.15, {x: -5, y: 5, borderRadius : 10}, 'seperate');
    tl.to('#fade-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
    tl.to('#quadrant_3', 0.15, {x: 5, y: 5, borderRadius : 10}, 'seperate');
    tl.to('#fade-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');*/


})


const { isOpenMenu,closeMenu,toggleMenu , openMenu } = useMenu()




/*let tl = gsap.timeline({paused: true});*/




/*
function buttonClicked() {
  tl.to(img, {display: 'none', duration: 0.2 });
  tl.to(btn, { scaleX: 50, scaleY: 50, duration: 0.2 });
  tl.to(close, {display: 'block'})
  tl.to(menu, { display: 'block', position: 'fixed', y: 40, duration: 0.3 });
}
function closeMenu() {
  tl.reverse();
}
*/


/*
tl.to(menu, 0.6, {
  width: '100%',
  height: '0.5%',
}, '-=0.2')
.to(menu, 0.4, {
  height: '100%',
  ease: "Bounce.easeOut"
}, '-=0.2')
*/

function open() {




  /*  if (isOpenMenu.value){

      openMenu()
    } else {
      tl.play(0)
      closeMenu()
    }
    console.log(isOpenMenu.value)*/
}


console.log(document.getElementById('menu'))
</script>

<style scoped lang="scss">



.button {
  z-index: 4000000000000000!important;
  width: 40px;
  height: 40px;
  background-color: #b1a1c7;
  position: relative;
  transition: all .2s ease-in-out;
}
.menu {
  z-index: 4000000000000000!important;
  display: none;
}
img {
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close {
  display: none;
  position: absolute;
  top: 5%;
  left: 2%;
}
.menu-button {
  border: 0;
  background-color: transparent;
  padding: 15px;
  border-radius: 50px;
  margin: 10px;
  width: 60px;
  height: 60px;
  z-index: 999999;
  outline: none;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: yellow;
    .menu-bar {
      background-color: black;
    }
  }

  .menu-bar {
    width: 30px;
    height: 2px;
    background-color: black;
    position: relative;
    margin: 4px 0;
    transform-origin: center center;
  }
}

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
  position: absolute;
  top: 50%;
  left: 50%;
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
