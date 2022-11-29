import Link from "next/link";
import {Container} from "react-bootstrap";
import {TbBrandFacebook, TbBrandTwitter, TbBrandWhatsapp, TbChevronRight, TbLink} from "react-icons/tb";

function PostHeader() {
    return (
        <div className="postHeader">
            <Container>
                <div className="postHeaderWrapper">
                    <div className="breadCrumb">
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    Home
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li>
                                <Link href={'/'}>
                                    Property
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li>
                                <Link href={'/'}>
                                    For Sale
                                </Link>
                                <TbChevronRight />
                            </li>
                            <li className="last-link">
                                Luxury Property
                            </li>
                        </ul>
                    </div>
                    <div className="socialIcons">
                        <ul>
                            <li>
                                <a href="#">
                                    <TbLink />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TbBrandWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PostHeader;