import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"

const Navigation = () => {
    const [navbar, setNavbar] = useState(false)
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        const root = window.document.documentElement
        if (theme === "dark") {
            root.classList.remove("light")
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
            root.classList.add("light")
        }
    }, [theme])
    return (
        <div>
            <nav className="w-full bg-white dark:bg-gray-800">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <a className="group dark:text-white">
                                    <span className="text-xl md:text-2xl font-semibold duration-500 md:hover:text-3xl hover:text-pink_">
                                        Ibrahim Ghasia
                                    </span>
                                    <br />
                                    <span className="text-lg">Devloper</span>
                                </a>
                            </Link>

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-800 dark:text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-800 dark:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                                <li>
                                    <Link href="/about">
                                        <a
                                            onClick={() => setNavbar(!navbar)}
                                            className="text-lg md:text-xl font-semibold group dark:text-white hover:text-pink_ dark:hover:text-pink_ transition-all duration-500"
                                        >
                                            About
                                            <span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-pink_"></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/project">
                                        <a
                                            onClick={() => setNavbar(!navbar)}
                                            className="text-lg md:text-xl font-semibold group dark:text-white hover:text-green_ dark:hover:text-green_ transition-all duration-500"
                                        >
                                            Project
                                            <span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-green_"></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/experience">
                                        <a
                                            onClick={() => setNavbar(!navbar)}
                                            className="text-lg md:text-xl font-semibold group dark:text-white hover:text-skyblue_ dark:hover:text-skyblue_ transition-all duration-500"
                                        >
                                            Experience
                                            <span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-skyblue_"></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/certificate">
                                        <a
                                            onClick={() => setNavbar(!navbar)}
                                            className="text-lg md:text-xl font-semibold group dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-all duration-500"
                                        >
                                            Certificates
                                            <span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-orange-500"></span>
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a
                                            onClick={() => setNavbar(!navbar)}
                                            className="text-lg md:text-xl font-semibold group dark:text-white hover:text-yellow_ dark:hover:text-yellow_ transition-all duration-500"
                                        >
                                            Contact
                                            <span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-yellow_"></span>
                                        </a>
                                    </Link>
                                </li>
                                {/* <div className="float-right mt-0"> */}
                                <li className="md:mr-40">
                                    <label
                                        htmlFor="red-toggle"
                                        className="inline-flex relative items-center mr-5 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="red-toggle"
                                            className="sr-only peer"
                                        />
                                        <div
                                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"
                                            onClick={() => {
                                                theme === "dark"
                                                    ? setTheme("light")
                                                    : setTheme("dark")
                                            }}
                                        ></div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation
