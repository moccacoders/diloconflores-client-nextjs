import { ReactElement } from "react"

export interface ITitleProps {
	type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	color?: string
	fontWeigth?: any
	children: string | string[] | ReactElement | ReactElement[]
}
