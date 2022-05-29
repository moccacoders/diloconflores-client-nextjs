const Section = ({ number }) => {
    return (
        <>
            <h1>Seccion: {number}</h1>
        </>
    )
}

Section.getInitialProps = ({ query: { seccion } }) => {
    return { seccion }
}

export default Section
