import styles from "./QuickAccess.module.css";
import Link from "next/link";
import {
    TbMusic,
    TbBallAmericanFootball,
    TbSpeakerphone,
    TbBriefcase,
    TbHome,
    TbDots
} from "react-icons/tb";

function QuickAccess() {
    return (
        <div className={styles.quickAccess}>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbMusic/>
                    Concerts
                </Link>
            </div>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbBallAmericanFootball/>
                    Match
                </Link>
            </div>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbSpeakerphone/>
                    Seminars
                </Link>
            </div>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbBriefcase/>
                    Jobs
                </Link>
            </div>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbHome/>
                    Property
                </Link>
            </div>
            <div className={styles.quickAccessItem}>
                <Link href={'/'}>
                    <TbDots/>
                    View All
                </Link>
            </div>
        </div>
    );
}

export default QuickAccess;