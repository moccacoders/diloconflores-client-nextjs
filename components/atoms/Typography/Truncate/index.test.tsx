import { render } from "@testing-library/react"
import Truncate from "."
import "@testing-library/jest-dom"

describe("Home", () => {
    it("renders a truncate medium size", () => {
        const component = render(
            <Truncate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis cursus placerat. Etiam a lectus lacinia,
                pulvinar tellus sit amet, volutpat neque. Donec lacinia lorem
                fermentum, tincidunt erat nec, rutrum felis. Praesent a
                convallis purus, nec pharetra mi. Vestibulum sit amet ultricies
                dolor. Aliquam lobortis leo condimentum sem laoreet, et
                facilisis nisi faucibus. Sed eget mi vitae arcu fringilla
                ultricies vulputate in lorem. Morbi sagittis, ex eu imperdiet
                eleifend, sapien ligula iaculis lectus, rutrum fermentum urna
                dui ut nunc. Cras at turpis rutrum, auctor nunc sit amet,
                pharetra tellus. Duis ut magna eget dolor efficitur egestas.
            </Truncate>
        )

        const truncate = component.container.querySelector(
            ".truncate-component"
        )

        expect(truncate).toBeInTheDocument()
        expect(
            truncate.className.split(" ").includes("truncate-component-md")
        ).toBeTruthy()
    })

    it("renders a truncate small size", () => {
        const component = render(
            <Truncate size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis cursus placerat. Etiam a lectus lacinia,
                pulvinar tellus sit amet, volutpat neque. Donec lacinia lorem
                fermentum, tincidunt erat nec, rutrum felis. Praesent a
                convallis purus, nec pharetra mi. Vestibulum sit amet ultricies
                dolor. Aliquam lobortis leo condimentum sem laoreet, et
                facilisis nisi faucibus. Sed eget mi vitae arcu fringilla
                ultricies vulputate in lorem. Morbi sagittis, ex eu imperdiet
                eleifend, sapien ligula iaculis lectus, rutrum fermentum urna
                dui ut nunc. Cras at turpis rutrum, auctor nunc sit amet,
                pharetra tellus. Duis ut magna eget dolor efficitur egestas.
            </Truncate>
        )

        const truncate = component.container.querySelector(
            ".truncate-component"
        )

        expect(truncate).toBeInTheDocument()
        expect(
            truncate.className.split(" ").includes("truncate-component-sm")
        ).toBeTruthy()
    })

    it("renders a truncate large size", () => {
        const component = render(
            <Truncate size="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis cursus placerat. Etiam a lectus lacinia,
                pulvinar tellus sit amet, volutpat neque. Donec lacinia lorem
                fermentum, tincidunt erat nec, rutrum felis. Praesent a
                convallis purus, nec pharetra mi. Vestibulum sit amet ultricies
                dolor. Aliquam lobortis leo condimentum sem laoreet, et
                facilisis nisi faucibus. Sed eget mi vitae arcu fringilla
                ultricies vulputate in lorem. Morbi sagittis, ex eu imperdiet
                eleifend, sapien ligula iaculis lectus, rutrum fermentum urna
                dui ut nunc. Cras at turpis rutrum, auctor nunc sit amet,
                pharetra tellus. Duis ut magna eget dolor efficitur egestas.
            </Truncate>
        )

        const truncate = component.container.querySelector(
            ".truncate-component"
        )

        expect(truncate).toBeInTheDocument()
        expect(
            truncate.className.split(" ").includes("truncate-component-lg")
        ).toBeTruthy()
    })

    it("renders a truncate x-large size", () => {
        const component = render(
            <Truncate size="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis cursus placerat. Etiam a lectus lacinia,
                pulvinar tellus sit amet, volutpat neque. Donec lacinia lorem
                fermentum, tincidunt erat nec, rutrum felis. Praesent a
                convallis purus, nec pharetra mi. Vestibulum sit amet ultricies
                dolor. Aliquam lobortis leo condimentum sem laoreet, et
                facilisis nisi faucibus. Sed eget mi vitae arcu fringilla
                ultricies vulputate in lorem. Morbi sagittis, ex eu imperdiet
                eleifend, sapien ligula iaculis lectus, rutrum fermentum urna
                dui ut nunc. Cras at turpis rutrum, auctor nunc sit amet,
                pharetra tellus. Duis ut magna eget dolor efficitur egestas.
            </Truncate>
        )

        const truncate = component.container.querySelector(
            ".truncate-component"
        )

        expect(truncate).toBeInTheDocument()
        expect(
            truncate.className.split(" ").includes("truncate-component-xl")
        ).toBeTruthy()
    })
})
