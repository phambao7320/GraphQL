const { gql } = require("apollo-server-express")

// const typeDefs = gql`
//     interface Root {
//         id: ID!
//         name: String!
//     }

//     type Book implements Root {
//         id: ID!
//         name: String!
//         genre: String!
//         author: Author!
//     }

//     type Author implements Root {
//         id: ID!
//         name: String!
//         age: Int!
//         books: [Book]
//     }

//     # Root type
//     type Query {
//         books: [Book]
//         book(id: ID!): Book
//         authors: [Author]
//         author(id: ID!): Author
//         root(id: ID!): Root
//     }

//     type Mutation {
//         createAuthor(name: String!, age: Int!): Author
//         createBook(
//             name: String!
//             genre: String!
//             authorId: ID!
//         ): Book
//     }
// `

const typeDefs = gql`
    interface Book {
        id: ID!
        name: String!
    }

    type Category implements Book {
        id: ID!
        name: String!
        genre: String!
    }

    type Price implements Book {
        id: ID!
        name: String!
        price: Int!
    }

    # Root type
    type Query {
        books: [Book]
    }
`

module.exports = typeDefs
