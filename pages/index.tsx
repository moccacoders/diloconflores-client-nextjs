import { FunctionComponent } from "react"
import Header from "organisms/Header"

const Timeline: FunctionComponent = () => {
    return (
        <>
            <Header />
        </>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "hello")
//     const data = await res.json()
//     return {
//         props: {
//             ...data,
//         },
//     }
// }

export default Timeline
