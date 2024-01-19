import React from 'react';
import BlogItem from './BlogItem';

class BlogItems extends React.Component {
    render() {
        return (
                <>
                    <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                        <BlogItem />
                    </ul>
                </>
            )
    }
}

export default BlogItems;
