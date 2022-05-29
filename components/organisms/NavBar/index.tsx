import classnames from "classnames"
import { FunctionComponent, useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { NavBarItem } from "interfaces/organisms/navBar"
import Link from "atoms/Buttons/Link"
import Dropdown from "molecules/Dropdown"

const NavBar: FunctionComponent = () => {
    const ref = useRef(null)
    const router = useRouter()
    const [parentSelected, setParentSelected] = useState(null)
    const [selected, setSelected] = useState(null)

    const items = [
        {
            name: "home",
            text: "Home",
            href: "/",
            id: "home",
        },
        {
            name: "tipo_de_flor",
            text: "Tipo de Flor",
            id: "tipo_de_flor",
            items: [
                {
                    name: "rosas",
                    text: "Rosas",
                    href: "/collections/[collection]",
                    id: "rosas",
                    as: `/collections/rosas`,
                },
                {
                    name: "lilies",
                    text: "Lilies",
                    href: "/collections/[collection]",
                    id: "lilies",
                    as: `/collections/lilies`,
                },
                {
                    name: "gerberas",
                    text: "Gerberas",
                    href: "/collections/[collection]",
                    id: "gerberas",
                    as: `/collections/gerberas`,
                },
            ],
        },
        {
            name: "ocasion",
            text: "Ocasión",
            id: "ocasion",
            items: [
                {
                    name: "amor",
                    text: "Amor",
                    href: "/collections/[collection]",
                    id: "amor",
                    as: `/collections/amor`,
                },
                {
                    name: "perdon",
                    text: "Perdón",
                    href: "/collections/[collection]",
                    id: "perdon",
                    as: `/collections/perdon`,
                },
                {
                    name: "aniversario",
                    text: "Aniversario",
                    href: "/collections/[collection]",
                    id: "aniversario",
                    as: `/collections/aniversario`,
                },
            ],
        },
    ]

    useEffect(() => {
        const handleClickOutsideNavBar = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                open && toggleNavBar()
            }
        }
        document.addEventListener("click", handleClickOutsideNavBar, true)
        return () => {
            document.removeEventListener(
                "click",
                handleClickOutsideNavBar,
                true
            )
        }
    }, [])

    const toggleNavBar = () => {
        document.body.classList.toggle("mobile-menu-opened")
    }

    useEffect(() => {
        const { collection } = router.query
        const parent = items.find(
            (item) =>
                item.href === router.pathname ||
                (item.items &&
                    item.items.find(
                        (child) =>
                            child.href === router.pathname &&
                            router.pathname !== router.asPath &&
                            child.as === router.asPath
                    ))
        )
        const child =
            parent.items &&
            parent.items.find(
                (child) =>
                    child.href === router.pathname && child.as === router.asPath
            )

        if (parent) setParentSelected(parent)
        if (child)
            setSelected({
                value: `${child.name}-${parent.name}`,
                text: child.text,
            })
        else setSelected(null)
    }, [router.pathname, router.asPath])

    const handleChangeDropdown = ({ value }) => {
        const [childName, parentName] = value.split("-")
        const parent = items.find((e) => e.name === parentName)
        const child = parent.items.find((e) => e.name === childName)

        router.push(child.href, child.as)
    }

    const menuItem = ({ name, text, id, href, as, items = [] }) => {
        switch (items.length) {
            case 0:
                return (
                    <Link style="dark" href={href ?? ""} as={as}>
                        {text}
                    </Link>
                )
            default:
                return (
                    <Dropdown
                        style={"light"}
                        swipeToTop={false}
                        placeholder={text}
                        onChange={handleChangeDropdown}
                        preservePlaceholder
                        value={selected}
                        items={items.map((item) => {
                            return {
                                value: `${item.name}-${name}`,
                                text: item.text,
                            }
                        })}
                    />
                )
        }
    }

    return (
        <>
            <nav id="nav-bar" ref={ref}>
                <ul className="nav-bar--list">
                    {items.map(
                        (
                            { name, text, id, href, as, items }: NavBarItem,
                            ind
                        ) => (
                            <li
                                className={classnames({
                                    active: parentSelected?.name === name,
                                    "nav-bar--list-item": true,
                                })}
                                key={ind}
                            >
                                {menuItem({ name, text, id, href, as, items })}
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar
