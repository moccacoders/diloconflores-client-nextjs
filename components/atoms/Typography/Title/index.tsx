import { FunctionComponent } from "react"
import { ITitleProps } from "interfaces/typography"
// import styles from "styles/atoms/typography/default.module.scss"

const Title: FunctionComponent<ITitleProps> = ({
    type = "h2",
    color,
    children,
}) => {
    const Container = ({ children }) => {
        switch (type) {
            case "h1":
                return (
                    <h1 style={{ color }} className={"h1"}>
                        {children}
                    </h1>
                )
            case "h2":
                return (
                    <h2 style={{ color }} className={"h2"}>
                        {children}
                    </h2>
                )
            case "h3":
                return (
                    <h3 style={{ color }} className={"h3"}>
                        {children}
                    </h3>
                )
            case "h4":
                return (
                    <h4 style={{ color }} className={"h4"}>
                        {children}
                    </h4>
                )
            case "h5":
                return (
                    <h5 style={{ color }} className={"h5"}>
                        {children}
                    </h5>
                )
            case "h6":
                return (
                    <h6 style={{ color }} className={"h6"}>
                        {children}
                    </h6>
                )
        }
    }

    return <Container>{children}</Container>
}

export default Title
