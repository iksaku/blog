<template>
    <div class="md:max-w-2xl">
        <div class="font-sans">
            <!-- Header -->
            <h1 class="font-extrabold text-3xl md:text-4xl">
                {{ $page.title }}
            </h1>
            <Date :timestamp="publishDate" v-if="publishDate">
                Published on
            </Date>
            <Date :timestamp="updateDate" v-if="updateDate">
                Updated on
            </Date>
        </div>
        <article class="pt-4 leading-relaxed">
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
            },
            updateDate() {
                return this.lastUpdated
            },
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
    >>> p {
        @apply .my-4;
    }
</style>