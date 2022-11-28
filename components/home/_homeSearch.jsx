import styles from "./home.module.css";
import {Form} from "react-bootstrap";
import {BsFillGeoAltFill, BsGrid, BsSearch} from "react-icons/bs";

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
            <div className={styles.homeSearchForm}>
                <Form>
                    <Form.Group className={styles.homeSearchField} controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="What are you looking for ..."/>
                        <div className={styles.searchFormParts}>
                            <div className={styles.searchFormLocation}>
                                <BsFillGeoAltFill className="me-2"/>
                                City: <span className="ms-2">London</span>
                            </div>
                            <div className={styles.searchFormCategories}>
                                <BsGrid/>
                                <Form.Select aria-label="Default select">
                                    <option>Categories:</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <button className={styles.searchBtn} type="submit">
                                <BsSearch className="me-2"/>
                                Search
                            </button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default HomeSearch;