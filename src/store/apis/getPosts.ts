import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { check_env } from '../../check_env'
import { request } from 'graphql-request'

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): any =>
  async ({ body, variables }: any) => {
    const result = await request(baseUrl, body, variables);
    return { data: result };
  }

export const getPosts = createApi( {
    reducerPath: 'getPosts',
    baseQuery: graphqlBaseQuery( 
        { baseUrl: `${ check_env }/graphql` } ),
    endpoints: ( { query } ) => ( {
        getAllPosts: query<any, any>( {
            query: ( { body, variables } ) => ( {
                url: `/graphql`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
                variables
            } )

        } )
    } )
} )

export const { useGetAllPostsQuery } = getPosts