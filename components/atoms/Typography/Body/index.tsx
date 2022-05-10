import { FunctionComponent } from "react"
import { IBodyProps } from "interfaces/typography"
import { sizes } from "catalogs"
import HTMLPaser from "react-html-parser"

const Body: FunctionComponent<IBodyProps> = ({
    children,
    size,
    width,
    color,
    textAlign,
    fontWeight,
    parseHTML = false,
}) => {
    if (!sizes.includes(size)) size = sizes[0]

    return (
        <>
            <div
                style={{ width, color, textAlign, fontWeight }}
                className={`body-content body-content-${size}`}
            >
                {parseHTML ? HTMLPaser(children) : children}
            </div>
        </>
    )
}

export default Body
