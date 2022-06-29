import { ChangeEventHandler } from "react"
import { IButtonDefault } from "interfaces/atoms/buttons"

export interface DropdownItem {
	value: string | number
	text: string | number
}

export interface IDropdownProps
	extends Omit<IButtonDefault, "value" | "children"> {
	children?: null | undefined
	items: Array<DropdownItem>
	placeholder?: string | null
	onChange: (element: any, event: ChangeEventHandler<any> | undefined) => void
	preservePlaceholder?: boolean
	value?: DropdownItem | string
}
