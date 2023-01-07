import styles from "./events.module.css";
import Link from "next/link";
import Image from "next/image";

function EventItem({event}) {
    return (
        <div className={styles.eventRelatedPostItem}>
            <div className={styles.eventRelatedPostItemImage}>
                <Link href={'/'}>
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                    />
                </Link>
            </div>
            <div className={styles.eventRelatedPostItemContent}>
                <div className={styles.eventDetailCalendarDate}>
                    <span className={styles.eventDetailCalendarDay}>{event.dateDay}</span>
                    <span className={styles.eventDetailCalendarMonth}>{event.dateMonth}</span>
                </div>
                <div className={styles.eventRelatedPostText}>
                    <Link href={'/'}>
                        <h5>{event.title}</h5>
                    </Link>
                    <span>{event.venue}, {event.city}</span>
                </div>
            </div>
        </div>
    );
}

export default EventItem;