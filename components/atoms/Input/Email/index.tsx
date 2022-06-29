import classnames from "classnames"
import { FunctionComponent, useState } from "react"
import Input from "atoms/Input"
import { IInputEmailProps } from "interfaces/atoms/input"
import { email } from "catalogs/regex"

const EmailInput: FunctionComponent<IInputEmailProps> = ({
    onChange,
    onSuccess,
    onError,
    showSuccess = false,
    ...input
}) => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const validate = (evt) => {
        const {
            target: { value },
        } = evt
        onChange(evt)

        if (email.test(value)) {
            setError(false)
            onSuccess && onSuccess(evt)
            showSuccess && setSuccess(true)
        } else {
            setError(true)
            onError &&
                onError({ error: 1001, message: "Email format invalid." })
            showSuccess && setSuccess(false)
        }
    }

    return (
        <>
            <Input
                {...input}
                type={"email"}
                className={classnames({
                    "is-invalid": error,
                    "is-valid": success,
                })}
                onChange={validate}
            />
        </>
    )
}

export default EmailInput
