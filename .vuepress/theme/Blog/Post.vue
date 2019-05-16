<template>
    <div class="md:max-w-3xl">
        <div class="border-b border-gray-300 pb-2">
            <!-- Header -->
            <h1 class="font-extrabold text-xl md:text-5xl pb-2">
                {{ $page.title }}
            </h1>

            <Date :timestamp="publishDate" />
        </div>
        <article class="leading-relaxed text-xl">
            <Content></Content>
        </article>
    </div>
</template>

<script>
    import Date from './components/DateComponent'

    export default {
        name: "Post",
        components: {Date},

        methods: {
            updateScrollProgress() {
                let bar = document.querySelector('#progress')
                let scroll = document.body.scrollTop || document.documentElement.scrollTop
                let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
                bar.style.width = (scroll / height * 100) + '%;'
            }
        },

        computed: {
            publishDate() {
                return this.$page.frontmatter.published
            }
        },

        mounted() {
            window.addEventListener('scroll', this.updateScrollProgress)
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.updateScrollProgress)
        },
    }
</script>

<style scoped>
    >>> p:not(.date) {
        @apply .my-4;
    }
</style>