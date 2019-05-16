<template>
    <nav id="header" class="w-full z-10 pin-t">
        <div class="w-full md:max-w-xl mx-auto flex flex-wrap items-center justify-between mt-0">
            <router-link tag="a"
                         class="text-xl font-bold no-underline hover:text-gray-700"
                         to="/">
                {{ $site.title }}
            </router-link>

            <div class="block md:hidden">
                <button
                        class="flex items-center px-3 py-2 border rounded border-black hover:text-gray-700 hover:border-gray-700 hover:border-teal focus:outline-none"
                        @click="$emit('toggle-sidebar')"
                >
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            <div class="w-full flex-grow mt-2 z-20 bg-grey-lightest hidden md:flex md:items-center md:w-auto md:block md:mt-0 md:bg-transparent"
                 id="nav-content">
                <ul class="list-reset md:flex justify-end flex-1 items-center">
                    <li v-for="(url, i) in links" :key="i">
                        <router-link
                                :to="url.path"
                                class="inline-block py-2 px-4 no-underline text-gray-900 border-b-2 border-transparent hover:text-black hover:border-blue-700"
                                :class="$route.path === url.path ? 'border-blue-700' : ''"
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

        /* TODO: Toggle Sidebar */

        data() {
            return {
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
        }
    }
</script>