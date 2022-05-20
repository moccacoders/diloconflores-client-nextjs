import { FunctionComponent } from "react"

const Search = ({ query }) => {
    return (
        <>
            <h1>{query}</h1>
        </>
    )
}

Search.getInitialProps = (ctx) => {
    const {
        query: { query },
    } = ctx
    return { query }
}

export default Search
