import { Client } from "pg"
import { connect } from "./connectdb"
import fs from 'fs'
import { conv } from "./convertToType"
import { tableFromObject } from "./createTableFromObject"

type createTypes<T=any> = { 
    table: string, 
    data: {
        values: any
        reference?: { table: string, data: any, ref: string }
    }
    update?: {
        data: T extends unknown ? any : T,
        table: string, 
        where: T extends unknown ? any : T,
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
        // console.log( err || res )
        return res || err
    }

    create = async( { 
        table, 
        data: { values, reference },
        update 
    }: createTypes ) => {
        
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
                if( !res?.rows ) return

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

        if( update ) {
            const client = await connect()
            const { data, table, where } = update
            
            const updateKeys = Object.keys( data )
            .map( ( n: string ) => `${ n }='${ data[n] }'` )
            .join( "," )

            const updateCondition = Object.keys( where )
            .map( ( n: any ) => `${ n }=${ n }, '${ where[n] }'` )
            .join( "," )

            const updateQuery = `UPDATE ${ table } SET ${ updateKeys } WHERE ${ updateCondition }`
            console.log( updateQuery )

            try {
                await client.query( updateQuery, ( err, res ) => {
                    console.log( err, res )
                } )
                // res = r.rows
            }catch( e ) {
                // res = e
                console.log( 'new Error => \n' + e )
            }
        }

        // console.log( res )
        return res
    }
}