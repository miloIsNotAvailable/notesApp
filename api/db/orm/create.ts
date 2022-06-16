import { v4 } from 'uuid'
import { connect } from './connectdb.js'

export const create = async() => {

    const client = await connect()

    const insertStatement =
    "CREATE TABLE IF NOT EXISTS create_user (id UUID PRIMARY KEY, username VARCHAR(255),email VARCHAR(255));";
    
    await client.query( insertStatement, ( err, res ) => {
        console.log( err, res.rows )
    } );

    // const createUser = `INSERT INTO create_user(id, username, email) VALUES ('${v4()}', 'ye', 'ye@gmail.com')`
    // await client.query( createUser, ( err, res ) => {
    //     console.log(err, res.rows )
    // } )

    const getUser = `SELECT * FROM create_user`
    const users = await client.query( getUser )
    console.log( users.rows )
    return users.rows
}