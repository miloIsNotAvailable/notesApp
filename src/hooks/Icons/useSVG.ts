import { useEffect, useRef, useState } from "react"

export const useSVG = ( path: string ) => { 

    if( !path.match( /(.*).svg/ ) ) throw new Error( 'path is not an SVG' )

    const imgRef = useRef<string | null>( null )
    const [ fallback, setFallback ] = useState( false )

    useEffect( () => {
        setFallback( true )
        const importIcon = async() => {
            const imported = await import( path )
            const imgPath = await imported.default
            
            imgRef.current = imgPath
            setFallback( false )
        }
        importIcon()
    }, [] )

    return [ { fallback, icon: imgRef.current } ]
}