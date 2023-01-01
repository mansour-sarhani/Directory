import styles from './about.module.css'
import HomeQuickAccess from "../home/_homeQuickAccess";

function AboutIntro() {
    return (
        <div className={styles.aboutIntroWrapper}>
            <div className={styles.aboutIntro}>
                <div className={styles.aboutIntroContent}>
                    <h1 className="mb-4">
                        Get to know Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, tenetur!
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <HomeQuickAccess />
        </div>
    );
}

export default AboutIntro;