<template>
    <div
        class="bg-gray-100 border border-gray-400 rounded h-40 sm:h-auto flex flex-col sm:flex-row group hover:bg-white hover:cursor-pointer shadow-md"
        @click="$router.push(path)"
    >
        <div v-if="frontmatter.image" class="sm:w-1/6 overflow-hidden rounded rounded-b-none sm:rounded-l sm:rounded-r-none">
            <ImageComponent :src="frontmatter.image.src" :alt="frontmatter.image.description" class="" />
        </div>
        <div class="flex-grow p-3">
            <router-link :to="path" class="outline-none">
                <h1 class="font-bold text-xl group-hover:text-blue-700">
                    {{ title }}
                </h1>
            </router-link>
            <Date :timestamp="publishDate" v-if="publishDate">
                🕔🕔🕔🕔Published
            </Date>
            <p v-if="excerpt">
                <span v-html="adjustedExcerpt"></span>
                <router-link :to="path" class="font-bold group-hover:text-blue-700 outline-none">
                    Continue Reading
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import Date from './components/DateComponent'
    import ImageComponent from '../components/ImageComponent'

    export default {
        name: "PostPreview",

        components: {
            Date,
            ImageComponent
        },

        props: {
            path: String,
            title: String,
            excerpt: String,
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