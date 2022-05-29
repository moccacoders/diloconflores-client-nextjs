import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Section = ({ number }) => {
    const router = useRouter()
    const [section, setSection] = useState(number)

    useEffect(() => {
        setSection(router.query.number)
    }, [router.query])

    return (
        <>
            <h1>THIS IS SECTION NUMBER {section}</h1>
        </>
    )
}

Section.getInitialProps = (ctx) => {
    const { number } = ctx.query
    return { number }
}

export default Section
