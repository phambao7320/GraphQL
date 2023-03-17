const { prices, books, categories } = require("../data/fakedata")

/*
const resolver = {
    // Query: {
    //     books: async (parent, args, { contextMethod }) =>
    //         await contextMethod.bookMethod.getAllBook(),
    //     book: async (parent, { id }, { contextMethod }) =>
    //         await contextMethod.bookMethod.getBook(id),
    //     authors: async (parent, args, { contextMethod }) =>
    //         await contextMethod.authorMethod.getAllAuthor(),
    //     author: async (parent, { id }, { contextMethod }) =>
    //         await contextMethod.authorMethod.getAuthor(id),
    // },

    // Book: {
    //     author: async (
    //         { authorId },
    //         args,
    //         { contextMethod }
    //     ) =>
    //         await contextMethod.authorMethod.getAuthor(
    //             authorId
    //         ),
    // },

    // Author: {
    //     books: async ({ id }, args, { contextMethod }) =>
    //         await contextMethod.bookMethod.getAllBookByAuthor(
    //             id
    //         ),
    // },

    // Mutation: {
    //     createAuthor: async (
    //         parent,
    //         args,
    //         { contextMethod }
    //     ) =>
    //         await contextMethod.authorMethod.createAuthor(
    //             args
    //         ),
    //     createBook: async (
    //         parent,
    //         args,
    //         { contextMethod }
    //     ) =>
    //         await contextMethod.bookMethod.createBook(args),
    // },
}*/

const { books } = require("../data/fakedata")
const resolver = {
    Query: {
        books: () => books,
    },
}

module.exports = resolver
