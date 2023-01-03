import Head from "next/head";

function SiteHead({title}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Directory that you need!"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
}

export default SiteHead;