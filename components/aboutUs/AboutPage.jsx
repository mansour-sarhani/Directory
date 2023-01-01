import styles from './about.module.css'
import AboutIntro from "./_aboutIntro";
import AboutContent from "./_aboutContent";
import OurTeam from "./_ourTeam";
import HomeAddPost from "../home/_homeAddPost";

function AboutPage() {
    return (
        <div className={styles.aboutUsPage}>
            <AboutIntro />
            <AboutContent />
            <OurTeam />
            <HomeAddPost />
        </div>
    );
}

export default AboutPage;