const { gql } = require("apollo-server-express")

const typeDefs = gql`
    type Disc {
        name: String!
        year: Int!
        composer: String!
        songs: [Song]
    }

    type Song {
        name: String!
        duration: String!
    }

    #Queries
    
    type Query {
        getAllDiscs: [Disc]
    }

    #Mutations
`

module.exports = { typeDefs }