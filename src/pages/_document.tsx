import {Head, Html, Main, NextScript} from "next/document";
import React from "react";
import Meta from "@/components/Meta";
import cv from "@/data/CV";
export default function Document() {
    const isDev = process.env.NODE_ENV === "development";
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg"/>
                <link rel="shortcut icon" href="favicon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>
                <Meta {...cv.meta}/>
            </Head>
            <title>{cv.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
            <link rel="manifest" href="favicon/site.webmanifest"/>
            <body className="antialiased bg-slate-200">
            <Main/>
            {isDev ? <NextScript/> : <></>}
            </body>
        </Html>
    );
}

export async function getStaticProps() {

    return {
        props: {}
    }
}
