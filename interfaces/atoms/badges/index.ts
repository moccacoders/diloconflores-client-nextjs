import { ReactElement } from "react"

export interface IBadgeDefault {
	children: string | ReactElement
	type?:
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
