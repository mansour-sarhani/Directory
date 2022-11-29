import styles from "./posts.module.css"
import PostHeader from "../../common/PostHeader";
import {Container} from "react-bootstrap";
import EmblaCarousel from "./carousel/EmblaCarousel";
import {
    TbArrowsMaximize,
    TbBed,
    TbMapPin,
    TbSofa,
    TbPhoneCall,
    TbMessagePlus,
    TbBookmark,
    TbChevronRight
} from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function PostDetail() {
    return (
        <div className={styles.postDetail}>
            <PostHeader />
            <div className="postDetailCarousel">
                <EmblaCarousel slides={slides} />
            </div>
            <Container>
                <div className={styles.postDetailWrapper}>
                    <div className={styles.postDetailMain}>
                        <div className={styles.postDetailIntro}>
                            <div className={styles.postDetailIntroTitle}>
                                <h1>Modern Furnished Apartment</h1>
                                <span>3 days ago</span>
                            </div>
                            <div className={styles.postDetailIntroMeta}>
                                <div className={styles.postDetailIntroPrice}>
                                    $366,000
                                </div>
                                <div className={styles.postDetailIntroMetaWrapper}>
                                    <div className={styles.postDetailIntroMetaWrapperItem}>
                                        <TbArrowsMaximize />
                                        <span>360 Meter</span>
                                    </div>
                                    <div className={styles.postDetailIntroMetaWrapperItem}>
                                        <TbSofa />
                                        <span>2 Halls</span>
                                    </div>
                                    <div className={styles.postDetailIntroMetaWrapperItem}>
                                        <TbBed />
                                        <span>4 Bedrooms</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.postDetailIntroAddress}>
                                <TbMapPin />
                                <span>E90 8BA, 393 Church Road, London, United Kingdom</span>
                            </div>
                        </div>
                        <div className={styles.postDetailDesc}>
                            <div className={styles.postDetailHeading}>
                                <div className={styles.postDetailTitle}>
                                    <h5>Description</h5>
                                </div>
                            </div>
                            <div className={styles.postDetailDescText}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum id labore laborum mollitia natus pariatur rem repudiandae rerum sequi unde veritatis voluptas voluptatem! Dolorum numquam sed temporibus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum id labore laborum mollitia natus pariatur rem repudiandae rerum sequi unde veritatis voluptas voluptatem! Dolorum numquam sed temporibus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum id labore laborum mollitia natus pariatur rem repudiandae rerum sequi unde veritatis voluptas voluptatem! Dolorum numquam sed temporibus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum id labore laborum mollitia natus pariatur rem repudiandae rerum sequi unde veritatis voluptas voluptatem! Dolorum numquam sed temporibus.</p>
                            </div>
                        </div>
                        <div className={styles.postDetailLocation}>
                            <div className={styles.postDetailHeading}>
                                <div className={styles.postDetailTitle}>
                                    <h5>Location on map</h5>
                                </div>
                            </div>
                            <div className={styles.postDetailLocationMap}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.815550944722!2d-0.1327630180819212!3d51.49571368091444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760515362a4951%3A0xf6fc094c2bab9994!2sBig%20Ben%20Clock!5e0!3m2!1sen!2suk!4v1669728254831!5m2!1sen!2suk"
                                    width="800" height="400" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className={styles.postDetailSide}>
                        <div className={styles.postDetailContact}>
                            <div className={styles.postDetailHeader}>
                                <div className={styles.postDetailPhone}>
                                    <span className={styles.postDetailPhoneIcon}><TbPhoneCall /></span>
                                    <div className={styles.postDetailPhoneNumber}>
                                        <span className={styles.shownNumber}>(704)</span>
                                        <span className={styles.hiddenNumber}>*** ****</span>
                                    </div>
                                </div>
                                <div className={styles.postDetailPhoneReveal}>
                                    <button>Reveal Number</button>
                                </div>
                            </div>
                            <div className={styles.postDetailContactBtns}>
                                <button>
                                    <TbMessagePlus />
                                    Message Seller
                                </button>
                                <button>
                                    <TbBookmark />
                                    Save to Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.postRelated}>
                    <div className={styles.postDetailHeading}>
                        <div className={styles.postDetailTitle}>
                            <h5>Similar Properties</h5>
                        </div>
                        <div className={styles.postDetailLink}>
                            <Link href={'/'}>
                                View All
                                <TbChevronRight />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.postRelatedWrapper}>
                        <div className={styles.postRelatedItem}>
                            <div className={styles.postRelatedItemImage}>
                                <Link href={'/'}>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="post"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.postRelatedItemContent}>
                                <div className={styles.postRelatedItemTitle}>
                                    <Link href={'/'}>
                                        Modern Furnished Apartment
                                    </Link>
                                    <span><TbBookmark /></span>
                                </div>
                                <div className={styles.postRelatedItemMeta}>
                                    <div className={styles.postRelatedItemPrice}>
                                        $366,000
                                    </div>
                                    <div className={styles.postRelatedItemMetaWrapper}>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbArrowsMaximize />
                                            <span>360</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbSofa />
                                            <span>2</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbBed />
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.postRelatedItemBottom}>
                                    <span className={styles.postRelatedAddress}>
                                        <TbMapPin />
                                        Church Road, London
                                    </span>
                                    <button className={styles.postRelatedSaleBtn}>Sale</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.postRelatedItem}>
                            <div className={styles.postRelatedItemImage}>
                                <Link href={'/'}>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="post"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.postRelatedItemContent}>
                                <div className={styles.postRelatedItemTitle}>
                                    <Link href={'/'}>
                                        Modern Furnished Apartment
                                    </Link>
                                    <span><TbBookmark /></span>
                                </div>
                                <div className={styles.postRelatedItemMeta}>
                                    <div className={styles.postRelatedItemPrice}>
                                        $366,000
                                    </div>
                                    <div className={styles.postRelatedItemMetaWrapper}>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbArrowsMaximize />
                                            <span>360</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbSofa />
                                            <span>2</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbBed />
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.postRelatedItemBottom}>
                                    <span className={styles.postRelatedAddress}>
                                        <TbMapPin />
                                        Church Road, London
                                    </span>
                                    <button className={styles.postRelatedSaleBtn}>Sale</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.postRelatedItem}>
                            <div className={styles.postRelatedItemImage}>
                                <Link href={'/'}>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="post"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.postRelatedItemContent}>
                                <div className={styles.postRelatedItemTitle}>
                                    <Link href={'/'}>
                                        Modern Furnished Apartment
                                    </Link>
                                    <span><TbBookmark /></span>
                                </div>
                                <div className={styles.postRelatedItemMeta}>
                                    <div className={styles.postRelatedItemPrice}>
                                        $366,000
                                    </div>
                                    <div className={styles.postRelatedItemMetaWrapper}>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbArrowsMaximize />
                                            <span>360</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbSofa />
                                            <span>2</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbBed />
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.postRelatedItemBottom}>
                                    <span className={styles.postRelatedAddress}>
                                        <TbMapPin />
                                        Church Road, London
                                    </span>
                                    <button className={styles.postRelatedSaleBtn}>Sale</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.postRelatedItem}>
                            <div className={styles.postRelatedItemImage}>
                                <Link href={'/'}>
                                    <Image
                                        src="/images/image-3.jpg"
                                        alt="post"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className={styles.postRelatedItemContent}>
                                <div className={styles.postRelatedItemTitle}>
                                    <Link href={'/'}>
                                        Modern Furnished Apartment
                                    </Link>
                                    <span><TbBookmark /></span>
                                </div>
                                <div className={styles.postRelatedItemMeta}>
                                    <div className={styles.postRelatedItemPrice}>
                                        $366,000
                                    </div>
                                    <div className={styles.postRelatedItemMetaWrapper}>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbArrowsMaximize />
                                            <span>360</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbSofa />
                                            <span>2</span>
                                        </div>
                                        <div className={styles.postRelatedItemMetaItem}>
                                            <TbBed />
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.postRelatedItemBottom}>
                                    <span className={styles.postRelatedAddress}>
                                        <TbMapPin />
                                        Church Road, London
                                    </span>
                                    <button className={styles.postRelatedSaleBtn}>Sale</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PostDetail;