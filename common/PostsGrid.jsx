import styles from './Posts.module.css'
import {latestPosts} from '/data/postsData';
import PostItem from "./PostItem";

function PostsGrid({start, end}) {
    const posts = latestPosts.slice(start, end)

    return (
        <div className={styles.postsGrid}>
            {posts && posts.map(post => <PostItem post={post} key={post.id} />)}
        </div>
    );
}

export default PostsGrid;