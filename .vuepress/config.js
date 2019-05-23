module.exports = {
    title: "Jorge's Blog",
    description: "A personal blog full of... Well, personal content.",
    themeConfig: {
        lastUpdated: true
    },
    postcss: {
        plugins: [
            require('postcss-nested'),
            require('tailwindcss')('tailwind.config.js'),
            require('autoprefixer')
        ]
    }
};