<template>
  <div class="content items-center fixed xl:flex-col left-3 xl:left-12 bottom-4 xl:-bottom-0 z-30">
    <button aria-label="Open" title="Open" role="button" class="shareButton h-6 w-6  lg:h-10 lg:w-10 p-2 lg:p-4 flex justify-center items-center main bg-[#FA6A14] dark:bg-dark-navigation"
            :class="[{ open : show  } , check ? '' : 'sent']"
            @click="open">

      <svg class="share fill-white  h-5 w-5  lg:h-6 lg:w-6 "  viewBox="0 0 24 24">
        <path
            d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
      </svg>
      <svg class="check fill-white h-5 w-5 lg:h-6 lg:w-6  "  viewBox="0 0 24 24">
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
      <svg class="close dark:fill-white h-5 w-5"  viewBox="0 0 24 24">
        <path
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
      </svg>
    </button>
    <ShareNetwork
        network="facebook"
        url="https://c1chyapp.de"
        :title="title.value"
        description=""
        class="delay-500 transition-all ease-in-out"
        :class="show ? 'rotate-0 ' : '-rotate-45'"


    >
    <button aria-label="share facebook" title="share facebook" role="button" class="shareButton fb bg-[#FA6A14] dark:fill-white p-1.5 lg:p-3 lg:h-8 lg:w-8 opacity-0  dark:bg-dark-navigation" @click="close" :class="{open : show}">
      <Icon class="h-5 w-5 mx-auto" name="ri:facebook-fill"/>
    </button>
    </ShareNetwork>
    <ShareNetwork
        network="twitter"
        url="https://c1chyapp.de"
        :title="title.value"
        class="delay-[750ms] transition-all ease-in-out"
        :class="show ? 'rotate-0 ' : '-rotate-45'"

    >
    <button  aria-label="share twitter" title="share twitter" role="button"  class="shareButton tw  bg-[#FA6A14] dark:fill-white p-1.5 lg:p-3 lg:h-8 lg:w-8 opacity-0 dark:bg-dark-navigation" @click="close" :class="{open : show}">
   <Icon class="h-5 w-5 mx-auto" name="prime:twitter"/>
    </button>
    </ShareNetwork>
    <ShareNetwork
        network="telegram"
        url="https://c1chyapp.de"
        :title="title.value"
        class="delay-1000 transition-all ease-in-out"
        :class="show ? 'rotate-0 ' : '-rotate-45'"


    ><button aria-label="share telegram" title="share telegram" role="button"  class="shareButton ig bg-[#FA6A14] dark:fill-white p-1.5 lg:p-3 lg:h-8 lg:w-8 opacity-0 dark:bg-dark-navigation" @click="close" :class="{open : show}">
      <Icon class="h-5 w-5 mx-auto" name="icon-park:telegram"/>
    </button>
    </ShareNetwork>

  </div>
</template>
<script setup lang="ts">


const { locale } = useI18n()
const route = useRoute();
const title = ref()

useHead({


  title: 'c1chy.Sushi',
  htmlAttrs: {
    lang:  locale.value,
  }
})


watch(route, value => {

  if(locale.value === "en") title.value = 'Your favorite Japanese recipes app'
  if(locale.value === "de") title.value = 'Ihre Lieblings-App für japanische Rezepte'
  if(locale.value === "pl") title.value = 'Twoja ulubiona aplikacja z Japońskimi przepisami'


}, {deep: true, immediate: true})

const show = ref();
const check = ref(true);
const open = () => {
  show.value = !show.value
  check.value = true
}
const close = () => {
  show.value = false
  check.value = !check.value
}

</script>

<style scoped lang="sass">

.content
  display: flex
  justify-content: center

  border-radius: 5px
  .shareButton.main
    .share, .close, .check
      position: absolute
      transition: all 150ms
    .share, &.open .close, &.sent .check
      transform: scale(1) !important
      opacity: 1
    .close, &.open .share, .check, &.sent .share
      opacity: 0
      transform: scale(0)


