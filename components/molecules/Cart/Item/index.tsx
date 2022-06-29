import { FunctionComponent } from "react"
import { ICartItemProps } from "interfaces/molecules/cart"
import Image from "atoms/Image"

const CartItem: FunctionComponent<ICartItemProps> = ({
    item: {
        id,
        name,
        price,
        currency,
        currencyPostion = "left",
        comparePrice,
        quantity,
    },
}) => {
    return (
        <div className="cart-item">
            <div className="cart-item--image">
                <Image src={"/bruce-wayne.jpg"} width={50} />
            </div>
            <div className="cart-item--description">
                <h4 className="cart-item--description-name">{name}</h4>
                <div className="cart-item--quantity">
                    <span>
                        {quantity} <strong>X</strong>
                    </span>
                    <div className="cart-item--price">
                        <p className="cart-item--description-price">
                            {currencyPostion === "left" && (
                                <strong>{currency} </strong>
                            )}
                            <span>{price}</span>
                            {currencyPostion === "right" && (
                                <strong> {currency}</strong>
                            )}
                        </p>
                        {comparePrice && (
                            <p className="cart-item--description-compare-price">
                                {currencyPostion === "left" && (
                                    <span>{currency} </span>
                                )}
                                <span>{comparePrice}</span>
                                {currencyPostion === "right" && (
                                    <span> {currency}</span>
                                )}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="cart-item--actions"></div>
        </div>
    )
}

export default CartItem
