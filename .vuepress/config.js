module.exports = {
    title: "iksaku's Blog",
    description: "A personal blog full of... Well, personal content.",
    themeConfig: {
        lastUpdated: true
    },
    postcss: {
        plugins: [
            require('tailwindcss')('tailwind.config.js'),
            require('autoprefixer')
        ]
    }
};