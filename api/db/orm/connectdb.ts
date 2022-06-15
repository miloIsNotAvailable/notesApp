import pool from 'pg'
const { Client } = pool
import dotenv from 'dotenv'
dotenv.config()

export const connect = async() => {
    
    console.log( 'postgress server running on ->' + process.env.DATABASE_URL )

    const client = new Client(process.env.DATABASE_URL);
    
    (async () => {
      await client.connect();
      try {
        const results = await client.query("SELECT NOW()");
        // console.log(results);
      } catch (err) {
        console.error("error executing query:", err);
      } finally {
        client.end();
      }
    })();

    return client
}