import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import CategoriesGrid from "../../components/categories/CategoriesGrid";

export default function Categories() {
    return (
        <div className="page categories-page">
            <SiteHead title="Categories" />
            <Layout>
                <main className="main">
                    <CategoriesGrid />
                </main>
            </Layout>
        </div>
    );
}