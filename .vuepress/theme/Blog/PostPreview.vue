<template>
    <div
        class="border border-gray-400 rounded max-h-40 flex flex-col sm:flex-row group hover:bg-gray-100 hover:cursor-pointer shadow-md font-sans"
        @click="$router.push(path)"
    >
        <div v-if="image" class="flex-grow sm:w-1/5 text-center">
            <img :src="image.src" :alt="image.description">
        </div>
        <div class="flex-grow p-3">
            <router-link :to="path">
                <h1 class="font-bold text-xl group-hover:text-blue-700">
                    {{ title }}
                </h1>
            </router-link>
            <Date :timestamp="publishDate" v-if="publishDate">
                Published on
            </Date>
            <p v-if="excerpt">
                <span v-html="adjustedExcerpt"></span>
                <router-link :to="path" class="group-hover:text-blue-700">
                    More
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import Date from './components/DateComponent'

    export default {
        name: "PostPreview",
        components: {Date},
        props: {
            path: String,
            title: String,
            excerpt: String,
            image: {
                type: Object,
                required: false
            },
            lastUpdated: {
                type: Number,
                required: false
            },
            frontmatter: Object
        },

        computed: {
            publishDate() {
                return this.frontmatter.published
            },
            adjustedExcerpt() {
                return this.excerpt.replace(/^<p>(.*)\.+<\/p>\n$/g, "$1...")
            }
        }
    }
</script>