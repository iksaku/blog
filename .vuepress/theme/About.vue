<template>
    <div class="md:max-w-4xl p-4">
        <h1 class="font-bold text-3xl text-center font-serif italic">
            {{ randomIntroductoryPhrase }}
        </h1>

        <ImageComponent
                src="/img/profile_picture.jpg"
                alt="Jorge's Profile Picture"
                class="rounded-full w-1/5 h-1/5 mx-auto my-6"
        />

        <div class="text-xl text-content">
            <Content />
        </div>
    </div>
</template>

<script>
    import ImageComponent from './components/ImageComponent'
    import emoji from './components/emoji'

    export default {
        name: "About",

        components: {
            ImageComponent
        },

        data() {
            return {
                phrases: [
                    'Still don\'t know me?',
                    'Haven\'t we already met?',
                    'So, you want to know more about me...',
                    'Let\'s know each other!',
                    'This is me... ' + emoji('notes'),
                    'What? Who am I you ask?',
                    'Peeking at my blog without knowing me?',
                    '¿Sabías que también hablo Español? ' + emoji('mexico')
                ]
            }
        },

        computed: {
            randomIntroductoryPhrase() {
                return this.phrases[Math.floor(Math.random() * this.phrases.length)]
            }
        }
    }
</script>

<style scoped>
    >>> p {
        @apply .my-4;
    }
</style>