import styles from './blog.module.css'
import {Container} from "react-bootstrap";
import BlogSlider from "./_blogSlider";
import BlogGrid from "./_blogGrid";


function BlogArchivePage() {
    return (
        <div className={styles.blogWrapper}>
            <Container>
                <BlogSlider />
                <BlogGrid start={0} end={12} />
            </Container>
        </div>
    );
}

export default BlogArchivePage;