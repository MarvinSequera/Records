const { gql } = require("apollo-server-express")

const typeDefs = gql`
    type Artist {
        id_Artist: Int!
        name: String!
    }

    type Collection {
        id: Int!
        fk_record_id: Int!
        fk_user_id: Int!
    }

    type Genres {
        id_Genre: Int!
        name: String!
    }

    type Records {
        id_Record: Int!
        name: String!
        year: Int!
        fk_genre_id: Int!
        fk_artist_id: Int!
    }

    type Record_Song {
        id_Record_Song: Int!
        fk_record_id: Int!
        fk_song_id: Int!
    }

    type Songs {
        id_Song: Int!
        name: String!
        year: Int!
        fk_artist_id: Int!
        fk_genre_id: Int!
    }

    type User {
        id_User: Int!
        email: String!
        password: String!
        active: Boolean!
    }

    #Queries
    
    #Mutations
`

module.exports = { typeDefs }