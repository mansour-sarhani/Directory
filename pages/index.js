import SiteHead from "../common/Head";
import Layout from "../components/layout/Layout";
import HomePage from "../components/home/HomePage";
import FooterApplication from "../common/FooterApplication";

export default function Home() {
    return (
        <div className="page home-page">
            <SiteHead title="HomePage" />
            <Layout>
                <main className="main">
                    <HomePage />
                    <FooterApplication />
                </main>
            </Layout>
        </div>
    )
}
