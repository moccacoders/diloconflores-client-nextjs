import { Fragment, FunctionComponent } from "react"
import Icon from "atoms/Icon"
import { IButtonIcon } from "interfaces/atoms/buttons"
import { Tooltip } from "@nextui-org/react"
import Badge from "atoms/Badges"
import { types } from "catalogs"

const ButtonIcon: FunctionComponent<IButtonIcon> = ({
    style = "primary",
    type = "button",
    className,
    onClick,
    disabled,
    size,
    swipeToTop = true,
    outline,
    icon = null,
    transparent = false,
    title,
    tooltipPlacement = "",
    badge,
    badgeType,
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
    if (size && sizes.includes(size)) btnClass.unshift(`btn-icon-${size}`)
    if (!btnClass.includes(`btn-${style}`)) btnClass.unshift(`btn-${style}`)
    if (!btnClass.includes("btn-icon")) btnClass.unshift("btn-icon")
    if (!btnClass.includes("btn")) btnClass.unshift("btn")

    if (swipeToTop) btnClass.push("swipe-to-top")
    if (outline) btnClass.push(`btn-outline-${style}`)
    if (transparent) btnClass.push(`btn-transparent-${style}`)

    btnClass = btnClass.filter((a) => !!a)
    btnClass = btnClass.join(" ")

    const Button = ({ children }) => {
        switch (!!title) {
            case true:
                return (
                    <Tooltip placement={tooltipPlacement} content={title}>
                        {children}
                    </Tooltip>
                )
            default:
                return <>{children}</>
        }
    }

    return (
        <Fragment>
            <Button>
                <button
                    onClick={onClick}
                    className={btnClass}
                    disabled={disabled}
                    title={title}
                    type={type}
                >
                    {badge && <Badge type={badgeType || style}>{badge}</Badge>}
                    <Icon icon={icon} />
                </button>
            </Button>
        </Fragment>
    )
}

export default ButtonIcon
