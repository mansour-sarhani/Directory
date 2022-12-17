import styles from "./footer.module.css"
import FooterWrapper from "./_footerWrapper";

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterWrapper />
        </footer>
    );
}

export default Footer;