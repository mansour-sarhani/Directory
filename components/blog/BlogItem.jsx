import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import {TbClock} from "react-icons/tb";

function BlogItem({post}) {
    return (
        <div className={styles.blogGridItem}>
            <div className={styles.blogGridItemImg}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                />
            </div>
            <div className={styles.blogGridItemTitle}>
                <Link href='/'>
                    {post.title}
                </Link>
            </div>
            <div className={styles.blogGridItemDate}>
                <TbClock className="me-1" />
                {post.publishDate}
            </div>
        </div>
    );
}

export default BlogItem;