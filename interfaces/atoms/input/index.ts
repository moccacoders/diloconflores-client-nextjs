import React, {
	ChangeEventHandler,
	FocusEventHandler,
	FunctionComponent,
	HTMLInputTypeAttribute,
	KeyboardEventHandler,
	MouseEventHandler,
	ReactEventHandler,
} from "react"

export interface IInputProps {
	accept?: string | undefined
	alt?: string | undefined
	autoComplete?: string | undefined
	autoFocus?: boolean | undefined
	checked?: boolean | undefined
	className?: string
	crossOrigin?: string | undefined
	disabled?: boolean | undefined
	max?: number | string | undefined
	maxLength?: number | undefined
	min?: number | string | undefined
	minLength?: number | undefined
	multiple?: boolean | undefined
	name?: string | undefined
	pattern?: string | undefined
	placeholder?: string | undefined
	readOnly?: boolean | undefined
	required?: boolean | undefined
	size?: number | undefined
	src?: string | undefined
	step?: number | string | undefined
	title?: string
	type?: HTMLInputTypeAttribute | undefined
	value?: string | ReadonlyArray<string> | number | undefined
	onChange?: ChangeEventHandler<any> | undefined
	onSelect?: ReactEventHandler<any> | undefined
	onBlur?: FocusEventHandler<any> | undefined
	onClick?: MouseEventHandler<any> | undefined
	onKeyUp?: KeyboardEventHandler<any> | undefined
	onKeyDown?: KeyboardEventHandler<any> | undefined
}
