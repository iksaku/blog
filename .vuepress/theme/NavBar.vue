<template>
    <nav class="w-full bg-gray-200 z-10 fixed top-0 inset-x-0 p-4 sm:px-16 border-b border-gray-400">
        <div class="w-full sm:max-w-xl mx-auto flex flex-wrap items-center justify-between mt-0">
            <router-link tag="a"
                         class="text-xl font-bold no-underline hover:text-gray-700 outline-none"
                         to="/">
                {{ $site.title }}
            </router-link>

            <div class="block sm:hidden">
                <button
                        class="inline-block align-middle items-center p-2 rounded hover:bg-gray-300 hover:text-gray-700 hover:border-gray-700 focus:outline-none"
                        @click="toggleSidebar"
                >
                    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            <div class="w-full flex-grow mt-2 z-20 sm:flex sm:items-center sm:w-auto sm:block sm:mt-0 sm:bg-transparent border-t border-gray-400 sm:border-none"
                 :class="sidebarOpen ? '' : 'hidden'"
            >
                <ul class="list-reset sm:flex justify-end flex-1 items-center text-center">
                    <li v-for="(url, i) in links" :key="i">
                        <router-link
                                :to="url.path"
                                class="w-full inline-block py-2 px-4 no-underline rounded rounded-b-none border-b-2 border-transparent hover:text-black hover:border-blue-700 outline-none sm:mx-1"
                                :class="$route.path === url.path ? 'text-black border-blue-700 sm:shadow' : 'text-gray-700'"
                        >
                            {{ url.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",

        data() {
            return {
                sidebarOpen: false,
                links: [
                    {
                        name: 'Home',
                        path: '/',
                    },
                    {
                        name: 'About',
                        path: '/about/'
                    }
                ]
            }
        },

        methods: {
            toggleSidebar() {
                this.sidebarOpen = !this.sidebarOpen
            }
        },

        watch: {
            $route() {
                this.sidebarOpen = false
            }
        }
    }
</script>