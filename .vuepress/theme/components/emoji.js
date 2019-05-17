const emoji_defs = require('markdown-it-emoji/lib/data/full')

module.exports = function (emoji) {
    return emoji_defs[emoji]
}