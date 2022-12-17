import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import {BsFlag, BsGrid, BsHouseDoor, BsPersonCircle, BsPlusSquare} from "react-icons/bs";
import { useRouter } from "next/router";

function TopHeader() {
    const router = useRouter();
    return (
        <div className={styles.topHeader}>
            <div className="top-logo">
                <Link href={'/'}>
                    <Image
                        src="/images/t2-logo.png"
                        alt="market"
                        width={120}
                        height={40}
                    />
                </Link>
            </div>
            <div className={styles.topMenu}>
                <ul>
                    <li>
                        <Link href={'/'} className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
                            <BsHouseDoor className="me-1"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories'} className={`nav-link ${router.pathname === "/categories" ? "active" : ""}`}>
                            <BsGrid className="me-1"/>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href={'/countries'} className={`nav-link ${router.pathname === "/countries" ? "active" : ""}`}>
                            <BsFlag className="me-1"/>
                            Countries
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <BsPlusSquare className="me-1"/>
                            Add Post
                        </Link>
                    </li>
                    <li className={styles.headerLogin}>
                        <Link href={'/'}>
                            <BsPersonCircle className="me-1"/>
                            Log in
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopHeader;