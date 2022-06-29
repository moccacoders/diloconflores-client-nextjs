import classnames from "classnames"
import { useRouter } from "next/router"
import { FunctionComponent, useState, useEffect } from "react"
import Dropdown from "molecules/Dropdown"
import InputGroup, { AddonButton } from "molecules/InputGroup"
import { ButtonIcon } from "atoms/Buttons"

const SearchBox: FunctionComponent = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let category = `${router.query.category ?? ""}`
        let query = `${router.query.query ?? ""}`

        if (!query) {
            query = category
            category = ""
        }

        setSearch(query.replaceAll("+", " "))
        setCategory(category.replaceAll("+", " "))
    }, [router.query])

    const categories = [
        {
            value: "",
            text: "Selecciona una categoria",
        },
        {
            value: "rosas",
            text: "Rosas",
        },
        {
            value: "gerberas",
            text: "Gerberas",
        },
        {
            value: "tulipanes",
            text: "Tulipanes",
        },
    ]

    const handleDropdown = (value) => {
        setCategory(value)
    }

    const handleInput = (evt) => {
        const {
            target: { value },
        } = evt

        setSearch(value)
    }

    const onSearch = (evt) => {
        evt.preventDefault()
        if (!search.length) {
            setError(true)
            return false
        } else {
            if (error) setError(false)
        }

        if (category)
            return router.push(
                "/search/[category]/[query]",
                `/search/${category.replaceAll(" ", "+")}/${search.replaceAll(
                    " ",
                    "+"
                )}`
            )
        else
            return router.push(
                "/search/[category]",
                `/search/${search.replaceAll(" ", "+")}`
            )
    }

    return (
        <form onSubmit={onSearch}>
            <InputGroup
                placeholder={"Hello World"}
                addonPosition={"right"}
                onChange={handleInput}
                value={search}
                className={classnames({
                    "is-invalid": error,
                })}
            >
                <AddonButton>
                    <Dropdown
                        items={categories}
                        style="light"
                        onChange={handleDropdown}
                        value={category}
                    />
                </AddonButton>
                <AddonButton>
                    <ButtonIcon type={"submit"} icon={"search"} />
                </AddonButton>
            </InputGroup>
        </form>
    )
}

export default SearchBox
