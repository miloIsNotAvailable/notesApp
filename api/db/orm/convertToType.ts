type convTypes = {
    table: string 
    args: any
}

/**
 * @function toPascalCase 
 * changes tables 
 * including space or _
 * to pascal case 
 */
const toPascalCase: 
( str: string ) => string = ( str ) => {

    return `${str}`
      .toLowerCase()
      .replace(/[-_]+/g, ' ')
      .replace(/[^\w\s]/g, '')
      .replace(
        /\s+(.)(\w*)/g,
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(/\w/, s => s.toUpperCase());
  }
  
  /**
   * 
   * @param v takes table name 
   * and args as an object
   * @returns a typescript type as string
   */
export const conv: 
  ( v: convTypes ) => string 
  = ( { table, args } ) => {
  
        const names: string[] = Object.keys( args )
        const mapped = names.map( n => `${n}: ${ typeof args[n] }` )

        const types = mapped.join( "," )
        const type = `type ${ toPascalCase( table ) } = { ${ types } }`

        return type
  }