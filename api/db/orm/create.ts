import { v4 } from 'uuid'
import { connect } from './connectdb.js'

export const create = async() => {

    const client = await connect()
    console.log( client )

    const insertStatement =
    "INSERT INTO user (id, name) VALUES ($1, john)";
    const res = await client.query( "SELECT NOW()" );
    console.log( res )
}