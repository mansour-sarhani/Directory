import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import CountriesGrid from "../../components/countries/CountriesGrid";

export default function Countries() {
    return (
        <div className="page countries-page">
            <SiteHead title="Countries" />
            <Layout>
                <main className="main">
                    <CountriesGrid />
                </main>
            </Layout>
        </div>
    );
}