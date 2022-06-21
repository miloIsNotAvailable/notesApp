import { Client } from "pg"
import { connect } from "./connectdb"
import fs from 'fs'
import { conv } from "./convertToType"
import { tableFromObject } from "./createTableFromObject"

type createTypes = { 
    table: string, 
    data: {
        values: any
    }
}

type selectType = {
    where?: any
    table: string
    AND?: any | undefined
}

type removeType = {
    table: string,
    where: any,
    AND?: any | undefined
}

type convTypes = {
    table: string 
    args: any
}

export const ORM = class {
    // this.connect = async(): Promise<Client> => await connect()
    // this.client = this.connect

    remove = async( { table, where, AND }: removeType ) => {

        const client = await connect()

        const value = where ? Object.keys( where ).map( v => `WHERE ${v} = '${ where[v] }'` ) : null
        if( !where ) return
        
        const queryData = value ?  `DELETE FROM ${ table } ${ value }`
        : `DELETE FROM ${ table }`
        
        const includeValue = AND ? Object.keys( AND ).map( v => `${v}::text LIKE '${ AND[v] }%'` ) : '*'
        const include = `AND ${ includeValue }`

        let res: any;
        let err = undefined
        try {
            const r = AND ? await client.query( `${ queryData } ${ include }` ) : await client.query( queryData ) 
            res = r.rows
        } catch( e ) {
            err = e
        }
        console.log( err || res )
        return res || err
    }

    select = async( { where, table, AND }: selectType ) => {
        
        const client = await connect()

        const value = where ? Object.keys( where ).map( v => `WHERE ${v} = '${ where[v] }'` ) : null

        const queryData = value ?  `SELECT * FROM ${ table } ${ value }`
        : `SELECT * FROM ${ table }`
        
        const includeValue = AND ? Object.keys( AND ).map( v => `${v}::text LIKE '${ AND[v] }%'` ) : '*'
        const include = `AND ${ includeValue }`

        let res: any;
        let err = undefined
        try {
            const r = AND ? await client.query( `${ queryData } ${ include }` ) : await client.query( queryData ) 
            res = r.rows
        } catch( e ) {
            err = e
        }
        console.log( err || res )
        return res || err
    }

    create = async( { table, data: { values } }: createTypes ) => {
        
        const client = await connect()

        const keys = Object.keys( values ).join( ',' )
        const vals = Object.values( values ).map( v => `'${ v }'` ).join( ',' )

        if( process.env.NODE_ENV !== 'production' ) {

            const insertStatement = tableFromObject( {
                table, 
                values
            } )
    
            await client.query( insertStatement, ( err, res ) => {
                
                if( err ) return
                console.log( res?.rows )
    
                  try {                  
                      console.log( "\n" + conv( { table: table, args: values }) + "\n" )
                      fs.appendFile( 'dbinterfaces.ts', "\n" + conv( { table: table, args: values }) + "\n" , ( err ) => {
                          console.log( err || "done" )
                      })
                  }catch( e ) {
                      console.log( e )  
                  }
            } );
        }

        let res: any

        try {
            const queryFrom = `INSERT INTO ${ table }(${ keys }) VALUES (${ vals }) RETURNING ${ keys }`
            const r = await client.query( queryFrom )
            res = r.rows
        }catch( e ) {
            res = e
        }
        // console.log( res )
        return res
    }
}