import styles from "./events.module.css"
import {eventData} from '/data/eventData'
import EventItem from "./EventItem";

function EventsGrid({start, end}) {
    return (
        <div className={styles.eventsGrid}>
            {eventData && eventData.slice(start, end).map(event => <EventItem event={event} key={event.id} />)}
        </div>
    );
}

export default EventsGrid;