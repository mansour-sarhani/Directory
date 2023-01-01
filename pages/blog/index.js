import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import BlogPage from "../../components/blog/BlogPage";

export default function Blog() {
    return (
        <div className="page categories-page">
            <SiteHead title="Blog" />
            <Layout>
                <main className="main">
                    <BlogPage />
                </main>
            </Layout>
        </div>
    );
}