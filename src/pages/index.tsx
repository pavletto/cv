import Header from '../components/Header';
import Main from '../components/Main';
import localFont from "next/font/local";
import cv from "../data/CV";

const robotoCondensed = localFont({
    src: "./fonts/RobotoCondensed.woff2",
    variable: "--font-roboto-condensed",
    weight: "100 350 900",
});
export default function ResumePage() {
    return (
        <div
            className={`${robotoCondensed.variable} font-[family-name:var(--font-roboto-condensed)] sm:rounded-lg max-w-6xl mx-auto my-0 sm:my-4 bg-white dark:bg-gray-800 p-10 shadow-md dark:shadow-gray-600 flex flex-col space-y-6 print:p-0 print:shadow-none print:max-w-full print:text-sm print:m-0`}>
            <Header data={cv.header}/>
            <main className="flex flex-col-reverse sm:flex-row">
                <Main {...cv}/>
            </main>
        </div>
    );
}
