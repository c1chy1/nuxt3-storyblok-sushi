import { Ref } from 'vue'

const state = reactive({
    recipes: []
})

const locale = useState('locale')
export function useRecipes(filter?: Ref<string>, category?: Ref<string>) {
    const storyblokApi = useStoryblokApi()

    async function fetchRecipes() {
        let params = {
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'recipes/',
            resolve_relations: 'category',
            is_startpage: false,
            language: locale.value
        }

        if (category?.value) {
            params = {
                ...params,
                filter_query: {
                    category: {
                        in: category.value,
                    },
                },
            }
        }

        const {data} = await storyblokApi.get('cdn/stories/', params)


        state.recipes = data.stories.map(recipe => ({
            ...recipe,
            content: {
                ...recipe.content,
                category: data.rels.find(({ uuid }) => uuid === recipe.content.category),
            },
        }))

    }

    async function fetchRecipeBySlug(slug: string) {
        try {
            const { data } = await storyblokApi.get('cdn/stories/', {
                version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
                starts_with: 'recipes/',
                by_slugs: '*/' + slug,
                resolve_relations: 'category',
                is_startpage: false,
                language: locale.value
            })
            const story = data.stories[0]
            story.content.category = data.rels.find(({ uuid }) => uuid === story.content.category)
            return story
        } catch (error) {
            console.error(error)
        }
    }

    const filteredRecipes = computed(() =>
        state.recipes.filter(
            recipe =>
                recipe.content.title.toLowerCase().includes(filter.value.toLowerCase())
        ),

    )

    return {
        ...toRefs(state),
        fetchRecipes,
        fetchRecipeBySlug,
        filteredRecipes,
    }
}
