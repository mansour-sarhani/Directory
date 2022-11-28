import styles from './home.module.css'
import {Container} from "react-bootstrap";
import {TbChevronDown, TbClock, TbBuildingStore, TbCalendarEvent, TbLayoutGrid, TbMapPin, TbSettings, TbSpeakerphone} from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

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
                <div className={styles.homeLatestGrid}>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-1.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-2.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-3.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-5.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-2.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-1.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-3.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-4.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-1.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-5.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-2.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeLatestItem}>
                        <div className={styles.homeLatestItemImage}>
                            <Link href={'/'}>
                                <Image
                                    src="/images/image-3.jpg"
                                    alt="market"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className={styles.homeLatestItemContent}>
                            <Link href={'/'} className={styles.homeLatestItemTitle}>
                                Lorem ipsum dolor sit amet consectetur dolor sit Lorem ipsum
                            </Link>
                            <div className={styles.homeLatestItemAuthor}>
                                by <span>Ebrahim Khaledi</span> in <span>Turkey</span>
                            </div>
                            <div className={styles.homeLatestItemMeta}>
                                <span className={styles.homeLatestItemVariable}>388,000 $</span>
                                <span className={styles.homeLatestItemDate}><TbClock /> 6 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
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