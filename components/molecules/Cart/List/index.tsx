import classnames from "classnames"
import { FunctionComponent, forwardRef } from "react"
import { ICartListProps } from "interfaces/molecules/cart"
import CartItem from "molecules/Cart/Item"

const CartList: FunctionComponent<ICartListProps> = forwardRef((props, ref) => {
    const { items = [], open = false } = props
    return (
        <>
            <div
                ref={ref}
                id="cart-list"
                className={classnames({
                    "cart-list": true,
                    opened: open,
                })}
            >
                {items.length > 0 ? (
                    items.map((item, ind) => <CartItem item={item} key={ind} />)
                ) : (
                    <h2>No items in your cart</h2>
                )}
            </div>
        </>
    )
})

CartList.displayName = "CartList"

export default CartList
