import { FunctionComponent } from "react"
import { IInputProps } from "interfaces/atoms/input"

const Input: FunctionComponent<IInputProps> = ({
    accept,
    alt,
    autoComplete,
    autoFocus,
    checked,
    className,
    disabled,
    max,
    maxLength,
    min,
    minLength,
    multiple,
    name,
    pattern,
    placeholder,
    readOnly,
    required,
    size,
    src,
    step,
    type,
    value = "",
    onChange = (evt) => {
        console.log(evt)
    },
    onSelect,
    onBlur,
    onClick,
    onKeyUp,
    onKeyDown,
    title = "",
}) => {
    return (
        <input
            accept={accept}
            alt={alt}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            checked={checked}
            disabled={disabled}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            multiple={multiple}
            name={name}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            size={size}
            src={src}
            step={step}
            type={type}
            value={value}
            onChange={onChange}
            onSelect={onSelect}
            onBlur={onBlur}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            aria-label={title}
            className={["form-control", className].join(" ")}
        />
    )
}

export default Input
