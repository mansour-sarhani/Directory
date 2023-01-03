import styles from "./blog.module.css";
import BlogCarousel from "../carousels/blogSlider/blogCarousel";

function BlogSlider() {
    return (
        <div className={styles.blogCarousel}>
            <BlogCarousel start={0} end={5} />
        </div>
    );
}

export default BlogSlider;