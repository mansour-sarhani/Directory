import styles from './home.module.css'
import {Container} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BsGeoAlt, BsMusicNoteList } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

function HomeEvents() {
    return (
        <div className={styles.homeEvents}>
            <Container>
                <div className={styles.homeEventsContainer}>
                    <div className={styles.homeEventBlock}>
                        <div className={styles.homeEventBlockGallery}>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>John Doe</span>
                                        <span className={styles.homeGalleryDate}>Nov 11, 2022</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-1.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>John Doe</span>
                                        <span className={styles.homeGalleryDate}>Nov 11, 2022</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-5.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>John Doe</span>
                                        <span className={styles.homeGalleryDate}>Nov 11, 2022</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-5.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>John Doe</span>
                                        <span className={styles.homeGalleryDate}>Nov 11, 2022</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-1.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.homeEventBlockContent}>
                            <h2>Find the best concerts near you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio minima minus optio provident ...</p>
                            <Link href={'/'}>
                                <button className="custom-btn">View All</button>
                            </Link>
                            <span className={styles.homeEventIcon}><BsMusicNoteList /></span>
                        </div>
                        <div className={styles.homeEventDots}></div>
                    </div>
                    <div className={`${styles.homeEventBlock} reverse`}>
                        <div className={styles.homeEventBlockContent}>
                            <h2>The top and most popular business in your area</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio minima minus optio provident ...</p>
                            <div className="btn-wrapper">
                                <Link href={'/'}>
                                    <button className="custom-btn me-2">View All</button>
                                </Link>
                                <Link href={'/'}>
                                    <button className="custom-btn alt">
                                        <BsGeoAlt className="me-1" />
                                        View in Map
                                    </button>
                                </Link>
                            </div>
                            <span className={styles.homeEventIcon}><MdWorkOutline /></span>
                        </div>
                        <div className={styles.homeEventBlockGalleryReverse}>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>Business Name</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-2.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>Business Name</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>Business Name</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.homeGalleryWrapper}>
                                <Link href={'/'}>
                                    <div className={styles.homeGalleryOverlayText}>
                                        <span className={styles.homeGalleryTitle}>Business Name</span>
                                    </div>
                                    <div className={styles.homeGalleryOverlay}></div>
                                    <Image
                                        src="/images/image-2.jpg"
                                        alt="market"
                                        fill
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.homeEventDotsReverse}></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomeEvents;