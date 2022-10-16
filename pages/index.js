import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"
import Footer from "../components/Footer"
export default function Home() {
    return (
        <div className="">
            <div className="grid md:grid-cols-3">
                <div className="mx-5 md:ml-20 mt-10 md:mt-40 md:col-span-2">
                    <h1 className="text-4xl md:text-7xl font-semibold group text-skyblue_ dark:text-yellow_ hover:text-darkblue_ dark:hover:text-green_ transition-all duration-300 cursor-pointer">
                        Hi there,👋🏻
                        <br />
                        <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-2 bg-skyblue_ dark:bg-yellow_"></span>
                        Myself Ibrahim Ghasia.
                        <span class="block max-w-0 group-hover:max-w-3xl transition-all duration-500 h-2 bg-skyblue_ dark:bg-yellow_"></span>
                    </h1>

                    <div className="mx-10 md:ml-20 mt-5">
                        <p className="text-lg md:text-2xl text-gray-700 dark:text-white md:mx-10 text-left">
                            I'm a software developer who enjoys building creative products.
                            Currenlty working on Blockchain and Web3.
                        </p>
                    </div>

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

                <div className="mt-10 md:mt-5 mx-auto">
                    <img
                        src="/Me.jpg"
                        className="mb-20 h-96 w-80 rounded-2xl border-2 border-gray-400 dark:border-gray-700 p-3"
                    />
                </div>
            </div>
        </div>
    )
}
