import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { TbHome2, TbLayoutGrid, TbFlag, TbSquarePlus, TbUserCircle } from "react-icons/tb";
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
                            <TbHome2 className="me-1"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories'} className={`nav-link ${router.pathname === "/categories" ? "active" : ""}`}>
                            <TbLayoutGrid className="me-1"/>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href={'/countries'} className={`nav-link ${router.pathname === "/countries" ? "active" : ""}`}>
                            <TbFlag className="me-1"/>
                            Countries
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <TbSquarePlus className="me-1"/>
                            Add Post
                        </Link>
                    </li>
                    <li className={styles.headerLogin}>
                        <Link href={'/'}>
                            <TbUserCircle className="me-1"/>
                            Log in
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopHeader;