<template>
    <p class="text-sm italic text-sm text-gray-700 date">
        <slot />
        <time :datetime="isoDate">
            {{ parsedDate }}
        </time>
    </p>
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