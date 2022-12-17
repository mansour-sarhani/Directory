import {Container} from "react-bootstrap";
import Image from "next/image";
import {TbChevronUp} from "react-icons/tb";

function FooterApplication() {
    return (
        <div className="footerApplication">
            <span className="footerApplicationChevron"><TbChevronUp /></span>
            <Container>
                <div className="footerApplicationWrapper">
                    <div className="footerApplicationIntro">
                        <h2>Get the Company Name App</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="footerApplicationBtnWrapper">
                            <a href="#" className="me-3">
                                <Image
                                    src="/images/app-btn.png"
                                    alt="market"
                                    width={167}
                                    height={50}
                                />
                            </a>
                            <a href="#" className="me-3">
                                <Image
                                    src="/images/gplay-btn.png"
                                    alt="market"
                                    width={167}
                                    height={50}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="footerApplicationImage">
                        <Image
                            src="/images/iphones.png"
                            alt="market"
                            width={300}
                            height={348}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FooterApplication;