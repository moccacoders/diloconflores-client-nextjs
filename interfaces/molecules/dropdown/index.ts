import { ReactElement, ChangeEventHandler } from "react"
import { IButtonDefault } from "interfaces/atoms/buttons"

export interface IDropdownProps extends IButtonDefault {
	children?: null | undefined
	items: Array<string>
	placeholder?: string | null
	value?: string | ReadonlyArray<string> | number | undefined
	onChange?: ChangeEventHandler<any> | undefined
}
