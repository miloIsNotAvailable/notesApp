import { FC, useEffect } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import { useGetAllThemesQuery, useLazyGetAllThemesQuery } from "../../../../../store/apis/getPosts";
import CreateNewTheme from "./CreateNewTheme";
import UsersTheme from "./UsersTheme";
import UserThemes from "./UserThemes";

const GET_THEMES = `
query getThemes($user_id: String) {
    theme(user_id:$user_id) {
      id
      theme_name
      user_id
    }
  }
  `

const Themes: FC = () => {

    const { id } = useData()

    const [ getThemes, { data, isLoading, isError } ] = useLazyGetAllThemesQuery()

    useEffect( () => {

        if( !id ) return

        getThemes( {
            body: GET_THEMES,
            variables: {
                user_id: id
            } 
        }  )

    }, [ id ] )

    console.log( data )

    return (
        <div>
            <CreateNewTheme/>
            <UserThemes/>
            {
                data && !!data.theme.length ?
                data?.theme
                .map( ( { theme_name }: any ) => (
                    <UsersTheme title={ theme_name } />
                ) ) : isLoading &&
                <UsersTheme title={ 'loading...' } />
            }
        </div>
    )
}

export default Themes