.shareButton, .shareButton.open
  border: none
  border-radius: 50%
  overflow: hidden
  outline: none
  margin: 0.5rem
  width: 24px
  height: 24px
  box-sizing: content-box
  transition: all 200ms
  position: relative
  opacity: 1
  transform: scale(1)
  box-shadow: 0 0 0 rgba(0, 0, 0, 0)
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA81BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5eXnBwcHf39/Z2dna2trX19fa2trd3d3d3d3g4ODg4ODj4+Pj4+Pl5eXk5OTm5ubl5eXn5+fo6Ojp6enn5+fp6ens7Ozq6urr6+vr6+vt7e3s7Ozt7e3t7e3u7u7w8PDw8PDw8PDy8vLy8vLn5+f09PTn5+fy8vLn5+fp6enx8fHr6+vq6urs7Ozr6+vr6+vv7+/x8fHw8PDw8PDv7+/v7+/t7e3t7e3u7u7r6+vr6+vu7u7t7e3t7e3u7u7r6+vq6urq6urr6+vs7Ozr6+tWIAHaAAAAUXRSTlMAAQIDBAUGBwgJCgsVKVdYWVpaWltbZGRsbHFxdXV4foGBhIeJi4yQkJGUlpiZm5yenp+foKCnqaqqsbK0tba3w8TFxsbIydPU1dXb3N3d4uOSbqQHAAABdElEQVR42q2TbVOCQBSFg4UFAXtPJZVFQWRxUROj0jRR0UxL/v+vCQhdZ2zGL96vz86Ze885e3GuYfbzL2RZADgOAJY9fsCwgOOhEA/kOcAyR5QXREmORxIFPuOUclCU7/uLaBv2bmURcn+c0pwyXAYj3x9NVwMll3KqDHP5n8lT2yXEbXvBJp+DVJ8BvKh8v3eIg+0mdkhnvFFEHjB7aUEaTjotbJmGYVq41QneJCGWzzAvPiw9ght1HaFavYGJt7wW+R0GUHoO2o5VR1q1qqG65bTnPQmCHRbkxcjFpq49qqWyVjOxOwplIcNsjCOf2AaqqoWiWkVGk/jbGLOHuBnjUrGgVpBhEz9K8F48TMRrWllVy5q+E6er9afZapVstW68Gj3s7jM9rIaQnh72dZkcRm0ZBIe2zF4yW6ip49RUOzH1Y70zlUayCbwsktmaRkIDHazmSaDz1SsN9LAON70wisLuFa3DiTKdrOLpIh9/gzPNL7Z6NKvvS5JoAAAAAElFTkSuQmCC), auto
  &:hover
    transform: scale(1.1) translateY(-3px)
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25)
  &:active
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAABAlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZma5ubm4uLi8vLy6urrT09PU1NTS0tLS0tLT09PZ2dnY2Njb29vc3Nzd3d3g4ODf39/f39/h4eHa2trh4eHY2Nja2trg4ODa2tri4uLj4+PX19fZ2dnX19fk5OTl5eXl5eXn5+fo6Ojo6Ojm5ubp6enq6urs7Ozo6Ojt7e3u7u7v7+/p6eno6Ojp6enr6+vq6urq6urc3Nzb29vc3Nzm5ubm5ubk5OTl5eXk5OTm5ubd3d3e3t7d3d3e3t7f39/e3t7f39/e3t7e3t7d3d2Z9AvaAAAAVnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBk+QUFDXV9gYWNscHB2eH2AgYaJiYqKiouLi4yMjY2Sk5WYmZqam52en6KisLGxsbKztre3v8DIyMnJ09PV1tfY4OXm50OBxC8AAAFqSURBVCjPjZPZSsNAFIY7WyZJXQpFLFpEn0IoxRbfW0VFUXwDwStRW6RKUUkyq2cmUxPXOJNcHL6c/6xBrb8O+mLaXygKhvXPZ4paCCFn2Za1dsEDBYQwXKAGrvugosAIJrikRhsdMFpAQmm/l1CVPdwppY3xGPkXA+PDzGQGJ4RcCMddbE8xpqw9mAmICLF59zSTCrzLOhCmNNmbaA3hvNE7EoBB21HQ5ePnXGorJWOIsKR9VoB2SQmJdjbnQonC+caMRp2bewFKvguEsl30UuhXr0yWCF+2l1I5y1EWjZ6EKHIoBGMS84h3ToSs6P5UirwAMQjD44itH9bphy9Q8I1Xa77f4q6oqxDX59zfhpxl7iiPIOfraci5rHc0z6p607RWL7SH8fFEufY4g2wcCLXoVdnndDgryj7H3eO86nOYERsYmWsaE3yu6jNy2o6vbaVUvd0+Agvj/8duNOxVw0427HPTv/DTeQcndQotgtF9KQAAAABJRU5ErkJggg==), auto
  svg
    display: block
  opacity: 1
    transition: all 150ms

.fb, .shareButton.open.ig
  transition-delay: 150ms
.tw, .shareButton.open.tw
  transition-delay: 150ms
.ig, .shareButton.open.fb
  transition-delay: 150ms
.fb, .tw, .ig
  width: 0
  height: 0
  overflow: hidden
  margin: 0
  opacity: 0
  transform: scale(0)

</style>
