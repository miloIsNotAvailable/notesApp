
type toTableTypes = {
    table: string, 
    values: any
}

export const tableFromObject: 
( args: toTableTypes ) => string = ( { table, values } ) => {

    const createKeys = Object.keys( values ).map( (n: any) => {

        let vals: any;
        const type = ( typeof values[n] )

        switch( type ) {
            case "number": 
                vals = !Number.isInteger( values[n] ) ? 'FLOAT' : "INT"
                break;
            case "string": 
                const checkForv4 = values[n].match( /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i )
                
                if( n === 'id' && checkForv4 ) {
                    vals = 'UUID PRIMARY KEY'
                    break;
                }

                vals = values[n].length < 255 ? 'VARCHAR(255)' : 'TEXT'
                break; 
        }

        return `${n} ${ vals }`
    })

    const insertStatement = `CREATE TABLE IF NOT EXISTS ${ table } ( ${ createKeys } );`
    return insertStatement
}