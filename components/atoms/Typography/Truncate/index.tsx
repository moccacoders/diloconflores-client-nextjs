import { FunctionComponent } from "react"
import { ITruncateProps } from "interfaces/typography"
import { sizes } from "catalogs"

const Truncate: FunctionComponent<ITruncateProps> = ({
    children,
    size,
    width,
    color,
    textAlign,
    fontWeight,
    lines: WebkitLineClamp = 4,
}) => {
    if (!sizes.includes(size)) size = sizes[0]
    return (
        <>
            <div
                className={`truncate-component truncate-component-${size}`}
                style={{
                    width,
                    color,
                    textAlign,
                    fontWeight,
                    WebkitLineClamp,
                }}
            >
                {children}
            </div>
        </>
    )
}

export default Truncate
