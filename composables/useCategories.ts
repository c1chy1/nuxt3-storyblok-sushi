
const state = reactive({
    categories: [],
})

export function useCategories() {
    const {locale} = useI18n()

    const storyblokApi = useStoryblokApi()

    async function fetchCategories() {
        const { data } = await storyblokApi.get(`cdn/stories/`, {
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'categories/',
            is_startpage: false,
            language: locale.value
        })
        state.categories = data.stories
    }




    const formattedCategories = computed(() =>
        state.categories
            .map(({ uuid, content }) => ({
                uuid,
                name : content.label ,
                content,
                icon: content.icon,
            }))
            .slice(0, 6)
            .reverse(),
    )

    return {
        ...toRefs(state),
        fetchCategories,
        formattedCategories,
    }
}
