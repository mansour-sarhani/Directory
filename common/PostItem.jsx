import styles from './Posts.module.css'
import Link from "next/link";
import Image from "next/image";
import {TbClock} from "react-icons/tb";

function PostItem({post}) {
    return (
        <div className={styles.postsGridItem}>
            <div className={styles.postsGridItemImage}>
                <Link href={'/'}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                    />
                </Link>
            </div>
            <div className={styles.postsGridItemContent}>
                <Link href={'/'} className={styles.postsGridItemTitle}>
                    {post.title}
                </Link>
                <div className={styles.postsGridItemAuthor}>
                    by <span>{post.author}</span> in <span>{post.country}</span>
                </div>
                <div className={styles.postsGridItemMeta}>
                    <span className={styles.postsGridItemVariable}>${post.price}</span>
                    <span className={styles.postsGridItemDate}><TbClock /> {post.publishDate}</span>
                </div>
            </div>
        </div>
    );
}

export default PostItem;