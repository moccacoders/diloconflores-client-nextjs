import IcoMoon from "react-icomoon"
import iconSet from "public/icons.json"

const Icon = (props) => {
    return <IcoMoon iconSet={iconSet} {...props} />
}

export default Icon
