const authorMethod = require("./author")
const bookMethod = require("./book")
const fragmentMethod = require("./fragment")

const contextMethod = {
    authorMethod,
    bookMethod,
    fragmentMethod,
}

module.exports = contextMethod
