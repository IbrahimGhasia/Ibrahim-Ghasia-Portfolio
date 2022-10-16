import { Typewriter } from "react-simple-typewriter"
import Card from "../components/UI/Card"

export default function Home() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <div className="ml-5 md:ml-20 md:mt-20">
                <div className="text-green_ text-5xl p-10 md:text-9xl font-semibold transition-all duration-300">
                    <Typewriter
                        words={["Certificates. "]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={2000}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-1 mx-10 place-items-center md:mt-10 pb-10">
                <Card img_source="/WebDev.jpg" />
                <Card img_source="/GDSC_Lead_Certi_1.jpg" />
                <Card img_source="/Cloud.jpg" />
                <Card img_source="/1stRank_Certi_1.jpg" />
            </div>
        </div>
    )
}
