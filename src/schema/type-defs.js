import { gql } from "apollo-server";

const typeDefs = gql`
  type Country {
    id: ID!
    country: String!
    year: String!
    area: Int!
    totalPopulation: Int!
    createdAt: DateTime
  }

  type Query {
    countries: [Country!]!
    country(id: ID!): Country!
  }

  input CreateCountryInput {
    country: String!
    year: String!
    area: Int!
    totalPopulation: Int!
  }

  input UpdateCountryInput {
    id: ID!
    country: String
    year: String
    area: Int
    totalPopulation: Int
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country
    updateCounty(input: UpdateCountryInput!): Country
    deleteCountry(id: ID!): Country
  }

  scalar DateTime
`;

export default typeDefs;
