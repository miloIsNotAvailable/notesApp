import { ORM } from "../db/orm/Orm";

const orm = new ORM()

// The root provides a resolver function for each API endpoint
export const root = {
    hello: () => {
      return 'hi!';
    },
    say: ( args: any ) => {
      return args
    },
    user: async() => {
      const data = await orm.select( { table: 'create_user' } )
      return data
    },
    newNote: ( args: any ) => {
      console.log( args )
      return args
    }
  };