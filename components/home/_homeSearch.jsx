import styles from "./home.module.css";
import {Form} from "react-bootstrap";
import {BsFillGeoAltFill, BsGrid, BsSearch} from "react-icons/bs";
import SearchForm from "../../common/SearchForm";

function HomeSearch() {
    return (
        <div className={styles.homeSearch}>
            <div className={styles.homeSearchContent}>
                <h1 className="mb-4">
                    Search Faster & Find
                    <br/>
                    Everything You Need
                </h1>
                <p>
                    Discover thousands of event announcement, directory and listing
                    <br/>
                    jobs, property, pets, services and many more ...
                </p>
            </div>
            <SearchForm />
        </div>
    );
}

export default HomeSearch;