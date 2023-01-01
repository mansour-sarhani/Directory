import styles from './about.module.css'
import {Col, Container, Row} from "react-bootstrap";

function AboutContent() {
    return (
        <div className={styles.aboutContentWrapper}>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className={styles.aboutContentText}>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, possimus?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eligendi facilis iure labore nihil repudiandae tempora. Delectus, deserunt ducimus et facere, harum laudantium nihil officia rem repudiandae similique tempora unde?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eligendi facilis iure labore nihil repudiandae tempora. Delectus, deserunt ducimus et facere, harum laudantium nihil officia rem repudiandae similique tempora unde?</p>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className={styles.aboutContentImage}>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutContent;