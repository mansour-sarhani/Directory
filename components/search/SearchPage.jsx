import styles from './search.module.css'
import {Container} from "react-bootstrap";
import SearchForm from "../../common/SearchForm";
import {
    TbAdjustmentsHorizontal,
    TbSortDescending,
    TbCaretRight,
    TbPoint,
    TbLayoutGrid,
    TbFlag,
    TbCalendarPlus,
    TbX
} from "react-icons/tb";
import {useState} from "react";
import PostsGrid from "../../common/PostsGrid";
import Image from "next/image";
import PostsPagination from "../../common/PostsPagination";

function SearchPage() {

    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className={styles.searchPage}>
            <Container>
                <div className={styles.searchPageContainer}>
                    <div className={styles.searchTopWrapper}>
                        <div className={styles.searchFilterBtn}>
                            <button onClick={() => setOpenFilter(!openFilter)}>
                                {openFilter ?
                                    (
                                    <>
                                        <TbX className="me-1" />
                                        Close Filters
                                    </>
                                    )
                                :
                                    (
                                    <>
                                        <TbAdjustmentsHorizontal className="me-1" />
                                        Filters
                                    </>
                                    )
                                }
                            </button>
                        </div>
                        <div className={styles.searchBar}>
                            <SearchForm />
                        </div>
                    </div>
                    {openFilter && (
                        <div className={styles.searchFilterWrapper}>
                            <div className={styles.searchFilterColumn}>
                                <div className={styles.searchFilterColumnContent}>
                                    <h5>
                                        <TbSortDescending />
                                        Sort By
                                    </h5>
                                    <ul>
                                        <li className={styles.activeFilterItem}>
                                            <TbCaretRight />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.searchFilterColumn}>
                                <div className={styles.searchFilterColumnContent}>
                                    <h5>
                                        <TbLayoutGrid />
                                        Categories
                                    </h5>
                                    <ul>
                                        <li  className={styles.activeFilterItem}>
                                            <TbCaretRight />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.searchFilterColumn}>
                                <div className={styles.searchFilterColumnContent}>
                                    <h5>
                                        <TbFlag />
                                        Country
                                    </h5>
                                    <ul>
                                        <li className={styles.activeFilterItem}>
                                            <TbCaretRight />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.searchFilterColumn}>
                                <div className={styles.searchFilterColumnContent}>
                                    <h5>
                                        <TbCalendarPlus />
                                        Post Date
                                    </h5>
                                    <ul>
                                        <li className={styles.activeFilterItem}>
                                            <TbCaretRight />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                        <li>
                                            <TbPoint />
                                            Best Match
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <PostsGrid />
                <div className={styles.searchAd}>
                    <div className={styles.searchAdPoster}>
                        <Image
                            src="/images/search-ad.jpg"
                            alt="ad"
                            fill
                        />
                    </div>
                </div>
                <PostsGrid />
                <PostsPagination />
            </Container>
        </div>
    );
}

export default SearchPage;