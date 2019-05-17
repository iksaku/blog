<template>
    <div class="font-serif px-4">
        <span class="inline-block align-middle mr-2">
            {{ emoji('date') }}
        </span>
        <time class="inline-block align-middle" :datetime="isoDate" v-if="timestamp">
            {{ parsedDate }}
        </time>
        <span class="inline-block align-middle text-red-700 italic font-bold" v-else>
            Draft
        </span>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import emoji from '../../components/emoji'

    export default {
        name: "DateComponent",

        props: [
            'timestamp'
        ],

        methods: {
            emoji(name) {
                return emoji(name)
            }
        },

        computed: {
            date() {
                return dayjs(this.timestamp)
            },
            parsedDate() {
                return this.date.format('MMMM DD, YYYY')
            },
            isoDate() {
                return this.date.toISOString()
            }
        }
    }
</script>

<style scoped>

</style>