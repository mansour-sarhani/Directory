import styles from "./events.module.css"
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import {
    TbMicrophone2,
    TbCalendarTime,
    TbMapPin,
    TbCash,
    TbChevronRight,
    TbBrandFacebook,
    TbBrandTwitter,
    TbPlayerPlay,
    TbBrandWhatsapp
} from "react-icons/tb";
import Link from "next/link";

const activeCalendarItemClass = [styles.eventDetailCalendarItem, styles.activeItem].join(" ")
const CalendarItemClass = [styles.eventDetailCalendarItem].join(" ")

function EventDetail() {
    return (
        <div className={styles.eventDetail}>
            <div className={styles.eventDetailIntro}>
                <div className={styles.eventDetailMeta}>
                    <Container>
                        <div className={styles.eventDetailMetaWrapper}>
                            <div className={styles.eventDetailArtistImg}>
                                <Image
                                    src="/images/image-1.jpg"
                                    alt="artist"
                                    width={250}
                                    height={150}
                                />
                            </div>
                            <div className={styles.eventDetailInfo}>
                                <div className={styles.eventDetailInfoItem}>
                                    <div className={styles.eventDetailInfoLabel}>
                                        <TbMicrophone2 />
                                        Artist
                                    </div>
                                    <div className={styles.eventDetailInfoValue}>
                                        John Doe
                                    </div>
                                </div>
                                <div className={styles.eventDetailInfoItem}>
                                    <div className={styles.eventDetailInfoLabel}>
                                        <TbCalendarTime />
                                        Date & Time
                                    </div>
                                    <div className={styles.eventDetailInfoValue}>
                                        Nov 11 | 20:30
                                    </div>
                                </div>
                                <div className={styles.eventDetailInfoItem}>
                                    <div className={styles.eventDetailInfoLabel}>
                                        <TbMapPin />
                                        Location
                                    </div>
                                    <div className={styles.eventDetailInfoValue}>
                                        London
                                    </div>
                                </div>
                                <div className={styles.eventDetailInfoItem}>
                                    <div className={styles.eventDetailInfoLabel}>
                                        <TbCash />
                                        Cost
                                    </div>
                                    <div className={styles.eventDetailInfoValue}>
                                        $100
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Image
                    className="eventDetailBg"
                    src="/images/event-bg.jpg"
                    alt="event"
                    fill
                />
            </div>
            <div className={styles.eventDetailContent}>
                <Container>
                    <div className={styles.evenDetailContentWrapper}>
                        <div className={styles.eventDetailContentMain}>
                            <div className={styles.eventDetailCalendar}>
                                <div className={styles.eventDetailHeading}>
                                    <div className={styles.eventDetailCalendarTitle}>
                                        <h5>Upcoming Concerts</h5>
                                        <span>30</span>
                                    </div>
                                    <div className={styles.eventDetailCalendarLink}>
                                        <Link href={'/'}>
                                            View All
                                            <TbChevronRight />
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.eventDetailCalendarWrapper}>
                                    <div className={activeCalendarItemClass}>
                                        <div className={styles.eventDetailCalendarDate}>
                                            <span className={styles.eventDetailCalendarDay}>11</span>
                                            <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                        </div>
                                        <div className={styles.eventDetailCalendarName}>
                                            <TbMapPin />
                                            National Stadium, London
                                        </div>
                                        <div className={styles.eventDetailCalendarPrice}>
                                            <TbCash />
                                            $100
                                        </div>
                                        <div className={styles.eventDetailCalendarCta}>
                                            <Link href={'/'}>
                                                <TbChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={CalendarItemClass}>
                                        <div className={styles.eventDetailCalendarDate}>
                                            <span className={styles.eventDetailCalendarDay}>11</span>
                                            <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                        </div>
                                        <div className={styles.eventDetailCalendarName}>
                                            <TbMapPin />
                                            National Stadium, London
                                        </div>
                                        <div className={styles.eventDetailCalendarPrice}>
                                            <TbCash />
                                            $100
                                        </div>
                                        <div className={styles.eventDetailCalendarCta}>
                                            <Link href={'/'}>
                                                <TbChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={CalendarItemClass}>
                                        <div className={styles.eventDetailCalendarDate}>
                                            <span className={styles.eventDetailCalendarDay}>11</span>
                                            <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                        </div>
                                        <div className={styles.eventDetailCalendarName}>
                                            <TbMapPin />
                                            National Stadium, London
                                        </div>
                                        <div className={styles.eventDetailCalendarPrice}>
                                            <TbCash />
                                            $100
                                        </div>
                                        <div className={styles.eventDetailCalendarCta}>
                                            <Link href={'/'}>
                                                <TbChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={CalendarItemClass}>
                                        <div className={styles.eventDetailCalendarDate}>
                                            <span className={styles.eventDetailCalendarDay}>11</span>
                                            <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                        </div>
                                        <div className={styles.eventDetailCalendarName}>
                                            <TbMapPin />
                                            National Stadium, London
                                        </div>
                                        <div className={styles.eventDetailCalendarPrice}>
                                            <TbCash />
                                            $100
                                        </div>
                                        <div className={styles.eventDetailCalendarCta}>
                                            <Link href={'/'}>
                                                <TbChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.eventDetailReview}>
                                <div className={styles.eventDetailHeading}>
                                    <h5>Live Reviews</h5>
                                </div>
                                <div className={styles.eventDetailReviewContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur dolorem enim exercitationem harum hic incidunt laudantium magnam maiores maxime minima non placeat, possimus quam quis recusandae tempora voluptate voluptatibus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur dolorem enim exercitationem harum hic incidunt laudantium magnam maiores maxime minima non placeat, possimus quam quis recusandae tempora voluptate voluptatibus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur dolorem enim exercitationem harum hic incidunt laudantium magnam maiores maxime minima non placeat, possimus quam quis recusandae tempora voluptate voluptatibus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur dolorem enim exercitationem harum hic incidunt laudantium magnam maiores maxime minima non placeat, possimus quam quis recusandae tempora voluptate voluptatibus.</p>
                                </div>
                            </div>
                            <Row>
                                <Col>
                                    <div className={styles.eventDetailAdditional}>
                                        <div className={styles.eventDetailHeading}>
                                            <h5>Additional Details</h5>
                                        </div>
                                        <div className={styles.eventDetailAddiItemWrapper}>
                                            <div className={styles.eventDetailAddiItem}>
                                                <span>Doors Open:</span>
                                                <span>20:30</span>
                                            </div>
                                            <div className={styles.eventDetailAddiItem}>
                                                <span>For Fans of:</span>
                                                <span>Pop</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles.eventDetailSocialShare}>
                                        <div className={styles.eventDetailHeading}>
                                            <h5>Share this Event</h5>
                                        </div>
                                        <div className={styles.eventSocialWrapper}>
                                            <div className={styles.eventSocialItem}>
                                                <span className={styles.eventSocialFacebook}>
                                                    <TbBrandFacebook />
                                                </span>
                                            </div>
                                            <div className={styles.eventSocialItem}>
                                                <span className={styles.eventSocialTwitter}>
                                                    <TbBrandTwitter />
                                                </span>
                                            </div>
                                            <div className={styles.eventSocialItem}>
                                                <span className={styles.eventSocialYoutube}>
                                                    <TbPlayerPlay />
                                                </span>
                                            </div>
                                            <div className={styles.eventSocialItem}>
                                                <span className={styles.eventSocialWhatsapp}>
                                                    <TbBrandWhatsapp />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.eventDetailContentSide}>
                            <div className={styles.eventDetailBio}>
                                <div className={styles.eventDetailHeading}>
                                    <h5>Biography</h5>
                                </div>
                                <div className={styles.eventDetailBioContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam, amet aperiam, assumenda consectetur debitis est exercitationem fugit harum illum iste nesciunt porro quam quis reprehenderit sint temporibus? Et, obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aspernatur corporis ea eaque, harum laborum modi nobis non quasi rem voluptas. Animi eius harum inventore maxime nam natus voluptatibus!</p>
                                    <Image
                                        src="/images/image-1.jpg"
                                        alt="event"
                                        width={200}
                                        height={200}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam, amet aperiam, assumenda consectetur debitis est exercitationem fugit harum illum iste nesciunt porro quam quis reprehenderit sint temporibus? Et, obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aspernatur corporis ea eaque, harum laborum modi nobis non quasi rem voluptas. Animi eius harum inventore maxime nam natus voluptatibus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventRelatedPosts}>
                        <div className={styles.eventDetailHeading}>
                            <div className={styles.eventDetailCalendarTitle}>
                                <h5>Similar Events</h5>
                            </div>
                            <div className={styles.eventDetailCalendarLink}>
                                <Link href={'/'}>
                                    View All
                                    <TbChevronRight />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.eventRelatedPostsWrapper}>
                            <div className={styles.eventRelatedPostItem}>
                                <div className={styles.eventRelatedPostItemImage}>
                                    <Link href={'/'}>
                                        <Image
                                            src="/images/image-2.jpg"
                                            alt="event"
                                            fill
                                        />
                                    </Link>
                                </div>
                                <div className={styles.eventRelatedPostItemContent}>
                                    <div className={styles.eventDetailCalendarDate}>
                                        <span className={styles.eventDetailCalendarDay}>11</span>
                                        <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                    </div>
                                    <div className={styles.eventRelatedPostText}>
                                        <Link href={'/'}>
                                            <h5>John Doe</h5>
                                        </Link>
                                        <span>National Stadium, London</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.eventRelatedPostItem}>
                                <div className={styles.eventRelatedPostItemImage}>
                                    <Link href={'/'}>
                                        <Image
                                            src="/images/image-2.jpg"
                                            alt="event"
                                            fill
                                        />
                                    </Link>
                                </div>
                                <div className={styles.eventRelatedPostItemContent}>
                                    <div className={styles.eventDetailCalendarDate}>
                                        <span className={styles.eventDetailCalendarDay}>11</span>
                                        <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                    </div>
                                    <div className={styles.eventRelatedPostText}>
                                        <Link href={'/'}>
                                            <h5>John Doe</h5>
                                        </Link>
                                        <span>National Stadium, London</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.eventRelatedPostItem}>
                                <div className={styles.eventRelatedPostItemImage}>
                                    <Link href={'/'}>
                                        <Image
                                            src="/images/image-2.jpg"
                                            alt="event"
                                            fill
                                        />
                                    </Link>
                                </div>
                                <div className={styles.eventRelatedPostItemContent}>
                                    <div className={styles.eventDetailCalendarDate}>
                                        <span className={styles.eventDetailCalendarDay}>11</span>
                                        <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                    </div>
                                    <div className={styles.eventRelatedPostText}>
                                        <Link href={'/'}>
                                            <h5>John Doe</h5>
                                        </Link>
                                        <span>National Stadium, London</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.eventRelatedPostItem}>
                                <div className={styles.eventRelatedPostItemImage}>
                                    <Link href={'/'}>
                                        <Image
                                            src="/images/image-2.jpg"
                                            alt="event"
                                            fill
                                        />
                                    </Link>
                                </div>
                                <div className={styles.eventRelatedPostItemContent}>
                                    <div className={styles.eventDetailCalendarDate}>
                                        <span className={styles.eventDetailCalendarDay}>11</span>
                                        <span className={styles.eventDetailCalendarMonth}>Nov</span>
                                    </div>
                                    <div className={styles.eventRelatedPostText}>
                                        <Link href={'/'}>
                                            <h5>John Doe</h5>
                                        </Link>
                                        <span>National Stadium, London</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default EventDetail;