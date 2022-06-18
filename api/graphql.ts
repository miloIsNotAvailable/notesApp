import { buildSchema } from "graphql";
import { create } from "./db/orm/create";
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"; 
import { graphqlHTTP } from "express-graphql";

var app = express();

app.use( cors( {
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000', 'https://app-of-the-heck.herokuapp.com/', 'https://notes-app-three-beta.vercel.app']
} ) )
app.use( cookieParser() )

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

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));