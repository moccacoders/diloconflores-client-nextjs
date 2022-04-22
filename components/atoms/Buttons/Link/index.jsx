import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import styles from "styles/atoms/buttons/default.module.scss"

const BtnLink = ({
    style,
    disabled,
    className,
    size,
    swipeToTop = true,
    outline,
    target,
    children,
    button = false,
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

    if (!button) swipeToTop = false
    if (!types.includes(style)) style = types[8]
    btnClass = btnClass.split(" ")
    if (size && sizes.includes(size))
        btnClass.unshift(styles[`${!!button ? "btn" : "link"}-${size}`])
    if (!btnClass.includes(`${!!button ? "btn" : "link"}-${style}`))
        btnClass.unshift(styles[`${!!button ? "btn" : "link"}-${style}`])
    if (!btnClass.includes(!!button ? "btn" : "link"))
        btnClass.unshift(styles[!!button ? "button" : "link"])

    if (!!swipeToTop) btnClass.push(styles["swipe-to-top"])
    if (!!outline)
        btnClass.push(styles[`${!!button ? "btn" : "link"}-outline-${style}`])

    if (!!disabled) props.href = "javascript:void(0)"
    if (/^https?/.test(props.href)) props.passHref = true

    btnClass = btnClass.filter((a) => !!a)
    btnClass = btnClass.join(" ")

    const Content = ({ children }) => {
        if (!disabled) return <Link {...props}>{children}</Link>
        else return <>{children}</>
    }

    return (
        <Fragment>
            <Content>
                <a
                    className={btnClass}
                    disabled={disabled}
                    href={props.href}
                    target={target}
                >
                    {children}
                </a>
            </Content>
        </Fragment>
    )
}

export default BtnLink