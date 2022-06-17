import { FC } from "react";
import { styles } from "./SearchStyles";

const SearchInput: FC = () => {

    return <input
                className={ styles.search_input }
                type="text" 
                placeholder="search" />
    
}

export default SearchInput