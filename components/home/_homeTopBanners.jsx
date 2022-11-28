import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import {Container} from "react-bootstrap";

function HomeTopBanners() {
    return (
        <Container>
            <div className={styles.homeTopBanners}>
                <div className={styles.homeTopBannerItem}>
                    <Link href={'/'} >
                        <Image
                            src="/images/home-banner-2.png"
                            alt="market"
                            fill
                        />
                    </Link>
                </div>
                <div className={styles.homeTopBannerItem}>
                    <Link href={'/'} >
                        <Image
                            src="/images/home-banner-1.png"
                            alt="market"
                            fill
                        />
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default HomeTopBanners;