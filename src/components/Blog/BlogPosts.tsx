import React from "react";
import blogData from './blog.json'
import Image from '../Atoms/Image/Index';
import PrimeButtonIcon from "../Atoms/PrimeButton/ButtonIcon";

type BlogPostProps = {
 title?: string;
 infotext?: string;
 author?: string;
}

class BlogPosts extends React.Component<BlogPostProps> {
    render() {


        const listItems = blogData.map(({ title, infotext, author, image, button }, index) =>
            <li className="py-4 flex" key={index}>
                <div className="card flex flex-col bg-white border overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                    <Image 
                        {...image}
                    />
                    <div className="details flex flex-col gap-2 flex-grow p-5 lg:p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">{title}</h2>
                        <div className="text-base editor">
                            <p>{infotext}</p>
                            <p className="font-medium text-gray-900 dark:text-gray-300">{author}</p>
                        </div>
                        {button && (
                            <div className="btn-wrap mt-auto pt-2">
                                <PrimeButtonIcon 
                                    {...button}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </li>
        );
        
        return (
            <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {listItems}
            </ul>
        )
    }
}

export default BlogPosts;