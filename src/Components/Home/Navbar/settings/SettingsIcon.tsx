import { FC } from "react";
import { default as Icon } from '../../../../graphics/settings.svg'
import { styles } from "./SettingStyles";

const SettingsIcon: FC = () => {

    return <img src={ Icon } alt="" className={ styles.settings_icon }/>
}

export default SettingsIcon