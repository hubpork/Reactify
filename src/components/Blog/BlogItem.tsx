import React from "react";
import blogData from './blog.json'
import Image from '../Atoms/Image/Index';
import IconButton from '../Atoms/Button/IconButton';
import { FaBeer } from 'react-icons/fa';

type BlogItemProps = {
 title?: string;
 author?: string;
}

class BlogItem extends React.Component<BlogItemProps> {
    render() {
        return (
            <>
                {blogData.map(({ title, src, width, height, caption, author }, index) =>
                    <li className="py-4" key={index}>
                        <div className="card flex flex-col gap-4" >
                            <Image 
                                image={{
                                    src: src,
                                    alt: title,
                                    height: height, // replace with desired height
                                    width: width, // replace with desired width
                                    caption: caption, // using title as caption
                                }}
                            />
                            <div className="details flex flex-col gap-2">
                                <h2 className='text-xl font-semibold'>{title}</h2>
                                <p>{author}</p>
                                <IconButton buttonBgColor="bg-gray-700" buttonColor="text-white" children="Hallo" iconColor="red" iconName={FaBeer} iconSize={20}/>
                            </div>
                        </div>
                    </li>
                )}
            </>
        )
    }
}

export default BlogItem;
