import { v4 } from 'uuid'
import { connect } from './connectdb.js'

export const create = async() => {

    const client = await connect()

    const insertStatement =
    "SELECT * FROM  Note WHERE Note.users='9b764715-39e8-461e-a0c7-ef8e7d9e46a8'";
    // const insertStatement =
    // `INSERT INTO Note(id, title, content, type, users) SELECT id, title, content, type, '2539cd15-6fc1-4d41-92b4-026b8cc8edb4' FROM Note WHERE id='65dcd050-566e-402e-9d20-c5c97aca680b'`;
    
    await client.query( insertStatement, ( err, res ) => {
        console.log( err, res?.rows )
    } );

    // const createUser = `INSERT INTO create_user(id, username, email) VALUES ('${v4()}', 'ye', 'ye@gmail.com')`
    // await client.query( createUser, ( err, res ) => {
    //     console.log(err, res.rows )
    // } )

    const getUser = `SELECT * FROM create_user`
    const users = await client.query( getUser )
    // console.log( users.rows )
    return users.rows
}