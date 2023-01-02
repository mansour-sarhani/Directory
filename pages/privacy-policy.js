import SiteHead from "../common/Head";
import Layout from "../components/layout/Layout";
import PrivacyPolicyPage from "../components/extraPages/PrivacyPolicyPage";

export default function PrivacyPolicy() {
    return (
        <div className="page privacy-page">
            <SiteHead title="Privacy Policy" />
            <Layout>
                <main className="main">
                    <PrivacyPolicyPage />
                </main>
            </Layout>
        </div>
    )
}
