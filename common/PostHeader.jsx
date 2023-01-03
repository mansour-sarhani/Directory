import styles from './PostHeader.module.css'
import Link from "next/link";
import {Container} from "react-bootstrap";
import {
    TbBrandFacebook,
    TbBrandTwitter,
    TbBrandWhatsapp,
    TbChevronRight,
    TbLink
} from "react-icons/tb";

function PostHeader() {
    return (
        <div className={styles.postHeader}>
            <Container>
                <div className={styles.postHeaderWrapper}>
                    <div className={styles.breadCrumb}>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    Home
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li>
                                <Link href={'/'}>
                                    Property
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li>
                                <Link href={'/'}>
                                    For Sale
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li className={styles.lastLink}>
                                Luxury Property
                            </li>
                        </ul>
                    </div>
                    <div className={styles.socialIcons}>
                        <ul>
                            <li>
                                <a href="#">
                                    <TbLink />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PostHeader;