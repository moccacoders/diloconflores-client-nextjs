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
    const [items, setItems] = useState([])

    useEffect(() => {
        if (localStorage.getItem("store-menu"))
            return setItems(JSON.parse(localStorage.getItem("store-menu")))
        fetch(`${process.env.NEXT_PUBLIC_APP_ENDPOINT}menus/main-menu/items`)
            .then((res) => res.json())
            .then((res) => {
                if (res.total > 0) {
                    setItems(res.items)
                    localStorage.setItem(
                        "store-menu",
                        JSON.stringify(res.items)
                    )
                } else setItems([])
            })
    }, [])

    useEffect(() => {
        if (document.body.classList.contains("mobile-menu-opened"))
            toggleNavBar()
    }, [router.query])

    useEffect(() => {
        const handleClickOutsideNavBar = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                document.body.classList.contains("mobile-menu-opened") &&
                    toggleNavBar()
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
        if (items.length < 0) {
            const parent = items.find(
                (item) =>
                    item.path === router.pathname ||
                    (item.children &&
                        item.children.find(
                            (child) =>
                                child.path === router.pathname &&
                                router.pathname !== router.asPath &&
                                child.as === router.asPath
                        ))
            )

            const child =
                parent.children &&
                parent.children.find(
                    (child) =>
                        child.path === router.pathname &&
                        child.as === router.asPath
                )

            if (parent) setParentSelected(parent)
            if (child)
                setSelected({
                    value: `${child.name}-${parent.name}`,
                    text: child.text,
                })
            else setSelected(null)
        }
    }, [router.pathname, router.asPath])

    const handleChangeDropdown = ({ value }) => {
        const [childName, parentName] = value.split("-")
        const parent = items.find((e) => e.id.toString() === parentName)
        const child = parent.children.find((e) => e.id.toString() === childName)

        router.push(child.path, child.as)
    }

    const menuItem = ({ name, text, id, path, as, children = [] }) => {
        const items = children.map((item) => {
            return {
                value: `${item.id}-${id}`,
                text: item.name,
            }
        })

        switch (children.length) {
            case 0:
                return (
                    <Link style="dark" href={path ?? ""} as={as}>
                        {name}
                    </Link>
                )
            default:
                return (
                    <Dropdown
                        key={id}
                        style={"light"}
                        swipeToTop={false}
                        placeholder={text}
                        onChange={handleChangeDropdown}
                        preservePlaceholder
                        value={selected}
                        items={items}
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
                            { name, text, id, path, as, children }: NavBarItem,
                            ind
                        ) => (
                            <li
                                className={classnames({
                                    active: parentSelected?.name === name,
                                    "nav-bar--list-item": true,
                                })}
                                key={ind}
                            >
                                {menuItem({
                                    name,
                                    text,
                                    id,
                                    path,
                                    as,
                                    children,
                                })}
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar
