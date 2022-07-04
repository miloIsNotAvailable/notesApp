import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { check_env } from '../../check_env'
import { request } from 'graphql-request'

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): any =>
  async ({ body, variables }: any) => {
    const result = await request(baseUrl, body, variables);
    return { data: result };
  }

type queryType = {
    body: string, 
    variables: any
}

export const getPosts = createApi( {
    reducerPath: 'getPosts',
    tagTypes: ['Note', 'Theme'],
    baseQuery: graphqlBaseQuery( 
        { baseUrl: `${ check_env }/graphql` } ),
    endpoints: ( { query, mutation } ) => ( {
        getAllPosts: query<any, queryType>( {
            providesTags: ['Note'],
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
        getAllThemes: query<any, queryType>( {
            providesTags: ['Theme'],
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
        getNewPosts: mutation<any, queryType>( {
            invalidatesTags: ['Note'],
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
        getNewUsers: mutation<any, queryType>( {
            invalidatesTags: ["Note"],
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
        getNewTheme: mutation<any, queryType>( {
            invalidatesTags: ["Theme"],
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
        addThemeToNote: mutation<any, queryType>( {
            invalidatesTags: ( res, err, arg ) =>{ 
                
            // console.log( res, arg )
            // update notes with specific id
            return [ 
                { type: "Note", id: arg.variables.id } ,
                { type: "Theme", id: arg.variables.theme_id } ,
            ]},
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )
        } ),
    } )
} )

export const { 
    useGetAllPostsQuery, 
    useGetNewPostsMutation,
    useGetNewUsersMutation,
    useGetNewThemeMutation,
    useGetAllThemesQuery,
    useLazyGetAllThemesQuery,
    useAddThemeToNoteMutation
} = getPosts