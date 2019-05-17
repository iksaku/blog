<template>
    <img :src="$withBase(src)" :alt="alt">
</template>

<script>
    export default {
        name: "ImageComponent",

        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>