import { Fragment } from "react"
import styles from "styles/atoms/buttons/default.module.scss"

const Button = ({
    style,
    type = "button",
    className,
    onClick,
    disabled,
    size,
    children,
    swipeToTop = true,
    outline,
    ...props
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
                {...props}
            >
                {children}
            </button>
        </Fragment>
    )
}

export default Button
