import { Fragment, FunctionComponent } from "react"
import styles from "styles/atoms/buttons/default.module.scss"
import Icon from "atoms/icon"
import { IButtonDefault } from "interfaces/buttons"

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
}) => {
    const types = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link",
    ]
    const sizes = ["sm", "lg"]
    let btnClass = className ?? ""

    if (!types.includes(style)) style = types[0]
    btnClass = btnClass.split(" ")
    if (size && sizes.includes(size)) btnClass.unshift(styles[`btn-${size}`])
    if (!btnClass.includes(`btn-${style}`))
        btnClass.unshift(styles[`btn-${style}`])
    if (!btnClass.includes("btn")) btnClass.unshift(styles.button)

    if (swipeToTop) btnClass.push(styles["swipe-to-top"])
    if (outline) btnClass.push(styles[`btn-outline-${style}`])

    btnClass = btnClass.filter((a) => !!a)
    btnClass = btnClass.join(" ")

    return (
        <Fragment>
            <button
                onClick={onClick}
                className={btnClass}
                disabled={disabled}
                type={type}
            >
                {icon && (
                    <Icon
                        icon={icon}
                        className={styles[`icon-${iconPosition}`]}
                    />
                )}
                {children}
            </button>
        </Fragment>
    )
}

export default Button
