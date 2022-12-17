import styles from './categories.module.css'
import {Container} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function CategoriesGrid() {
    return (
        <div className={styles.categoriesWrapper}>
            <Container>
                <div className={styles.categoriesGrid}>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-1.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-2.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-3.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-4.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-1.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-2.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                    <div className={styles.categoryGridItem}>
                        <Image
                            src="/images/image-3.jpg"
                            alt="category"
                            fill
                        />
                        <div className={styles.categoryGridItemOverlay}>
                            <Link href='/'>
                                Category 1
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoriesGrid;