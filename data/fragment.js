const Author = require("../models/Author")
const Book = require("../models/Book")

const fragmentMethod = {
    getRoot: async (id) => await Author.findById(id),
    // const findBook = await Book.findById(id)
    // const result = { ...findAuthor, ...findBook }

    // return {
    //     _id: "640b11b8c5d347966f89da62",
    //     name: "Pham Bao",
    //     age: 23,
    //     __v: 0,
    // }
}

module.exports = fragmentMethod
