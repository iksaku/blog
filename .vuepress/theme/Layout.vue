<template>
    <div class="w-full h-screen bg-grey-lightest font-sans leading-normal tracking-normal" >
        <div id="progress" class="fixed h-2 z-20 pin-t bg-indigo-400"></div>

        <div class="h-full p-4 sm:px-16">
            <NavBar />
            <component :is="layout" class="h-full container pt-5 w-full mx-auto font-serif"></component>
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
        },
    }
</script>

<style lang="stylus">
    @import './styles/theme.styl';
</style>