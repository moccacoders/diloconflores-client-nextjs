import React, { FunctionComponent } from "react"
import ImageNext from "next/image"
import { IImageProps } from "interfaces/atoms/image"

const ImageAtom: FunctionComponent<IImageProps> = ({
    src,
    alt,
    width,
    height,
    layout = "fill",
}) => {
    return (
        <span className="image-container">
            <ImageNext
                width={width}
                height={height}
                src={src}
                alt={alt}
                layout={layout}
            />
        </span>
    )
}

export default ImageAtom
