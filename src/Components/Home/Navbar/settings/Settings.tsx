import { FC } from "react";
import SettingsIcon from "./SettingsIcon";
import { styles } from "./SettingStyles";

const Settings: FC = () => {

    return (
        <div className={ styles.settings_wrap }>
            <SettingsIcon />
        </div>
    )
}

export default Settings