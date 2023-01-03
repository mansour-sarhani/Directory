import styles from './SearchForm.module.css'
import {Form} from "react-bootstrap";
import { TbMapPin, TbLayoutGrid, TbSearch } from "react-icons/tb";

function SearchForm() {
    return (
        <div className={styles.homeSearchForm}>
            <Form>
                <Form.Group className={styles.homeSearchField} controlId="search">
                    <Form.Control type="text" placeholder="What are you looking for ..."/>
                    <div className={styles.searchFormParts}>
                        <div className={styles.searchFormLocation}>
                            <TbMapPin className="me-1"/>
                            City: <span className="ms-2">London</span>
                        </div>
                        <div className={styles.searchFormCategories}>
                            <TbLayoutGrid />
                            <Form.Select aria-label="Category Select">
                                <option>Categories:</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <button className={styles.searchBtn} type="submit">
                            <TbSearch className="me-1"/>
                            Search
                        </button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SearchForm;