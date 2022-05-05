import { ReactElement } from "react"
import { LinkProps } from "next/link"

export interface IButtonDefault {
	children: string | ReactElement
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
		| string
	swipeToTop?: boolean
	type?: "button" | "submit" | "reset"
}

export interface IButtonLink extends IButtonDefault, LinkProps {
	target?: any
	button?: boolean
	href: any
	passHref?: boolean
}
