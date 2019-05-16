<template>
    <div class="md:max-w-xl">
        <PostPreview
                v-for="(post, i) in posts"
                :key="i"
                v-bind="post"
                class="mt-3"
        />
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
                    .filter(page => page.path.match(/^\/articles\//g) !== null && page.frontmatter.published)
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