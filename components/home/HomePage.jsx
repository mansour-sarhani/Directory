import styles from './home.module.css'
import HomeSearch from "./_homeSearch";
import HomeTopBanners from "./_homeTopBanners";
import HomeEvents from "./_homeEvents";
import HomeLatest from "./_homeLatest";
import QuickAccess from "../../common/QuickAccess";
import AddPost from "../../common/AddPost";

function HomePage() {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.homeFold}>
                <HomeSearch />
                <QuickAccess />
            </div>
            <HomeTopBanners />
            <HomeEvents />
            <HomeLatest />
            <AddPost />
        </div>
    );
}

export default HomePage;