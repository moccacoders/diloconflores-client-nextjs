import { ReactElement } from "react"
import { IInputProps } from "interfaces/atoms/input"

export interface IInputGroupProps extends IInputProps {
	children: string | string[] | ReactElement | ReactElement[]
	addonPosition?: "left" | "right"
	inputElement?: ReactElement
}

export interface IAddonTextProps {
	children: string | string[] | ReactElement | ReactElement[]
}

export interface IAddonButtonProps {
	children: string | string[] | ReactElement | ReactElement[]
}
