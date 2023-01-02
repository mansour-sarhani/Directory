import SiteHead from "../common/Head";
import Layout from "../components/layout/Layout";
import AboutPage from "../components/aboutUs/AboutPage";
import FooterApplication from "../common/FooterApplication";

export default function AboutUs() {
    return (
        <div className="page about-us-page">
            <SiteHead title="About Us" />
            <Layout>
                <main className="main">
                    <AboutPage />
                    <FooterApplication />
                </main>
            </Layout>
        </div>
    )
}
