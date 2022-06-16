import { FC } from "react";
import { useQuery } from "../../../hooks/graphql/useQuery";
import { styles } from "./LoginStyles";
import { default as BgImg } from '../../../graphics/loading.svg'
import Email from "../Forms/Email";
import Password from "../Forms/Password";
import BuildLogin from "./BuildLogin";
import LoginBg from "./LoginBg";
import { motion } from "framer-motion";
import Bg from "../Forms/Bg";

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
      <motion.div className={ styles.login_bg }
      transition={ { duration: .5, type: "spring" } }
        initial={ { opacity: 0, transform: 'translateX(-100%)' } }
        animate={ { opacity: 1, transform: 'translateX(0%)' } }
        exit={ { opacity: 0, transform: 'translateX(100%)' } }
        key="/"
      >
          <BuildLogin/>
          <Bg />
      </motion.div>
    )
}

export default Login