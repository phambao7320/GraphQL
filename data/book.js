const Book = require("../models/Book")

const bookMethod = {
    getAllBook: async () => await Book.find(),
    getBook: async (id) => await Book.findById(id),
    createBook: async (args) => {
        const newBook = new Book(args)
        return await newBook.save()
    },
    getAllBookByAuthor: async (authorId) =>
        await Book.find({ authorId }),
}

module.exports = bookMethod
