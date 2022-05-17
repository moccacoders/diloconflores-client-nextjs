import { FunctionComponent } from "react"
import {
    IInputGroupProps,
    IAddonTextProps,
    IAddonButtonProps,
} from "interfaces/molecules/inputGroup"
import Input from "atoms/Input"

const InputGroup: FunctionComponent<IInputGroupProps> = ({
    children,
    addonPosition = "left",
    ...inputProps
}) => {
    const prepend =
        Array.isArray(children) && children[0]
            ? children[0]
            : addonPosition === "left"
            ? children
            : undefined
    const append =
        Array.isArray(children) && children[1]
            ? children[1]
            : addonPosition === "right"
            ? children
            : undefined
    return (
        <div className="input-group">
            {prepend && <>{prepend}</>}
            <Input {...inputProps} />
            {append && <>{append}</>}
        </div>
    )
}

const AddonText: FunctionComponent<IAddonTextProps> = ({ children }) => {
    return (
        <div className="input-group--addon input-group--text-addon">
            {children}
        </div>
    )
}

const AddonButton: FunctionComponent<IAddonButtonProps> = ({ children }) => {
    return (
        <div className="input-group--addon input-group--button-addon">
            {children}
        </div>
    )
}

export default InputGroup
export { AddonButton, AddonText }
