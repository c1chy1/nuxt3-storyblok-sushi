
<template>
<section>
      <header v-if="story" class="relative  mt-16 lg:my-32 container mx-auto px-4 md:px-0">


<!--        <ButtonsSocial
            :title="story.content.title"
            :url="'https://c1chy-sushi.netlify.app/recipes/' + slug"
            :media="story?.content.media.filename"

        />-->

        <ShareNetwork
            network="twitter"
            :url="`https://c1chy-sushi.netlify.app/recipes/ + ${slug}`"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to `Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite,javascript"
            twitterUser="youyuxi"
        >
          <i class="fab fah fa-lg fa-twitter"></i>
          <span>Share on Twitter</span>
        </ShareNetwork>


        <ShareNetwork
            network="facebook"
            url="https://c1chy-sushi.netlify.app/home/"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite,javascript"
            twitterUser="youyuxi"
        >
          <i class="fab fah fa-lg fa-twitter"></i>
          <span>Share on Twitter</span>
        </ShareNetwork>
<!--        <ShareNetwork
            network="facebook"
            :url="href"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        >
          <img
              src="../../public/icon.png"
              alt=""
          />
        </ShareNetwork>-->


        <div class="flex  justify-end w-full lg:w-1/2">
          <NuxtImg
              loading="lazy"
              preload
              provider="storyblok"
              format="webp"
              aspect-ratio="16/9"
              sizes="sm:50vw md:75vw lg:[600px] xl:[1200px]"
              class="mx-auto w-full lg:w-11/12 lg:mr-4  object-cover rounded-lg aspect-square"
              :src="story.content.media.filename"
              :alt="story.content.media.alt"
          />
        </div>
        <div
            class="bg-white dark:bg-dark-buttonText dark:bg-opacity-90 dark:contrast-[.80] rounded-lg overflow-hidden md:shadow-md md:px-8 py-8 w-full md:absolute md:w-1/2 top-4 right-8"
        >
        <h1 class="text-shrimp-700 font-display text-center text-xl lg:text-left lg:text-4xl font-bold mb-12 lg:w-2/3">
          {{ story.content.title }}
        </h1>
          <span class="bg-gray-100 rounded-full absolute right-8 p-4">
          <img
              class="w-[36px] h-[36px] grayscale contrast-[.25]"
              :src="story.content.category.content.icon.filename"
              alt=""
          />
        </span>
        <ul class="flex mb-12 px-6 lg:px-2 border-b border-gray-200 pb-4 text-gray-400 ">
          <li class="flex items-center mr-4 text-sm lg:text-base dark:text-dark-paragraph transition-all">
            <ClientOnly>
              <Icon name="ic:outline-more-time"  size="28"/>
            </ClientOnly>
            <span class="ml-2">{{ story.content.prep_time }} mins</span>
          </li>
          <li class="flex items-center text-sm lg:text-base dark:text-dark-paragraph transition-all">
            <ClientOnly>
              <Icon name="mdi:user-group"  size="28"/>
            </ClientOnly>
            <span class="ml-2">Serves {{ story.content.comensales }}</span>
          </li>
        </ul>

          <div class="test prose prose-ul:font-display lg:text-xl leading-3 prose-li:text-dark-buttonText prose-li:dark:marker:text-dark-paragraph prose-li:dark:text-dark-paragraph prose-li:marker:text-dark-buttonText px-8 md:px-0 prose-li:pl-0 text-red  dark:prose-invert prose-img:rounded-xl prose-li:transition-all">
          <RichTextRenderer :document="story.content.ingredients"></RichTextRenderer>
        </div>
      </div>

      </header>
      <div class="mx-auto pt-6 lg:pt-4 prose prose-headings:dark:text-dark-buttonBackground prose-p:font-display lg:text-xl prose dark:prose-invert px-8 md:px-0 prose-img:rounded-xl transition-all">
        <RichTextRenderer v-if="story.content.steps" :document="story.content.steps"></RichTextRenderer>
      </div>

  <AnimationsSushi :story="story" />
</section>
</template>

<script setup lang="ts">

import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const route = useRoute()
const { slug } = route.params
const { fetchRecipeBySlug } = useRecipes()
const story = await fetchRecipeBySlug(slug as string)

const locale = useState('locale')



useHead(
    {
      title: ` ${story.content.title}- c1chy.Sushi`,

      htmlAttrs: {
        lang: locale.value,
      },
      meta: [

        {
          hid: 'description',
          name: 'c1chy Sushi description',
          content: story?.content.description,
        },
        // og
        {
          hid: 'og:description',
          property: 'og:description',
          content: story?.content.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:  `${story.content.title}- c1chy.Sushi`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://c1chy-sushi.netlify.app/recipes/${slug}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: story?.content.media?.filename,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: "alt image c1chy sushi",
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@c1chy' },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content:  `${story.content.title}- c1chy.Sushi`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: story?.content.description,
        },

        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://c1chy-sushi.netlify.app/recipes/${slug}`,
        },

        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: story?.content.media?.filename,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: "Twitter alt",
        },
      ]
    }
)


</script>
