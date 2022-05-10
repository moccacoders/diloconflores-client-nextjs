import { FunctionComponent } from "react"
import AppLayout from "components/globals/AppLayout"
import Button, { Link, ButtonIcon } from "atoms/Buttons"
import Body, { Title, Label, Truncate } from "atoms/Typography"
import { ITimelineProps } from "interfaces/general"

const Timeline: FunctionComponent<ITimelineProps> = ({ userName }) => {
    const HTML = `<p>This is a body <strong>content</strong> element</p>`
    return (
        <AppLayout>
            <Title type="h1">This is the Timeline of {userName} (h1)</Title>
            <Title type="h2">This is the Timeline of {userName} (h2)</Title>
            <Title type="h3">This is the Timeline of {userName} (h3)</Title>
            <Title type="h4">This is the Timeline of {userName} (h4)</Title>
            <Title type="h5">This is the Timeline of {userName} (h5)</Title>
            <Title type="h6">This is the Timeline of {userName} (h6)</Title>
            <Body size={"sm"} width={"20%"}>
                <Truncate lines={1} width={"50%"} size={"sm"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis cursus placerat. Etiam a lectus
                    lacinia, pulvinar tellus sit amet, volutpat neque. Donec
                    lacinia lorem fermentum, tincidunt erat nec, rutrum felis.
                    Praesent a convallis purus, nec pharetra mi. Vestibulum sit
                    amet ultricies dolor. Aliquam lobortis leo condimentum sem
                    laoreet, et facilisis nisi faucibus. Sed eget mi vitae arcu
                    fringilla ultricies vulputate in lorem. Morbi sagittis, ex
                    eu imperdiet eleifend, sapien ligula iaculis lectus, rutrum
                    fermentum urna dui ut nunc. Cras at turpis rutrum, auctor
                    nunc sit amet, pharetra tellus. Duis ut magna eget dolor
                    efficitur egestas.
                </Truncate>
            </Body>
            <Body size={"sm"} width={"20%"}>
                <Truncate lines={2} size={"sm"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis cursus placerat. Etiam a lectus
                    lacinia, pulvinar tellus sit amet, volutpat neque. Donec
                    lacinia lorem fermentum, tincidunt erat nec, rutrum felis.
                    Praesent a convallis purus, nec pharetra mi. Vestibulum sit
                    amet ultricies dolor. Aliquam lobortis leo condimentum sem
                    laoreet, et facilisis nisi faucibus. Sed eget mi vitae arcu
                    fringilla ultricies vulputate in lorem. Morbi sagittis, ex
                    eu imperdiet eleifend, sapien ligula iaculis lectus, rutrum
                    fermentum urna dui ut nunc. Cras at turpis rutrum, auctor
                    nunc sit amet, pharetra tellus. Duis ut magna eget dolor
                    efficitur egestas.
                </Truncate>
            </Body>
            <Body color={"red"} width={"20%"}>
                <Truncate lines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis cursus placerat. Etiam a lectus
                    lacinia, pulvinar tellus sit amet, volutpat neque. Donec
                    lacinia lorem fermentum, tincidunt erat nec, rutrum felis.
                    Praesent a convallis purus, nec pharetra mi. Vestibulum sit
                    amet ultricies dolor. Aliquam lobortis leo condimentum sem
                    laoreet, et facilisis nisi faucibus. Sed eget mi vitae arcu
                    fringilla ultricies vulputate in lorem. Morbi sagittis, ex
                    eu imperdiet eleifend, sapien ligula iaculis lectus, rutrum
                    fermentum urna dui ut nunc. Cras at turpis rutrum, auctor
                    nunc sit amet, pharetra tellus. Duis ut magna eget dolor
                    efficitur egestas.
                </Truncate>
            </Body>
            <Body fontWeight={800} size={"lg"} width={"20%"}>
                <Truncate size={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis cursus placerat. Etiam a lectus
                    lacinia, pulvinar tellus sit amet, volutpat neque. Donec
                    lacinia lorem fermentum, tincidunt erat nec, rutrum felis.
                    Praesent a convallis purus, nec pharetra mi. Vestibulum sit
                    amet ultricies dolor. Aliquam lobortis leo condimentum sem
                    laoreet, et facilisis nisi faucibus. Sed eget mi vitae arcu
                    fringilla ultricies vulputate in lorem. Morbi sagittis, ex
                    eu imperdiet eleifend, sapien ligula iaculis lectus, rutrum
                    fermentum urna dui ut nunc. Cras at turpis rutrum, auctor
                    nunc sit amet, pharetra tellus. Duis ut magna eget dolor
                    efficitur egestas.
                </Truncate>
            </Body>
            <Body textAlign={"right"} size={"xl"} width={"20%"}>
                <Truncate lines={5} size={"xl"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis cursus placerat. Etiam a lectus
                    lacinia, pulvinar tellus sit amet, volutpat neque. Donec
                    lacinia lorem fermentum, tincidunt erat nec, rutrum felis.
                    Praesent a convallis purus, nec pharetra mi. Vestibulum sit
                    amet ultricies dolor. Aliquam lobortis leo condimentum sem
                    laoreet, et facilisis nisi faucibus. Sed eget mi vitae arcu
                    fringilla ultricies vulputate in lorem. Morbi sagittis, ex
                    eu imperdiet eleifend, sapien ligula iaculis lectus, rutrum
                    fermentum urna dui ut nunc. Cras at turpis rutrum, auctor
                    nunc sit amet, pharetra tellus. Duis ut magna eget dolor
                    efficitur egestas.
                </Truncate>
            </Body>
            <Label size="sm">Hello World</Label>
            <Label>Hello World</Label>
            <Label size="lg">Hello World</Label>
            <Label size="xl">Hello World</Label>
            <ButtonIcon style="primary" size="sm" icon="home" />
            <ButtonIcon style="secondary" icon="home" badge={"2"} />
            <ButtonIcon style="success" disabled size="lg" icon="home" />
            <ButtonIcon
                transparent
                style="success"
                title="hello world"
                size="lg"
                icon="home"
                badge="1"
            />
            <Button style="primary" size="sm" badge="2">
                Go Home
            </Button>
            <Button
                style="secondary"
                icon="nintendoswitch"
                iconPosition="right"
                swipeToTop={false}
            >
                Go Home
            </Button>
            <Button
                style="success"
                size="lg"
                disabled
                icon="pencil"
                badge={"hello world"}
            >
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
