import styles from "./footer.module.css"
import FooterWrapper from "./_footerWrapper";
import {TbChevronUp} from "react-icons/tb";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span
                className="footerChevron"
                onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
            >
                <TbChevronUp />
            </span>
            <FooterWrapper />
        </footer>
    );
}

export default Footer;