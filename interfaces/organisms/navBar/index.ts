export interface NavBarItem {
	name: string
	text: string
	id: string
	path?: string
	as?: string
	children?: NavBarItem[]
}
