export interface ICartItemProps {
	item: CartItem
}

export interface CartItem {
	id: number
	name: string
	price: number
	currency: string
	currencyPostion?: string
	comparePrice?: number | undefined
	quantity: number
}

export interface ICartListProps {
	items: Array<CartItem>
}
