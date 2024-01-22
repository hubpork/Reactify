import React from "react";
import blogData from './blog.json'
import Image from '../Atoms/Image/Index';
import IconButton from '../Atoms/Button/IconButton';

type BlogItemProps = {
 title?: string;
 author?: string;
}

class BlogItem extends React.Component<BlogItemProps> {
    render() {
        
        return (
            <>
                {blogData.map(({ title, author, image, button }, index) =>
                    <li className="py-4" key={index}>
                        <div className="card flex flex-col gap-4" >
                            <Image 
                                image={image}
                            />
                            <div className="details flex flex-col gap-2">
                                <h2 className='text-xl font-semibold'>{title}</h2>
                                <p>{author}</p>
                                {button && (
                                    <div className="btn-wrap">
                                        <IconButton
                                            {...button}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                )}
            </>
        )
    }
}

export default BlogItem;