export interface NavBarItem {
	name: string
	text: string
	id: string
	href?: string
	as?: string
	items?: NavBarItem[]
}
