import { FunctionComponent } from "react"

const Search = ({ query, category }) => {
    return (
        <>
            {category && <h1>category: {category}</h1>}
            <h1>query: {query}</h1>
        </>
    )
}

Search.getInitialProps = ({ query: { category, query } }) => {
    if (!query) {
        query = category
        category = undefined
    }

    return {
        query: typeof query === "string" ? query.replaceAll("+", " ") : query,
        category:
            typeof category === "string"
                ? category.replaceAll("+", " ")
                : category,
    }
}

export default Search
