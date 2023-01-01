import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import BlogPostPage from "../../components/blog/BlogPostPage";

export default function BlogPost() {
    return (
        <div className="page categories-page">
            <SiteHead title="Blog Post" />
            <Layout>
                <main className="main">
                    <BlogPostPage />
                </main>
            </Layout>
        </div>
    );
}