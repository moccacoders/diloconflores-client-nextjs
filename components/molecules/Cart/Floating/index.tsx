import { FunctionComponent, useState } from "react"
import { ButtonIcon } from "atoms/Buttons"
import CartList from "molecules/Cart/List"

const Floating: FunctionComponent = () => {
    const [show, setShow] = useState(false)
    const items = [
        {
            id: 1,
            name: "Articulo Uno",
            price: 100,
            currency: "MXN",
            comparePrice: 100,
            quantity: 1,
        },
        {
            id: 15,
            name: "Articulo dos",
            price: 90,
            currency: "MXN",
            quantity: 3,
        },
    ]

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="cart-container cart-floating">
            <ButtonIcon
                icon={"cart"}
                transparent
                size="lg"
                badge={items.length}
                onClick={handleClick}
            />
            {show && <CartList items={items} />}
        </div>
    )
}

export default Floating
