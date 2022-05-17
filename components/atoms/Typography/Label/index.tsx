import { FunctionComponent } from "react"
import { ILabelProps } from "interfaces/atoms/typography"
import { sizes } from "catalogs"

const Label: FunctionComponent<ILabelProps> = ({
    children,
    size,
    width,
    color,
    textAlign,
    fontWeight,
    htmlFor,
}) => {
    if (!sizes.includes(size)) size = sizes[0]
    return (
        <>
            <label
                htmlFor={htmlFor}
                style={{ width, color, textAlign, fontWeight }}
                className={`label-component label-component-${size}`}
            >
                {children}
            </label>
        </>
    )
}

export default Label
