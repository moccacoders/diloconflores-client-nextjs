import { FunctionComponent } from "react"
import Link from "next/link"
import Image from "atoms/Image"
import FloatCart from "molecules/Cart/Floating"
import SearchBox from "molecules/Header/SearchBox"
import { ButtonIcon } from "atoms/Buttons"

const Header: FunctionComponent = () => {
    const toggleMenu = () => {
        document.body.classList.add("mobile-menu-opened")
    }

    return (
        <>
            <div id={"header-bar"}>
                <div className="header-bar-content">
                    <div className="header-bar-items header-bar--logo">
                        <Link href={"/"}>
                            <a>
                                <Image width={200} src={"/logo/logo.svg"} />
                            </a>
                        </Link>
                    </div>
                    <div className="header-bar-items header-bar--search-box">
                        <SearchBox />
                    </div>
                    <div className="header-bar-items header-bar--actions">
                        <FloatCart />
                        <ButtonIcon
                            icon={"menu"}
                            transparent
                            size="lg"
                            onClick={toggleMenu}
                            className={"menu-toggle"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
