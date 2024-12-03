import Header from '../components/Header';
import Side from '../components/Side';
import Main from '../components/Main';
import localFont from "next/font/local";
import cv from "../data/CV.json";

const robotoCondensed = localFont({
    src: "./fonts/RobotoCondensed.woff2",
    variable: "--font-roboto-condensed",
    weight: "100 350 900",
});

export default function ResumePage() {
    return (
        <div
            className={` ${robotoCondensed.variable} font-[family-name:var(--font-roboto-condensed)] rounded-lg max-w-6xl mx-auto my-4 bg-white p-10 shadow-md flex flex-col space-y-6 print:p-0 print:shadow-none print:max-w-full print:text-sm print:m-0`}>
            <Header data={cv.header}/>
            <main className="flex flex-col-reverse sm:flex-row">
                <Side {...cv.details}/>
                <Main {...cv}/>
            </main>
        </div>
    );
}
