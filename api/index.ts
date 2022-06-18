import express, { NextFunction } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'
import { connect } from './db/orm/connectdb.js'
import { create } from './db/orm/create.js'
import { ORM } from './db/orm/Orm.js'
import { v4 } from 'uuid'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { serialize } from 'cookie'
import cookiePaser from 'cookie-parser'
import path from 'path'

dotenv.config()

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

app.use( cors( {
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000', 'https://app-of-the-heck.herokuapp.com/']
} ) )
app.use( cookiePaser() )

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use( urlencodedParser )
app.use( jsonParser )

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const orm = new ORM()

app.use( '/home', ( req, res ) => {
  const authHeaders = req.cookies?.JWTtoken
  const token =  authHeaders || null

  let decoded: any;
  if( token ) {
    if( !process.env.ACCESS_TOKEN  )return

    jwt.verify( 
      token, 
      process.env.ACCESS_TOKEN, ( err: any, user: any ) => {
        if( err ) res.sendStatus( 403 )
        decoded = user
      }  )
  }

  !authHeaders ? res.json( { data: null } ) : res.json( { decoded } )
} )

app.use( '/logout', ( req, res ) => {
  
  res.setHeader( 'Set-Cookie', 
    serialize( 'JWTtoken', '', {
      path: "/",
      // sameSite: "lax",
      httpOnly: true,
    } ) 
  )
  res.json( {} )
} )

app.use( '/login', async( req, res ) => {
  console.log( req.body )
  const { getUserEmail, getUserPassword } = req.body

  const data = await orm.select( {
      table: 'create_user', 
      where: {
        email: getUserEmail?.email
      }
  } )

  console.log( data )
  let token: any;

  if( !!data.length ) {

      const accessToken = process.env.ACCESS_TOKEN 
      && jwt.sign( data[0], process.env.ACCESS_TOKEN )

      token = accessToken
      
      accessToken && res.setHeader( "Set-Cookie",
      serialize( "JWTtoken", accessToken , {
          path: "/",
          // sameSite: "lax",
          httpOnly: true,
      } ) )
  }

  data.length ? res.json( { data } ) : res.json( { error: 'user not found' } )
} )

app.use( '/create_user', async( req, res ) => {
  console.log( req.body )
  const { getUserEmail, getUserUsername } = req.body

  const findExisting = await orm.select( {
      table: 'create_user', 
      where: {
        email: getUserEmail.email
      }
  } )
  
  console.log( findExisting )

  const data = !findExisting.length && await orm.create( {
      table: 'create_user', 
      data: {
        values: {
          id: v4(),
          username: getUserUsername.username,
          email: getUserEmail.email
        }
      }
  } )

  if( !!data.length ) {

    const accessToken = process.env.ACCESS_TOKEN 
    && jwt.sign( data[0], process.env.ACCESS_TOKEN )
    
    accessToken && res.setHeader( "Set-Cookie",
    serialize( "JWTtoken", accessToken , {
        path: "/",
        // sameSite: "lax",
        httpOnly: true,
    } ) )
  }

  console.log( data )
  !findExisting.length ? res.json( { data: data } ) : res.json( { error: 'user already exists' } )
} )

// orm.remove( {
//   table: 'create_user',
//   where: { email: 'hello@gmail.com' }
// } )

connect()
// create()

const port = process.env.PORT || 4000

app.listen( port );
console.log('Running a GraphQL API server at http://localhost:4000/graphql');