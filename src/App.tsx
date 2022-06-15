import { useEffect } from "react"
import { useQuery } from "./hooks/graphql/useQuery";

const query = `
query say( $msg: String ) {
  say( msg: $msg ) {
    msg
  }
}
`

function App() {

  const { data, error, loading } = useQuery( query, {
    variables: {
      msg: 'hello'
    }
  } )

  if( data ) console.log( data )  
  if( loading ) console.log( loading )  
  if( error ) console.log( error )  

  return (
    <div>
      hello
    </div>
  )
}

export default App
