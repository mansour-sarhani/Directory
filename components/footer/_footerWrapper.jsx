import styles from "./footer.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function FooterWrapper() {
    return (
        <div className={styles.footerWrapper}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.footerLinks}>
                            <h5>Categories</h5>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        Event Announcement
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Directory & Listing
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Property
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Social Events
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.footerLinks}>
                            <h5>Quick Access</h5>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Add New Post
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Manage API
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.footerLinks}>
                            <h5>Our Community</h5>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.footerAbout}>
                            <Image
                                src="/images/t2-logo.png"
                                alt="market"
                                width={150}
                                height={50}
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem eligendi eveniet ex illo, illum maxime nam quas quibusdam rem</p>
                            <span>Copyright 2022</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterWrapper;