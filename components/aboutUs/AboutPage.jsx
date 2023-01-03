import styles from './about.module.css'
import AboutIntro from "./_aboutIntro";
import AboutContent from "./_aboutContent";
import OurTeam from "./_ourTeam";
import AddPost from "../../common/AddPost";

function AboutPage() {
    return (
        <div className={styles.aboutUsPage}>
            <AboutIntro />
            <AboutContent />
            <OurTeam />
            <AddPost />
        </div>
    );
}

export default AboutPage;