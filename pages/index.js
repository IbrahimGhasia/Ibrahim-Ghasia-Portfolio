import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"
import Footer from "../components/Footer"
export default function Home() {
    return (
        <div className="">
            <div className="grid md:grid-cols-3">
                <div className="mx-5 md:ml-20 mt-40 col-span-2">
                    <h1 className="text-3xl md:text-7xl font-semibold group text-skyblue_ dark:text-yellow_ hover:text-darkblue_ dark:hover:text-green_ transition-all duration-300">
                        Hi there, <br />
                        <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-2 bg-skyblue_ dark:bg-yellow_"></span>
                        Myself Ibrahim Ghasia.
                        <span class="block max-w-0 group-hover:max-w-3xl transition-all duration-500 h-2 bg-skyblue_ dark:bg-yellow_"></span>
                    </h1>

                    <div className="ml-10 md:ml-40 mt-10">
                        <Link href="/about">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:mt-2 transition-all duration-500">
                                <span class="relative px-10 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg">
                                    About Me 🙋🏼‍♂️
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-20 mx-auto">
                    <img
                        src="/Me.jpg"
                        className="mb-20 h-96 w-80 rounded-2xl border-2 border-gray-400 dark:border-gray-700 p-3"
                    />
                </div>
            </div>

            {/* <div className="mx-10 md:ml-20 mt-5">
                <p className="md:text-2xl text-gray-700 dark:text-white md:mx-20 text-justify">
                    <Typewriter
                        words={[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit erat ege tante bibendum fermentum. Integer consequat auctor eros at rutrum. In sodales luctus porta. Nunc lobortis metus a ligula condimentum posuere. Nullam id velit ullamcorper, vulputate enim a, posuere nunc. Morbi aliquam lacinia magna, nec cursus lectus suscipit id. ",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={60}
                        delaySpeed={4000}
                    />
                </p>
            </div> */}
        </div>
    )
}
