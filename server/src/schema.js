const { gql } = require('apollo-server');

const typedefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id:ID!): Track
}
type Mutation {
  incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}
type IncrementTrackViewsResponse {
  "Similar to HTTP status code, represents the status of the mutation"
  code: Int!
  "Indicates whether the mutation was successful"
  success: Boolean!
  "Human-readable message for the UI"
  message: String!
  "Newly updated track after a successful mutation"
  track: Track
}
"A track is a group of modules that teaches a specific topic"
type Track{
    id: ID!
    "the track's title"
    title: String!
    "the track's author details"
    author: Author!
    "the track's thumbnail image"
    thumbnail: String
    "the length of the track"
    length: Int
    "the no of module this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
}
"Author of a complete Track or a Module"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
  id: ID!
  "The Module's title"
  title: String!
  "The Module's length in minutes"
  length: Int
}
`;

module.exports = typedefs;