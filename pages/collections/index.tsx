import { NextPage } from "next"
import { IProps } from "interfaces/pages/collections"

const Collections: NextPage<IProps> = ({ collection }) => {
    return (
        <>
            <h1>collection: {collection}</h1>
        </>
    )
}

Collections.getInitialProps = ({ query: { collection } }) => {
    return { collection }
    // if (!query) {
    // 	query = category
    // 	category = undefined
    // }

    // return {
    // 	query: typeof query == "string" ? query.replaceAll("+", " ") : query,
    // 	category:
    // 		typeof category == "string"
    // 			? category.replaceAll("+", " ")
    // 			: category,
    // }
}

export default Collections
