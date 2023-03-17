const Author = require('../models/Author') ;

const authorMethod = {
    getAllAuthor: async () => await Author.find(), 
    getAuthor: async (id) => await Author.findById(id),
    createAuthor: async (args) => {
        const newAuthor = new Author(args) ;
        return await newAuthor.save() ;
    }
}


module.exports = authorMethod ;