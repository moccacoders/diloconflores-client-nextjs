import { FunctionComponent, useState, useRef, useEffect } from "react"
import { ButtonIcon } from "atoms/Buttons"
import CartList from "molecules/Cart/List"

const Floating: FunctionComponent = () => {
    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleClickOutsideNavBar = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                document.body.classList.contains("mobile-cart-list-opened") &&
                    toggleOpenCart()
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

    const toggleOpenCart = () => {
        setShow(!show)
        document.body.classList.toggle("mobile-cart-list-opened")
    }

    console.log(ref.current)
    return (
        <div className="cart-container cart-floating">
            <ButtonIcon
                icon={"cart"}
                transparent
                size="lg"
                badge={items.length}
                onClick={toggleOpenCart}
            />
            <CartList ref={ref} open={show} items={items} />
        </div>
    )
}

export default Floating
