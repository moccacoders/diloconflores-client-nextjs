import { FunctionComponent } from "react"
import { ICartListProps } from "interfaces/molecules/cart"
import CartItem from "molecules/Cart/Item"

const CartList: FunctionComponent<ICartListProps> = ({ items = [] }) => {
    return (
        <>
            <div className="cart-list">
                {items.length > 0 ? (
                    items.map((item, ind) => <CartItem item={item} key={ind} />)
                ) : (
                    <h2>No items in your cart</h2>
                )}
            </div>
        </>
    )
}

export default CartList
