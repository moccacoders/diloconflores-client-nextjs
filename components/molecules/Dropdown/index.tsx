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
        onChange(evt.target.value, evt)
    }

    return (
        <div
            className={classnames({
                dropdown: true,
                opened: !!open,
            })}
        >
            <Button
                style={style}
                onClick={openDropdown}
                className="dropdown-toggle"
            >
                {currentValue ||
                    placeholder ||
                    (typeof items[0] === "object" ? items[0]?.text : items[0])}
            </Button>
            <ul
                className={classnames({
                    "dropdown-menu": true,
                    active: !!open,
                })}
            >
                {items.length > 0 &&
                    items.map((item, ind) => (
                        <li
                            className={classnames({
                                "dropdown-menu--item": true,
                                active: (item?.value || item) === currentValue,
                            })}
                            key={ind}
                        >
                            <Button
                                style={
                                    (item?.value || item) === currentValue
                                        ? "info"
                                        : "white"
                                }
                                onClick={handleChange}
                                value={
                                    typeof item === "object"
                                        ? item?.value
                                        : item
                                }
                            >
                                {item?.text || item}
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Dropdown
