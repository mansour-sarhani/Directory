import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { TbClock } from "react-icons/tb";
import PostsPagination from "../../common/PostsPagination";

function BlogGrid() {
    return (
        <>
            <div className={styles.blogGrid}>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
                <div className={styles.blogGridItem}>
                    <div className={styles.blogGridItemImg}>
                        <Image
                            src='/images/image-1.jpg'
                            alt='blog-item'
                            fill
                        />
                    </div>
                    <div className={styles.blogGridItemTitle}>
                        <Link href='/'>
                            Some title for some sample post for some blog
                        </Link>
                    </div>
                    <div className={styles.blogGridItemDate}>
                        <TbClock className="me-1" />
                        3 Days ago
                    </div>
                </div>
            </div>
            <PostsPagination />
        </>
    );
}

export default BlogGrid;