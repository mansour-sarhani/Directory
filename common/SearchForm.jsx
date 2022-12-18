import {Form} from "react-bootstrap";
import {BsFillGeoAltFill, BsGrid, BsSearch} from "react-icons/bs";

function SearchForm() {
    return (
        <div className="homeSearchForm">
            <Form>
                <Form.Group className="homeSearchField" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="What are you looking for ..."/>
                    <div className="searchFormParts">
                        <div className="searchFormLocation">
                            <BsFillGeoAltFill className="me-2"/>
                            City: <span className="ms-2">London</span>
                        </div>
                        <div className="searchFormCategories">
                            <BsGrid/>
                            <Form.Select aria-label="Default select">
                                <option>Categories:</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <button className="searchBtn" type="submit">
                            <BsSearch className="me-2"/>
                            Search
                        </button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SearchForm;