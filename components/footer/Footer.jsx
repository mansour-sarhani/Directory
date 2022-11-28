import styles from "./footer.module.css"
import FooterApplication from "./_footerApplication";
import FooterWrapper from "./_footerWrapper";

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterApplication />
            <FooterWrapper />
        </footer>
    );
}

export default Footer;