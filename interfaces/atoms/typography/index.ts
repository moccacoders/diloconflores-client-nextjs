import { ReactElement } from "react"
import { StandardLonghandProperties } from "csstype"

export interface ITitleProps {
	type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	color?: string
	fontWeigth?: any
	children: string | string[] | ReactElement | ReactElement[]
}

export interface IBodyProps {
	children: string | string[] | ReactElement | ReactElement[]
	size?: "sm" | "lg" | "md" | "xl" | string
	width?: number | string
	color?: string
	textAlign?: StandardLonghandProperties["textAlign"]
	fontWeight?: number | string
	parseHTML?: boolean
}

export interface ILabelProps {
	children: string | string[] | ReactElement | ReactElement[]
	size?: "sm" | "lg" | "md" | "xl" | string
	width?: number | string
	color?: string
	textAlign?: StandardLonghandProperties["textAlign"]
	fontWeight?: number | string
	htmlFor?: string
}

export interface ITruncateProps {
	children: string | string[] | ReactElement | ReactElement[]
	size?: "sm" | "lg" | "md" | "xl" | string
	width?: number | string
	color?: string
	textAlign?: StandardLonghandProperties["textAlign"]
	fontWeight?: number | string
	lines?: number
}
