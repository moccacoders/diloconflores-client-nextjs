import { ReactElement } from "react"
import { LinkProps } from "next/link"

export interface IButtonDefault {
	children:
		| string
		| string[]
		| ReactElement
		| ReactElement[]
		| number
		| undefined
		| any
	className?: string
	disabled?: string | boolean
	icon?: string
	iconPosition?: "left" | "right"
	onClick?: (e?: any) => void
	outline?: boolean
	size?: "sm" | "lg" | "md"
	style?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "white"
		| string
	swipeToTop?: boolean
	type?: "button" | "submit" | "reset"
	title?: string
	badge?: string | number
	value?: string | ReadonlyArray<string> | number | undefined
	badgeType?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "white"
		| string
}

export interface IButtonLink extends IButtonDefault, LinkProps {
	target?: any
	button?: boolean
	href: any
	passHref?: boolean
}

export interface IButtonIcon {
	className?: string
	disabled?: string | boolean
	icon?: string
	onClick?: (e?: any) => void
	outline?: boolean
	size?: "sm" | "lg" | "md"
	style?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "white"
		| string
	swipeToTop?: boolean
	type?: "button" | "submit" | "reset"
	transparent?: boolean
	title?: string
	tooltipPlacement?:
		| "topStart"
		| "top"
		| "topEnd"
		| "rightStart"
		| "right"
		| "rightEnd"
		| "bottomStart"
		| "bottom"
		| "bottomEnd"
		| "leftStart"
		| "left"
		| "leftsEnd"
	badge?: string | number
	badgeType?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "white"
		| string
}
