import { FC } from "react";
import FormLayout from "./FormLayout";

const Email: FC = () => {

    return(
        <div>
            <FormLayout  
                title="email" 
                type="email" 
            />
        </div>
    )
}

export default Email