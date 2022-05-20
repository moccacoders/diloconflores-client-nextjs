import { FunctionComponent } from "react"
import Link from "next/link"
import { IButtonLink } from "interfaces/atoms/buttons"
import { types } from "catalogs"

const BtnLink: FunctionComponent<IButtonLink> = ({
    style,
    disabled = false,
    className,
    size,
    swipeToTop = true,
    outline,
    target,
    children,
    button = false,
    ...props
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

    if (!button) swipeToTop = false
    if (!types.includes(style)) style = types[8]
    btnClass = btnClass.split(" ")
    if (size && sizes.includes(size))
        btnClass.unshift(`${button ? "btn" : "link"}-${size}`)
    if (!btnClass.includes(`${button ? "btn" : "link"}-${style}`))
        btnClass.unshift(`${button ? "btn" : "link"}-${style}`)
    if (!btnClass.includes(button ? "btn" : "link"))
        btnClass.unshift(button ? "btn" : "link")

    if (swipeToTop) btnClass.push("swipe-to-top")
    if (outline) btnClass.push(`${button ? "btn" : "link"}-outline-${style}`)

    if (disabled) props.href = null
    if (/^https?/.test(props.href)) props.passHref = true

    btnClass = btnClass.filter((a) => !!a)
    btnClass = btnClass.join(" ")

    const Content = ({ children }) => {
        if (!disabled) return <Link {...props}>{children}</Link>
        else return <>{children}</>
    }

    return (
        <>
            <Content>
                <a
                    className={btnClass}
                    href={props.href}
                    target={target}
                    disabled={disabled}
                >
                    {children}
                </a>
            </Content>
        </>
    )
}

export default BtnLink
