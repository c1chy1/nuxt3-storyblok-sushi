import { defineStore } from "pinia";



export const useShare = defineStore('share', () => {

    const { fetchRecipeBySlug } = useRecipes()


    console.log(fetchRecipeBySlug)


    const TWITTER = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@c1chysushi' },
        {
            hid: 'twitter:title',
            name: fetchRecipeBySlug,
            content: 'c1chy sushi',
        },
        {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: 'c1chy.Sushi is sushi recipe app xx built with Nuxt 3, Storyblok, and Unocss',
        },
        {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
        },
        {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: 'c1chy.Sushi Preview',
        },
    ]





    return {
        TWITTER
    }
})
