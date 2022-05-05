import { ReactElement } from "react"

export interface IAppLayoutProps {
	children: string | ReactElement | ReactElement[]
	title?: string
}

export interface ITimelineProps {
	userName: string
}
