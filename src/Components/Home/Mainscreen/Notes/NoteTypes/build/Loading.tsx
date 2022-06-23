import { FC } from "react";
import { default as LoadingIcon } from '../../../../../../graphics/loading.svg'

const Loading: FC = () => {

    return (
        <div>
            <img src={ LoadingIcon } alt="" />
        </div>
    )
}

export default Loading