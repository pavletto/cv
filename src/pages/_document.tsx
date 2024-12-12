import {Head, Html, Main} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg"/>
                <link rel="shortcut icon" href="favicon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>

                <meta name="description"
                      content="CV of Pavel Sukhodolskii, a Senior Frontend Developer based in Dubai with extensive experience in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits. Over 10 years in frontend development and 4 years in the drone industry."/>
                <meta name="keywords"
                      content="Pavel Sukhodolskii, Senior Frontend Developer, Frontend Engineer, JavaScript, TypeScript, React, WebGL, WebRTC, Docker, Go, Drone Industry, GIS, OpenGlobus, Dubai"/>
                <meta name="author" content="Pavel Sukhodolskii"/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:title" content="Pavel Sukhodolskii - Senior Frontend Developer"/>
                <meta property="og:description"
                      content="Senior Frontend Developer with over 10 years of experience. Skilled in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://example.com/cv/pavel-sukhodolskii"/>
                <meta property="og:image" content="https://example.com/cv/profile.jpg"/>
                <meta property="og:site_name" content="Pavel Sukhodolskii CV"/>
            </Head>
            <title>CV Pavel Sukhodolskii</title>
            <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg"/>
            <link rel="shortcut icon" href="favicon/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
            <link rel="manifest" href="favicon/site.webmanifest"/>


            <body className="antialiased bg-slate-200	">
            <Main/>
            </body>
        </Html>
    );
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
