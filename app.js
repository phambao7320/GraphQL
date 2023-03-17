const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose")

const typeDefs = require("./schema/schema")
const resolvers = require("./resolver/resolver")
const url =
    "mongodb+srv://baopn0703:tI00MLTbzvMsxh7C@learngraphql.2sw74vm.mongodb.net/?retryWrites=true&w=majority"

const contextMethod = require("./data")

const connect = async () => {
    try {
        await mongoose.connect(url)
        console.log("Connect to mongoDb successfully")
    } catch (error) {
        console.log("Connect to mongoDb failed")
        console.log(error)
        process.exit(1)
    }
}

connect()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: () => ({ contextMethod })
})

const app = express()

server
    .start()
    .then(() => {
        server.applyMiddleware({ app })

        app.listen({ port: 7320 }, () => {
            console.log(
                `Server run at http://localhost:7320${server.graphqlPath}`
            )
        })
    })
    .catch((error) => console.log(error))
