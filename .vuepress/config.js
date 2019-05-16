const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.vue'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    title: "iksaku's Blog",
    description: "A personal blog full of... Well, personal content.",
    themeConfig: {
        lastUpdated: true
    },
    postcss: {
        plugins: [
            tailwind('tailwind.config.js'),
            autoprefixer,
            ...process.env.NODE_ENV === 'production'
                ? [purgecss]
                : []
        ]
    }
};