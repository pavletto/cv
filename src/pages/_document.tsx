import { Head, Html, Main, NextScript } from "next/document";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon/favicon-32x32.png`}/>
                <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon/favicon-16x16.png`}/>
                <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/favicon/apple-touch-icon.png`}/>
                <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`}/>
            </Head>
            <body className="antialiased">
                <Main/>
                {process.env.NODE_ENV === "development" && <NextScript/>}
            </body>
        </Html>
    );
}
