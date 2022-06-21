import { v4 } from 'uuid'
import { connect } from './connectdb.js'

export const create = async() => {

    const client = await connect()

    // const insertStatement =
    // "CREATE TABLE IF NOT EXISTS Topic (id UUID PRIMARY KEY, title VARCHAR(255), note_id UUID, FOREIGN KEY (note_id) REFERENCES Note(id));";
    const insertStatement =
    "DROP TABLE Funkee;";
    
    await client.query( insertStatement, ( err, res ) => {
        console.log( err, res?.rows )
    } );

    // const createUser = `INSERT INTO create_user(id, username, email) VALUES ('${v4()}', 'ye', 'ye@gmail.com')`
    // await client.query( createUser, ( err, res ) => {
    //     console.log(err, res.rows )
    // } )

    const getUser = `SELECT * FROM Topic`
    const users = await client.query( getUser )
    console.log( users.rows )
    return users.rows
}