import classnames from "classnames"
import { useRouter } from "next/router"
import { FunctionComponent, useState } from "react"
import Dropdown from "molecules/Dropdown"
import InputGroup, { AddonButton } from "molecules/InputGroup"
import { ButtonIcon } from "atoms/Buttons"

const SearchBox: FunctionComponent = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

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
            target: { name, value },
        } = evt

        setSearch(value)
    }

    const onSearch = () => {
        if (!search.length) {
            setError(true)
            return false
        } else {
            if (error) setError(false)
        }
        router.push("search/[query]", `search/${search.replace(" ", "+")}`)
    }

    return (
        <>
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
                    />
                </AddonButton>
                <AddonButton>
                    <ButtonIcon onClick={onSearch} icon={"search"} />
                </AddonButton>
            </InputGroup>
        </>
    )
}

export default SearchBox
