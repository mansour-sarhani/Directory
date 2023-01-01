import styles from './blog.module.css'
import {Container} from "react-bootstrap";
import BlogSlider from "./BlogSlider";
import BlogGrid from "./BlogGrid";


function BlogPage() {
    return (
        <div className={styles.blogWrapper}>
            <Container>
                <BlogSlider />
                <BlogGrid />
            </Container>
        </div>
    );
}

export default BlogPage;