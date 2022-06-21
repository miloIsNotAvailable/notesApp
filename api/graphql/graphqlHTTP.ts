import { graphqlHTTP } from "express-graphql"
import { root } from "./resolvers"
import { schema } from "./schema"

export const grpahqlEndpoint = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })