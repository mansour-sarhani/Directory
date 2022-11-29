import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import PostDetail from "../../components/posts/PostDetail";

function Post() {
    return (
        <div className="page post-detail-page">
            <SiteHead title="Event Detail" />
            <Layout>
                <main className="main">
                    <PostDetail />
                </main>
            </Layout>
        </div>
    );
}

export default Post;