import styles from './home.module.css'
import HomeSearch from "./_homeSearch";
import HomeQuickAccess from "./_homeQuickAccess";
import HomeTopBanners from "./_homeTopBanners";
import HomeEvents from "./_homeEvents";
import HomeLatest from "./_homeLatest";
import HomeAddPost from "./_homeAddPost";

function HomePage() {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.homeFold}>
                <HomeSearch />
                <HomeQuickAccess />
            </div>
            <HomeTopBanners />
            <HomeEvents />
            <HomeLatest />
            <HomeAddPost />
        </div>
    );
}

export default HomePage;