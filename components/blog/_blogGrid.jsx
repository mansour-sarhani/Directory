import styles from "./blog.module.css";
import PostsPagination from "../../common/PostsPagination";
import {blogData} from '/data/blogData'
import BlogItem from "./BlogItem";

function BlogGrid({start, end}) {
    const blog = blogData.slice(start, end)

    return (
        <>
            <div className={styles.blogGrid}>
                {blog && blog.map(item => <BlogItem key={item.id} post={item} />)}
            </div>
            <PostsPagination />
        </>
    );
}

export default BlogGrid;