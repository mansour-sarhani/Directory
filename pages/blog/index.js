import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import BlogArchivePage from "../../components/blog/BlogArchivePage";

export default function Blog() {
    return (
        <div className="page blog-archive-page">
            <SiteHead title="Blog" />
            <Layout>
                <main className="main">
                    <BlogArchivePage />
                </main>
            </Layout>
        </div>
    );
}