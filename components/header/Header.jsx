import styles from "./header.module.css"
import TopHeader from "./_topHeader";
import BottomHeader from "./_bottomHeader";
import {Container} from "react-bootstrap";

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContainer}>
                    <TopHeader />
                    <BottomHeader />
                </div>
            </Container>
        </header>
    );
}

export default Header;