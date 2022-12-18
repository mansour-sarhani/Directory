import styles from './home.module.css'
import {Container} from "react-bootstrap";
import {TbChevronDown, TbClock, TbBuildingStore, TbCalendarEvent, TbLayoutGrid, TbMapPin, TbSettings, TbSpeakerphone} from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import PostsGrid from "../../common/PostsGrid";

function HomeLatest() {
    return (
        <div className={styles.homeLatest}>
            <span className={styles.homeLatestChevron}><TbChevronDown /></span>
            <Container>
                <div className={styles.homeLatestIntro}>
                    <h2>Check out our newest</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti dicta
                        doloremque expedita necessitatibus tempore temporibus vel. Assumenda blanditiis consectetur </p>
                </div>
                <div className={styles.homeLatestFilters}>
                    <div className={styles.homeLatestFilterCats}>
                        <button>
                            <TbLayoutGrid/>
                            All Posts
                        </button>
                        <button>
                            <TbCalendarEvent/>
                            Events
                        </button>
                        <button>
                            <TbCalendarEvent/>
                            Business & Job
                        </button>
                        <button>
                            <TbSettings/>
                            Services
                        </button>
                        <button>
                            <TbSpeakerphone/>
                            Advertising
                        </button>
                        <button>
                            <TbBuildingStore/>
                            For Sale
                        </button>
                    </div>
                    <div className={styles.homeLatestFilterLocation}>
                        <button>
                            <TbMapPin/>
                            City:
                            <span>London</span>
                        </button>
                    </div>
                </div>
                <PostsGrid />
                <div className={styles.homeLatestCta}>
                    <Link href={'/'}>
                        <button className="custom-btn">See More</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default HomeLatest;