import { FunctionComponent } from "react"
import Dropdown from "molecules/Dropdown"
import Link from "atoms/Buttons/Link"

const TopBar: FunctionComponent = () => {
    const changeLanguage = (evt) => {
        console.log(evt)
    }

    return (
        <div id="top-bar">
            <div className="top-bar--content">
                <div className="top-bar--item">
                    <Dropdown
                        items={[
                            { value: "es-MX", text: "Español" },
                            { value: "en-US", text: "Inglés" },
                        ]}
                        onChange={changeLanguage}
                        style="dark"
                        swipeToTop={false}
                    />
                    <Dropdown
                        items={[
                            { value: "MXN", text: "Pesos Méxicanos" },
                            { value: "USD", text: "Dolares Estadounidense" },
                        ]}
                        onChange={changeLanguage}
                        style="dark"
                        swipeToTop={false}
                    />
                </div>
                <div className="top-bar--item">
                    <Link href="/login" style="light">
                        Iniciar Sesión
                    </Link>
                    <Link href="/login" style="light" className="signup">
                        Registro
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar
