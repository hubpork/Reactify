import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
    src: string;
    alt?: string;
    height: number;
    width: number;
    caption?: string;
}
 
class Image extends React.Component<ImageProps> {
    render() {
        const { alt, height, src, width, caption } = this.props;

        return (
            <figure>
                <LazyLoadImage
                   alt={alt}
                   height={height}
                   src={src}
                   width={width}
                />
                {caption && <figcaption className="mt-3 text-sm text-gray-400">{caption}</figcaption>}
            </figure>
        );
    }
}
 
export default Image; 