import styles from "./categories.module.css";
import Image from "next/image";
import Link from "next/link";

function CategoryItem({category}) {
    return (
        <div className={styles.categoryGridItem}>
            <Image
                src={category.image}
                alt={category.name}
                fill
            />
            <div className={styles.categoryGridItemOverlay}>
                <Link href='/'>
                    {category.name}
                </Link>
            </div>
        </div>
    );
}

export default CategoryItem;