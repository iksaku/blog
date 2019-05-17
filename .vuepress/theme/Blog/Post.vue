<template>
    <div class="bg-gray-100 border border-gray-400 rounded shadow md:max-w-4xl p-4">
        <div class="border-b border-gray-300 pb-2">


            <!-- Header -->
            <h1 class="font-extrabold text-3xl sm:text-3xl md:text-4xl pb-2 font-serif">
                {{ $page.title }}
            </h1>

            <Date :timestamp="publishDate" />
        </div>
        <article>
            <Content></Content>
        </article>
    </div>
</template>

<script>
    import Date from './components/DateComponent'

    export default {
        name: "Post",

        components: {
            Date
        },

        computed: {
            publishDate() {
                return this.$page.frontmatter.published
            }
        }
    }
</script>