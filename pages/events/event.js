import SiteHead from "../../common/Head";
import Layout from "../../components/layout/Layout";
import EventDetail from "../../components/events/EventDetail";

export default function Event() {
    return (
        <div className="page event-detail-page">
            <SiteHead title="Event Detail" />
            <Layout>
                <main className="main">
                    <EventDetail />
                </main>
            </Layout>
        </div>
    );
}
