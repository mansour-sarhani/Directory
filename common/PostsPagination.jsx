import Pagination from 'react-bootstrap/Pagination';
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

function PostsPagination() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className="paginationWrapper">
            <Pagination>{items}</Pagination>
            <div className="paginationButtons">
                <button>
                    <TbChevronLeft />
                    Previous Page
                </button>
                <button>
                    Next Page
                    <TbChevronRight />
                </button>
            </div>
        </div>
    );
}

export default PostsPagination;