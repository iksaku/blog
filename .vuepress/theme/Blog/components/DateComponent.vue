<template>
    <div class="date">
        <svg class="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"/></svg>
        <time class="inline-block align-middle" :datetime="isoDate" v-if="timestamp">
            {{ parsedDate }}
        </time>
        <span class="inline-block align-middle text-red-700 italic font-bold" v-else>Draft</span>
    </div>
</template>

<script>
    import dayjs from 'dayjs'

    export default {
        name: "DateComponent",
        props: [
            'timestamp'
        ],
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