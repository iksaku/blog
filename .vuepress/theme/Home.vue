<template>
    <div class="h-full md:max-w-xl">
        <PostPreview
                v-for="(post, i) in posts"
                :key="i"
                v-bind="post"
                class="mb-3"
        />
        <div
                v-if="posts.length < 1"
                class="bg-gray-100 border border-gray-400 rounded text-center p-4 font-serif"
        >
            <p class="font-bold text-4xl sm:text-5xl md:text-6xl italic">
                Wow, such emptiness...
            </p>
            <p class="text-xl italic text-gray-700">
                No posts available at the moment.
            </p>
        </div>
    </div>
</template>

<script>
    import PostPreview from './Blog/PostPreview'
    import dayjs from 'dayjs'

    export default {
        name: "Home",
        components: {
            PostPreview
        },

        computed: {
            posts() {
                return this.$site.pages
                    .filter(page =>
                        page.path.match(/^\/posts\//g) !== null
                        && (page.frontmatter.published || process.env.NODE_ENV !== 'production')
                    )
                    .sort((postA, postB) => {
                        let dateA = dayjs(postA.frontmatter.published)
                        let dateB = dayjs(postB.frontmatter.published)
                        return dateA > dateB ? -1 : (dateA === dateB ? 0 : 1)
                    })
            }
        }
    }
</script>

<style scoped>

</style>