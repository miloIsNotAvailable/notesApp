import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'
import { connect } from './db/orm/connectdb.js'
import { create } from './db/orm/create.js'
import { ORM } from './db/orm/Orm.js'
import { v4 } from 'uuid'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  
  type sayHi {
    msg: String
  }

  type User {
    id: String
    username: String
    email: String
  }

  type Query {
    hello: String
    say( msg: String ): sayHi
    user: [User]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'hi!';
  },
  say: ( args: any ) => {
    return args
  },
  user: async() => {
    const data = await create()
    return data
  }
};

var app = express();

app.use( cors() )

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const orm = new ORM()
// orm.create( {
//   table: 'create_user',
//   data: {
//     values: {
//       id: v4(),
//       username: 'jenny',
//       email: 'jenny@gmail.com'
//     }
//   }
// } )

// orm.remove( {
//   table: 'create_user', 
//   where: {
//     username: 'ye'
//   },
//   AND: {
//     id: '31c1'
//   }
// } )

connect()
// create()

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');