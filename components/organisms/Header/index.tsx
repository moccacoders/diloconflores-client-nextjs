import { FunctionComponent } from "react"
import Image from "atoms/Image"
import Dropdown from "molecules/Dropdown"
import InputGroup, { AddonButton } from "molecules/InputGroup"
import { ButtonIcon } from "atoms/Buttons"

const Header: FunctionComponent = () => {
    return (
        <>
            <div id={"header-bar"}>
                <div className="header-bar-content">
                    <div className="header-bar-items header-bar--logo">
                        <Image width={200} src={"/logo/logo.svg"} />
                    </div>
                    <div className="header-bar-items header-bar--search-box">
                        <InputGroup
                            placeholder={"Hello World"}
                            addonPosition={"right"}
                        >
                            <AddonButton>
                                <Dropdown
                                    items={["hello", "world"]}
                                    style="light"
                                />
                            </AddonButton>
                            <AddonButton>
                                <ButtonIcon icon={"search"} />
                            </AddonButton>
                        </InputGroup>
                    </div>
                    <div className="header-bar-items header-bar--actions">
                        <ButtonIcon
                            icon={"heart"}
                            transparent
                            size="lg"
                            badge={"0"}
                        />
                        <ButtonIcon
                            icon={"cart"}
                            transparent
                            size="lg"
                            badge={"0"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
