import { FunctionComponent } from "react"
import Image from "atoms/Image"
import FloatCart from "molecules/Cart/Floating"
import SearchBox from "molecules/Header/SearchBox"

const Header: FunctionComponent = () => {
    return (
        <>
            <div id={"header-bar"}>
                <div className="header-bar-content">
                    <div className="header-bar-items header-bar--logo">
                        <Image width={200} src={"/logo/logo.svg"} />
                    </div>
                    <div className="header-bar-items header-bar--search-box">
                        <SearchBox />
                    </div>
                    <div className="header-bar-items header-bar--actions">
                        <FloatCart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
