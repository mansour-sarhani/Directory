import styles from './home.module.css'
import { TbPlus } from "react-icons/tb";
import {Container} from "react-bootstrap";
import Image from "next/image";

function HomeAddPost() {
    return (
        <div className={styles.homeAddPost}>
            <Container>
                <div className={styles.homeAddPostContainer}>
                    <div className={styles.homeAddPostImage}>
                        <Image
                            src="/images/add-post.jpg"
                            alt="market"
                            fill
                        />
                    </div>
                    <div className={styles.homeAddPostContent}>
                        <h2>
                            Add your first Post
                            <br/>
                            and grow your business
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque magni nam rerum sint vel veritatis. Accusantium cum dolorum eos ex illo iure nostrum, numquam tenetur veniam vitae. Ex, omnis!</p>
                        <button className="custom-btn">
                            <TbPlus className="me-1" />
                            Add Post
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomeAddPost;