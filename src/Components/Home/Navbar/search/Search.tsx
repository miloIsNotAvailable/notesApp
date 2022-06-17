import { FC } from "react";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";
import { styles } from "./SearchStyles";

const Search: FC = () => {

    return (
        <div className={ styles.search_layout }>
            <div className={ styles.search_wrap }>
                <SearchIcon/>
                <SearchInput/>
            </div>
        </div>
    )
}

export default Search