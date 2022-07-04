import { GraphQLID, GraphQLInterfaceType } from "graphql";
import { v4 } from "uuid";
import { ORM } from "../db/orm/Orm";
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage'
import { async, fromEvent, map, of, switchMap } from "rxjs";
import { io, _io } from "../sockets/sockets";

const firebaseConfig = {
  apiKey: "AIzaSyDOMrkY_z_wII-bv1-EFMVk-5AP6TqVYls",
  authDomain: "notes-stuff.firebaseapp.com",
  projectId: "notes-stuff",
  storageBucket: "notes-stuff.appspot.com",
  messagingSenderId: "1026829113779",
  appId: "1:1026829113779:web:308a6abbfbe793b3aa13c6",
  measurementId: "G-TRPD6GBNXS"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
      theme: async() => await orm.select( {
        table: 'Theme',
        where: {
          id: n?.theme_id
        }
      } ),
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

      if( args?.type === 'image' || args?.type === 'draw' ) {
        const storage = getStorage()
        const storageRef = ref( storage, `${ args?.userId }/${ args?.id || id }` )
        
        uploadString( storageRef, args?.content, 'data_url' )
        .then( async() => {
          const url = await getDownloadURL( storageRef )
          console.log( url )

          const data = args && url && await orm.create( {
            table: 'Note', 
            data: {
              values: { 
                id: args?.id || id, 
                content: url, 
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

        } )
      }

      if( args?.type === 'text' ) {

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
      
      const data = await orm.select( {
        table: 'create_user',
        where: {
          username: input?.username
        }
      } )

      const note = await orm.select( {
        table: 'Note', 
        where: { id: input?.noteId }
      } )

      if( !data[0] ) return new Error( 'user not found' )

      note[0] && await orm.create( {
        table: 'Note',
        data: {
          values: {
            ...note[0],
            users: data[0]?.id
          }
        }
      } )

      return { ...data[0], noteId: input?.noteId }
    },
    theme: async( args: any ) => {

      const data = await orm.select( {
        table: 'Theme',
        where: {
          user_id: args?.user_id
        }
      } )
      return data
    },
    newTheme: async( args: any ) => {

      const data = await orm.create( {
        table: 'Theme',
        data: {
          values: args
        }
      } )

      console.log( data[0] )
      return data[0]
    },
    newNoteTheme: async( args: any ) => {
      console.log( args )
      const data = await orm.update( {
        table: 'Note', 
        data: {
          theme_id: args?.theme_id
        },
        where: {
          id: args?.id
        }
      } )
      console.log( data )
      return args
    }
  };