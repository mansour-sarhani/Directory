import styles from './PostsPagination.module.css'
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import Link from "next/link";

function PostsPagination() {
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationWrapper}>
                <ul>
                    <li><Link href={'/'} className={styles.activePage}>1</Link></li>
                    <li><Link href={'/'}>2</Link></li>
                    <li><Link href={'/'}>3</Link></li>
                    <li><Link href={'/'}>4</Link></li>
                    <li><Link href={'/'}>5</Link></li>
                </ul>
            </div>
            <div className={styles.paginationButtons}>
                <button>
                    <TbChevronLeft />
                    Previous Page
                </button>
                <button>
                    Next Page
                    <TbChevronRight />
                </button>
            </div>
        </div>
    );
}

export default PostsPagination;