import { FunctionComponent, useState } from "react"
import { Title } from "atoms/Typography"
import { Button } from "atoms/Buttons"
import InputGroup, { AddonButton } from "molecules/InputGroup"
import EmailInput from "atoms/Input/Email"

const Newsletter: FunctionComponent = () => {
    const [value, setValue] = useState("")
    return (
        <div id="newsletter-subscriber">
            <div className="newsletter-subscriber--container">
                <div className="newsletter-subscriber--item">
                    <Title type={"h3"}>
                        SIGN UP FOR NEWSLETTER & GET ALL UPDATES
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor
                        incdidunt ut labore et.
                    </p>
                </div>
                <div className="newsletter-subscriber--item">
                    <InputGroup
                        addonPosition="right"
                        inputElement={
                            <EmailInput
                                onChange={({ target: { value } }) =>
                                    setValue(value)
                                }
                                value={value}
                                placeholder={"name@email.com"}
                            />
                        }
                    >
                        <AddonButton>
                            <Button style="primary">Subscribe</Button>
                        </AddonButton>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
