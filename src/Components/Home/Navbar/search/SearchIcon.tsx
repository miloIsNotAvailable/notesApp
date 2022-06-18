import { FC } from "react";
import { default as Icon } from '../../../../graphics/Search.svg'
import { styles } from "./SearchStyles";

const SearchIcon: FC = () => {

    return <img src={ Icon } alt="" className={ styles.search_icon }/>
}   

export default SearchIcon