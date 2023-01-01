import styles from './about.module.css'
import {Container} from "react-bootstrap";
import Image from "next/image";

function OurTeam() {
    return (
        <div className={styles.ourTeamWrapper}>
            <Container>
                <div className="sectionHeading">
                    <h5>Our Team</h5>
                </div>
                <div className={styles.ourTeamGrid}>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                    <div className={styles.ourTeamItem}>
                        <div className={styles.ourTeamItemImg}>
                            <Image
                                src='/images/image-5.jpg'
                                alt='member'
                                fill
                            />
                        </div>
                        <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                Mansour Jamshidi
                            </span>
                            <span className={styles.ourTeamItemJob}>
                                CEO
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default OurTeam;