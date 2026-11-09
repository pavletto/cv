import Head from "next/head";

export default function Meta({ title, description, siteUrl, image, verification }: ResumeMeta) {
    const canonical = `${siteUrl}/`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="canonical" href={canonical}/>
            {verification && <meta name="google-site-verification" content={verification}/>}
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={canonical}/>
            <meta property="og:image" content={image}/>
        </Head>
    );
}
