require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { typeDefs } = require('../Schema/TypeDefs')
const { resolvers } = require('../Schema/Resolvers')
const app = express()

const  server = new ApolloServer({ typeDefs, resolvers })
// server.start()
server.applyMiddleware({ app })

app.listen(process.env.PORT, () => console.log(`Server listening port ${process.env.PORT}`))

