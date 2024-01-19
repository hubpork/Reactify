import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
    image: {
        src: string;
        alt?: string;
        height: number;
        width: number;
        caption?: string;
    }
}
 
class Image extends React.Component<ImageProps> {
    render() {
        const { image } = this.props;
        const { alt, height, src, width, caption } = image;
 
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