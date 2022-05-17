import { FunctionComponent } from "react"
import { IBadgeDefault } from "interfaces/atoms/badges"

const Badge: FunctionComponent<IBadgeDefault> = ({
    children,
    type = "primary",
}) => {
    return (
        <>
            <span className={`badge badge-${type}`}>{children}</span>
        </>
    )
}

export default Badge
