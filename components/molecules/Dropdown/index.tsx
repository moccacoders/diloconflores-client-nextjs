import classnames from "classnames"
import { FunctionComponent, useState } from "react"
import { IDropdownProps } from "interfaces/molecules/dropdown"
import Button from "atoms/Buttons"

const Dropdown: FunctionComponent<IDropdownProps> = ({
    placeholder = null,
    value = null,
    items = [],
    onChange,
    style = "primary",
}) => {
    const [currentValue, setValue] = useState(value)
    const [open, setOpen] = useState(false)

    const openDropdown = () => {
        setOpen(!open)
    }

    const handleChange = (evt) => {
        setValue(evt.target.value)
        openDropdown()
        onChange(evt)
    }

    return (
        <div className="dropdown">
            <Button style={style} onClick={openDropdown}>
                {currentValue || placeholder || items[0]}
            </Button>
            <ul
                className={classnames({
                    "dropdown-menu": true,
                    active: !!open,
                })}
            >
                {items.length > 0 &&
                    items.map((item, ind) => (
                        <li className="dropdown-menu--item" key={ind}>
                            <Button
                                style="light"
                                onClick={handleChange}
                                value={item}
                            >
                                {item}
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Dropdown
