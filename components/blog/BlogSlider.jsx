import styles from "./blog.module.css";
import BlogCarousel from "../carousels/blogSlider/blogCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function BlogSlider() {
    return (
        <div className={styles.blogCarousel}>
            <BlogCarousel slides={slides} />
        </div>
    );
}

export default BlogSlider;