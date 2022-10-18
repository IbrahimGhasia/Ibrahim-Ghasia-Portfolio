import { Typewriter } from "react-simple-typewriter"

export default function Home() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <div className="ml-5 md:ml-20 md:mt-20">
                <div className="text-skyblue_ pt-10 text-5xl md:text-9xl font-semibold transition-all duration-300">
                    <Typewriter
                        words={["Experience. "]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={2000}
                    />
                </div>

                <div className="grid place-items-center mt-10 md:mt-20">
                    <div className="text-left mr-5 md:mx-96 px-5 md:px-10 py-5 border-0 rounded-2xl duration-500 hover:shadow-2xl hover:translate-y-3">
                        <span className="text-xl text-gray-500">2022 - Present</span>
                        <h1 className="text-3xl md:text-5xl text-darkblue_ dark:text-green_ font-semibold">
                            Blockchain Lead
                        </h1>
                        <span className="text-xl md:text-2xl text-skyblue_ dark:text-yellow_">
                            Google Developer Student Club, SCET
                        </span>
                        <p className="mt-5 text-lg md:text-2xl dark:text-white">
                            Help in organising and managing technical events. Oranising technical
                            workshops on `Introduction to Blockchain` to spirited Learners
                        </p>
                    </div>

                    <div className="text-left mr-5 md:mx-96 px-5 md:px-10 py-5 border-0 rounded-2xl duration-500 hover:shadow-2xl hover:translate-y-3 mt-10 mb-10">
                        <span className="text-xl text-gray-500">2022 - 2020</span>
                        <h1 className="text-3xl md:text-5xl text-darkblue_ dark:text-green_ font-semibold">
                            Outgoing Global Volueenter
                        </h1>
                        <span className="text-xl md:text-2xl text-skyblue_ dark:text-yellow_">
                            AIESEC, Surat
                        </span>
                        <p className="mt-5 text-lg md:text-2xl dark:text-white">
                            Help and motivate students to do volueenter work abroad. Conducted IR
                            calls with AIESEC entities abroad
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
