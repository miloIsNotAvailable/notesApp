import { FC } from "react";
import { useQuery } from "../../../hooks/graphql/useQuery";
import { styles } from "./RegisterStyles";
import LoginBg from "./RegisterBg";
import { motion } from "framer-motion";
import BuildRegister from "./BuildRegister";
import { useLazyFetch } from "../../../hooks/queries/useLazyFetch";
import { useAppSelector } from "../../../store/hooks";
import { getSetLoadingState } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import Bg from "../Forms/Bg";
import Loading from "../Forms/Loading";

const query = `
query say( $msg: String ) {
  say( msg: $msg ) {
    msg
  }
}
`

const Login: FC = () => {

    // const { data, error, loading } = useQuery( query, {
    //     variables: {
    //       msg: 'hello'
    //     }
    // } )

    return (
      <motion.div className={ styles.register_bg }
        transition={ { duration: .5, type: "spring" } }
        initial={ { opacity: 0, transform: 'translateX(-100%)' } }
        animate={ { opacity: 1, transform: 'translateX(0%)' } }
        exit={ { opacity: 0, transform: 'translateX(100%)' } }
      >
          <BuildRegister/>
          <Loading/>
          <Bg />
      </motion.div>
    )
}

export default Login