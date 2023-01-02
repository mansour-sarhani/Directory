import SiteHead from "../common/Head";
import Layout from "../components/layout/Layout";
import ContactPage from "../components/contact/ContactPage";

export default function ContactUs() {
    return (
        <div className="page contact-us-page">
            <SiteHead title="Contact Us" />
            <Layout>
                <main className="main">
                    <ContactPage />
                </main>
            </Layout>
        </div>
    )
}
