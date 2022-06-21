import fs from 'fs'
import { buildSchema } from 'graphql';

/**
 * read file from ./graphql.schema
 */
export const file = fs.readFileSync( './graphql/graphqlschema.graphql', 'utf8' )
// Construct a schema, using GraphQL schema language
export const schema = buildSchema( file );