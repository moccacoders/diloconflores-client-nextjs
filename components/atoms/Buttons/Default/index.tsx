import { Fragment, FunctionComponent } from "react"
import Icon from "atoms/Icon"
import Badge from "atoms/Badges"
import { IButtonDefault } from "interfaces/atoms/buttons"
import { types } from "catalogs"

const Button: FunctionComponent<IButtonDefault> = ({
    style,
    type = "button",
    className,
    onClick,
    disabled,
    size,
    children,
    swipeToTop = true,
    outline,
    icon = null,
    iconPosition = "left",
    badge,
    badgeType,
    value,
}) => {
    // const types = [
    //     "primary",
    //     "secondary",
    //     "success",
    //     "danger",
    //     "warning",
    //     "info",
    //     "light",
    //     "dark",
    //     "link",
    // ]
    const sizes = ["sm", "lg"]
    let btnClass: string | Array<string> = className ?? ""

    if (!types.includes(style)) style = types[0]
    btnClass = btnClass.split(" ")
    if (size && sizes.includes(size)) btnClass.unshift(`btn-${size}`)
    if (!btnClass.includes(`btn-${style}`)) btnClass.unshift(`btn-${style}`)
    if (!btnClass.includes("btn")) btnClass.unshift("btn")

    if (swipeToTop) btnClass.push("swipe-to-top")
    if (outline) btnClass.push(`btn-outline-${style}`)

    btnClass = btnClass.filter((a) => !!a)
    btnClass = btnClass.join(" ")

    return (
        <Fragment>
            <button
                onClick={onClick}
                className={btnClass}
                disabled={disabled}
                type={type}
                value={value}
            >
                {badge && <Badge type={badgeType || style}>{badge}</Badge>}
                {icon && (
                    <Icon icon={icon} className={`icon-${iconPosition}`} />
                )}
                {children}
            </button>
        </Fragment>
    )
}

export default Button
