import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg"/>
                <link rel="shortcut icon" href="favicon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>
                {/*<Meta {...cv.meta}/>*/}
            </Head>
            <title>CV Pavel Sukhodolskii</title>
            <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg"/>
            <link rel="shortcut icon" href="favicon/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
            <link rel="manifest" href="favicon/site.webmanifest"/>


            <body className="antialiased bg-slate-200	">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

export async function getStaticProps() {

    return {
        props: {}
    }
}
