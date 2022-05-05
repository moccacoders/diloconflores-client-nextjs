import { FunctionComponent } from "react"
import AppLayout from "components/globals/AppLayout"
import Button, { Link } from "atoms/Buttons"
import { Title } from "atoms/Typography"
import { ITimelineProps } from "interfaces/general"

const Timeline: FunctionComponent<ITimelineProps> = ({ userName }) => {
    return (
        <AppLayout>
            <Title>This is the Timeline of {userName}</Title>
            <Button style="primary" size="sm">
                Go Home
            </Button>
            <Button style="secondary" icon="home" iconPosition="right">
                Go Home
            </Button>
            <Button style="success" size="lg" disabled icon="pencil">
                Go Home
            </Button>
            <Link href="/">Go Home</Link>
            <Link href="https://google.com" target="_blank">
                Go Google
            </Link>
            <Link
                style="light"
                button
                href="https://google.com"
                disabled
                target="_blank"
            >
                Go Google Disabled
            </Link>
        </AppLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "hello")
    const data = await res.json()
    return {
        props: {
            ...data,
        },
    }
}

export default Timeline
