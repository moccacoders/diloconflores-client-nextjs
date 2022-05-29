import classnames from "classnames"
import { FunctionComponent, useState, useEffect, useRef } from "react"
import { IDropdownProps, DropdownItem } from "interfaces/molecules/dropdown"
import Button from "atoms/Buttons"

const Dropdown: FunctionComponent<IDropdownProps> = ({
    placeholder = null,
    value = null,
    items = [],
    onChange,
    style = "primary",
    preservePlaceholder = false,
    className,
    ...buttonProps
}) => {
    const ref = useRef(null)
    const [currentValue, setValue] = useState<DropdownItem>(value)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                open && openDropdown()
            }
        }
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [open])

    useEffect(() => {
        setValue(value)
    }, [value])

    const openDropdown = () => {
        setOpen(!open)
    }

    const handleChange = (evt) => {
        const value =
            typeof items[0] === "object"
                ? items.find((i) => i.value === evt.target.value)
                : evt.target.value

        setValue(value)
        openDropdown()
        onChange(value, evt)
    }

    return (
        <div
            ref={ref}
            className={classnames(className, {
                dropdown: true,
                opened: !!open,
            })}
        >
            <Button
                style={style}
                onClick={openDropdown}
                className="dropdown-toggle"
                {...buttonProps}
            >
                {(!preservePlaceholder &&
                    (currentValue?.text || currentValue)) ||
                    placeholder ||
                    (typeof items[0] === "object" ? items[0]?.text : items[0])}
            </Button>
            <ul
                className={classnames({
                    "dropdown-menu": true,
                    open: !!open,
                })}
            >
                {items.length > 0 &&
                    items.map((item, ind) => {
                        return (
                            <li
                                className={classnames({
                                    "dropdown-menu--item": true,
                                    active:
                                        (item?.value || item) ===
                                        (currentValue?.value || currentValue),
                                })}
                                key={ind}
                            >
                                <Button
                                    swipeToTop={false}
                                    style={
                                        (item?.value || item) ===
                                        (currentValue?.value || currentValue)
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
                        )
                    })}
            </ul>
        </div>
    )
}

export default Dropdown
