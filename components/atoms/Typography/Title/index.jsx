import React, { Fragment } from "react"
import styles from "styles/atoms/typography/default.module.scss"

const Title = ({ size = "large", color, style, weight, children }) => {
    const Container = ({ children }) => {
        switch (size) {
            case "large":
                return <h4 style={styles.h4}>{children}</h4>
            case "medium":
                return <h5 style={styles.h5}>{children}</h5>
            case "small":
                return <h6 style={styles.h6}>{children}</h6>
        }
    }

    return <Container>{children}</Container>
}

export default Title
