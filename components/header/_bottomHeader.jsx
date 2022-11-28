import styles from "./header.module.css";
import Link from "next/link";

function BottomHeader() {
    return (
        <div className={styles.bottomHeader}>
            <div className={styles.mainMenu}>
                <ul>
                    <li>
                        <Link href={'/'}>
                            Event Announcement
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Directory & Listing
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Property
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Pets
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Social Event
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            For Sale
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.altMenu}>
                <ul>
                    <li>
                        <Link href={'/'}>
                            Special Posts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BottomHeader;