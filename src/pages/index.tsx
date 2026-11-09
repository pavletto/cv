import localFont from "next/font/local";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Meta from "@/components/Meta";
import cv from "@/data/CV";

const robotoCondensed = localFont({
    src: "./fonts/RobotoCondensed.woff2",
    weight: "100 900",
});

export default function ResumePage() {
    return (
        <>
            <Meta {...cv.meta}/>
            <div className={`${robotoCondensed.className} mx-auto max-w-4xl space-y-6 bg-white p-5 leading-relaxed text-slate-900 sm:my-6 sm:rounded-lg sm:p-10 sm:shadow-sm dark:bg-slate-900 dark:text-slate-100 print:m-0 print:max-w-none print:space-y-3 print:p-0 print:text-xs print:leading-snug print:shadow-none`}>
                <Header {...cv.header}/>
                <Main {...cv}/>
            </div>
        </>
    );
}
