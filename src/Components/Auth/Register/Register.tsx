import { FC } from "react";
import { useQuery } from "../../../hooks/graphql/useQuery";
import { styles } from "./RegisterStyles";
import { default as BgImg } from '../../../graphics/loading.svg'
import Email from "../Forms/Email";
import Password from "../Forms/Password";
import BuildLogin from "./BuildRegister";
import LoginBg from "./RegisterBg";
import { AnimatePresence, motion } from "framer-motion";

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
      <motion.div className={ styles.register_bg }
        transition={ { duration: .5, type: "spring" } }
        initial={ { opacity: 0, transform: 'translateX(-100%)' } }
        animate={ { opacity: 1, transform: 'translateX(0%)' } }
        exit={ { opacity: 0, transform: 'translateX(100%)' } }
      >
          <BuildLogin/>
          <LoginBg/>
      </motion.div>
    )
}

export default Login