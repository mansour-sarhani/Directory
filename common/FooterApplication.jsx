import styles from './FooterApplication.module.css'
import {Container} from "react-bootstrap";
import Image from "next/image";

function FooterApplication() {
    return (
        <div className={styles.footerApplication}>
            <Container>
                <div className={styles.footerApplicationWrapper}>
                    <div className={styles.footerApplicationIntro}>
                        <h2>Get the Company Name App</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className={styles.footerApplicationBtnWrapper}>
                            <a href="#" className="me-3">
                                <Image
                                    src="/images/app-btn.png"
                                    alt="market"
                                    width={167}
                                    height={50}
                                />
                            </a>
                            <a href="#" className="me-3">
                                <Image
                                    src="/images/gplay-btn.png"
                                    alt="market"
                                    width={167}
                                    height={50}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerApplicationImage}>
                        <Image
                            src="/images/iphones.png"
                            alt="market"
                            width={300}
                            height={348}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FooterApplication;