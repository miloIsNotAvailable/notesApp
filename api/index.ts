import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'
import { connect } from './db/orm/connectdb.js'
import { create } from './db/orm/create.js'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  
  type sayHi {
    msg: String
  }

  type Query {
    hello: String
    say( msg: String ): sayHi
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'hi!';
  },
  say: ( args: any ) => {
    return args
  }
};

var app = express();

app.use( cors() )

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

connect()
create()

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');