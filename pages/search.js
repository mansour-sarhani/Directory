import SiteHead from "../common/Head";
import Layout from "../components/layout/Layout";
import FooterApplication from "../common/FooterApplication";
import SearchPage from "../components/search/SearchPage";

export default function Search() {
    return (
        <div className="page search-page">
            <SiteHead title="Search Results" />
            <Layout>
                <main className="main">
                    <SearchPage />
                    <FooterApplication />
                </main>
            </Layout>
        </div>
    )
}
