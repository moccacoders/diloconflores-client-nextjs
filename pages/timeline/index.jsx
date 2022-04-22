import AppLayout from "components/globals/AppLayout"
import Button, { Link } from "atoms/Buttons"
import { Title } from "atoms/Typography"

export default function Timeline({ userName }) {
	const a = "hello"

	return (
		<AppLayout>
			<Title size="large">This is the Timeline of {userName}</Title>
			<Button style="primary" size="sm">
				Go Home
			</Button>
			<Button style="secondary">Go Home</Button>
			<Button style="success" size="lg" disabled>
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
				Go Google
			</Link>
		</AppLayout>
	)
}

Timeline.getInitialProps = () => {
	return fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "hello").then((res) =>
		res.json()
	)
}
