import { GraphQLID, GraphQLInterfaceType } from "graphql";
import { async } from "rxjs";
import { v4 } from "uuid";
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
    
    note: async( args: any ) => {
      console.log( args )
      const data = args?.users && await orm.select( { table: 'Note', where: { users: args.users } } )
      return data
    },
    
  queryNotes: async( args: any ) => {

    const note = args?.users && await orm.select( { table: "Note", where: { users: args.users } } )

    const notes = note.map(  (n: any) => ({ 
      ...n, 
      noteUsers: async() => await orm.select( { 
        table: "Note", 
        where: { id: n?.id } 
      } ) 
      }) 
    )

    return notes
  }, 

    noteByID: async( args: any ) => {
      console.log( args )
      const data = args?.id && await orm.select( { table: 'Note', where: { id: args.id } } )
      return data
    },

    newNote: async( args: any ) => {
      console.log( args )

      const id = v4()

      const data = args && await orm.create( {
        table: 'Note', 
        data: {
          values: { 
            id, 
            content: args?.content, 
            type: args?.type, 
            title: args?.title, 
            users: args?.userId 
          }
        }
      } )
      console.log( data )
      return {
        userId: data[0]?.id,
        title: data[0]?.title,
        content: data[0]?.content,
        type: data[0]?.type,
        users: data[0]?.users
      }
      // return args
    },
    newTitle: async( args: any ) => {
      const data = await orm.update( {
        table: 'Note',
        where: { id: args?.noteId },
        data: { title: args?.title }
      } )
      return args
    },
    newContent: async( args: any ) => {
      const data = await orm.update( {
        table: 'Note',
        where: { id: args?.noteId },
        data: { content: args?.content }
      } )
      return args
    },
    updateUsers: async( { input }: any ) => {
      console.log( input )
      return input
    }
  };