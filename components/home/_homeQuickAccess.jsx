import styles from "./home.module.css";
import Link from "next/link";
import {MdOutlineCases, MdOutlineOtherHouses, MdOutlineQueueMusic, MdSportsSoccer} from "react-icons/md";
import {BsPeopleFill, BsThreeDots} from "react-icons/bs";

function HomeQuickAccess() {
    return (
        <div className={styles.homeQuickAccess}>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <MdOutlineQueueMusic/>
                    Concerts
                </Link>
            </div>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <MdSportsSoccer/>
                    Match
                </Link>
            </div>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <BsPeopleFill/>
                    Seminars
                </Link>
            </div>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <MdOutlineCases/>
                    Jobs
                </Link>
            </div>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <MdOutlineOtherHouses/>
                    Property
                </Link>
            </div>
            <div className={styles.homeQuickAccessItem}>
                <Link href={'/'}>
                    <BsThreeDots/>
                    View All
                </Link>
            </div>
        </div>
    );
}

export default HomeQuickAccess;