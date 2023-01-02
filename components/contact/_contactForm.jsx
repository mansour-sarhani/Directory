import styles from "./contact.module.css";
import {Form} from "react-bootstrap";

function ContactForm() {
    return (
        <div className={styles.contactPageTabForm}>
            <Form>
                <Form.Select className="mb-3">
                    <option>Select a topic:</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                        Please enter the email address in which you want to receive our reply.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactSubject">
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactText">
                    <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
                <Form.Group controlId="contactFile" className="mb-3">
                    <Form.Label>Attach a file</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <button type="submit">
                    Send Message
                </button>
            </Form>
        </div>
    );
}

export default ContactForm;