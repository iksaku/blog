<template>
    <div class="w-full h-full min-h-screen text-gray-900 pt-16">
        <NavBar />

        <div class="p-4 sm:px-16">
            <component :is="layout" class="h-full container mx-auto"></component>
        </div>
    </div>
</template>

<script>
    import About from './About'
    import BlogPost from './Blog/Post'
    import Home from './Home'
    import NavBar from './NavBar'

    export default {
        name: 'Layout',

        components: {
            About,
            BlogPost,
            Home,
            NavBar
        },

        computed: {
            layout() {
                return this.$page.frontmatter.layout || 'BlogPost'
            }
        }
    }
</script>

<style lang="postcss">
    @import "styles/theme.pcss";
</style>