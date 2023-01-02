import styles from './contact.module.css'
import {Container} from "react-bootstrap";
import {useState} from "react";
import ContactForm from "./_contactForm";
import ContactFaq from "./_contactFaq";

function ContactPage() {

    const [state, setState] = useState('form');

    return (
        <div className={styles.contactPageWrapper}>
            <div className={styles.contactUsBanner}>
                <h1>Can we help you?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, veniam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className={styles.contactPageTabBtns}>
                    <button onClick={() => setState('form')} className={`${state === 'form' && styles.activeBtn}`}>
                        Contact
                    </button>
                    <button onClick={() => setState('faq')} className={`${state === 'faq' && styles.activeBtn}`}>
                        FAQ
                    </button>
                </div>
            </div>
            <Container>
                <div className={styles.contactPageTab}>
                    {state === 'form'
                        ?
                        (
                            <div className={styles.contactPageTabItem}>
                                <div className="sectionHeading">
                                    <h5>Send us a message</h5>
                                </div>
                                <ContactForm />
                            </div>
                        )
                        :
                        (
                            <div className={styles.contactPageTabItem}>
                                <div className="sectionHeading">
                                    <h5>Frequently Asked Questions</h5>
                                </div>
                                <ContactFaq />
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
}

export default ContactPage;