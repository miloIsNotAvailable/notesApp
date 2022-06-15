import { FC } from "react";
import { useQuery } from "../../../hooks/graphql/useQuery";
import { styles } from "./LoginStyles";
import { default as BgImg } from '../../../graphics/loading.svg'
import Email from "../Forms/Email";
import Password from "../Forms/Password";
import BuildLogin from "./BuildLogin";
import LoginBg from "./LoginBg";

const query = `
query say( $msg: String ) {
  say( msg: $msg ) {
    msg
  }
}
`

const Login: FC = () => {

    const { data, error, loading } = useQuery( query, {
        variables: {
          msg: 'hello'
        }
    } )
    
    if( data ) console.log( data )  
    if( loading ) console.log( loading )  
    if( error ) console.log( error )  

    return (
        <div className={ styles.login_bg }>
            <BuildLogin/>
            <LoginBg/>
        </div>
    )
}

export default Login