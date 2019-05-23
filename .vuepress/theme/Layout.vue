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

<style lang="stylus">
    @import 'styles/theme.styl';
</style>

<style lang="postcss">
    .h {
        @apply .font-bold .border-b .border-gray-300;
    }

    body {
        @apply .bg-gray-200;
    }

    .content {
        @apply .leading-relaxed .text-xl;

        p {
            @apply .my-4 .font-serif .text-justify;
        }

        a {
            @apply .text-blue-700;

            &:hover {
                @apply .text-blue-900;
            }
        }

        h1 {
            @apply .text-3xl .h;
        }

        h2 {
            @apply .text-2xl .h;
        }

        .header-anchor {
            @apply .text-transparent;

            &:hover {
                @apply .text-blue-900;
            }
        }
    }
</style>