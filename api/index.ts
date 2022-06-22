import express, { NextFunction, Request, Response } from 'express'
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
import { grpahqlEndpoint } from './graphql/graphqlHTTP.js'

dotenv.config()

var app = express();

app.use( cors( {
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000', 'https://app-of-the-heck.herokuapp.com/', 'https://notes-app-three-beta.vercel.app']
} ) )
app.use( cookiePaser() )

const publicPath = path.join( __dirname, '..' )
console.log( publicPath )
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'roothtml.html'));
});

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false, limit: '100mb' })
app.use( urlencodedParser )
app.use( jsonParser )

app.get('/api', (req: Request, res: Response) => {
  const randomId = `${Math.random()}`.slice(2);
  const path = `/api/item/${randomId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});

app.use('/graphql', grpahqlEndpoint );

const orm = new ORM()

app.use( '/get_home', ( req, res ) => {
  const { accToken } = req.body
  const authHeaders = req.cookies?.JWTtoken
  const token =  authHeaders || null

  let decoded: any;
  if( accToken ) {
    if( !process.env.ACCESS_TOKEN  )return

    accToken && jwt.verify( 
      accToken, 
      process.env.ACCESS_TOKEN, ( err: any, user: any ) => {
        if( err ) res.sendStatus( 403 )
        decoded = user
      }  )
  }

  !accToken ? res.json( { data: null } ) : res.json( { decoded } )
} )

app.use( '/logout', ( req, res ) => {
  
  res.setHeader( 'Set-Cookie', 
    serialize( 'JWTtoken', '', {
      path: "/",
      sameSite: "none",
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
          sameSite: "none",
          httpOnly: true,
      } ) )
  }

  data.length ? res.json( { data, accessToken: token } ) : res.json( { error: 'user not found' } )
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

// orm.create( {
//   table: 'Funkee',
//   data: { values: { id: v4(), name: 'hello' } }
// } )

connect()
// create()

const port = process.env.PORT || 4000

app.listen( port );
console.log('Running a GraphQL API server at http://localhost:4000/graphql');