import { ReactElement, ChangeEventHandler } from "react"
import { IButtonDefault } from "interfaces/atoms/buttons"

export interface DropdownItem {
	value: string | number
	text: string | number
}

export interface IDropdownProps extends IButtonDefault {
	children?: null | undefined
	items: Array<string> | Array<DropdownItem>
	placeholder?: string | null
	value?: string | ReadonlyArray<string> | number | undefined
	onChange: (element: any, event: ChangeEventHandler<any> | undefined) => void
}
