import React from "react";
import blogData from './blog.json'
import Image from '../Atoms/Image/Index';
import PrimeButtonIcon from "../Atoms/PrimeButton/ButtonIcon";

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
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">{title}</h2>
                                <div className="text-base editor">
                                    <p>{author}</p>
                                </div>
                                {button && (
                                    <div className="btn-wrap my-5">
                                        <PrimeButtonIcon 
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