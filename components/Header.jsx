import { Fragment, useEffect, useState } from "react"
import Link from "next/link"

const Header = () => {
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
        <Fragment>
            <nav>
                <div className="grid ml-5 grid-cols-2 md:flex md:justify-end gap-3 md:gap-7 text-lg py-5">
                    <div className="md:absolute left-0 md:ml-16 text-left">
                        <Link href="/">
                            <a className="group dark:text-white">
                                <span className="text-xl font-semibold">Ibrahim Ghasia</span> <br />
                                <span className="text-lg">Devloper</span>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/about">
                            <a className="text-lg font-semibold group dark:text-white hover:text-pink_ dark:hover:text-pink_ transition-all duration-500">
                                About
                                <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-pink_"></span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/project">
                            <a className="text-lg font-semibold group dark:text-white hover:text-green_ dark:hover:text-green_ transition-all duration-500">
                                Project
                                <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-green_"></span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/">
                            <a className="text-lg font-semibold group dark:text-white hover:text-skyblue_ dark:hover:text-skyblue_ transition-all duration-500">
                                Experience
                                <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-skyblue_"></span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/certificate">
                            <a className="text-lg font-semibold group dark:text-white hover:text-darkblue_ dark:hover:text-darkblue_ transition-all duration-500">
                                Certificates
                                <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-darkblue_"></span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/contact">
                            <a className="text-lg font-semibold group dark:text-white hover:text-yellow_ dark:hover:text-yellow_ transition-all duration-500">
                                Contact
                                <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-yellow_"></span>
                            </a>
                        </Link>
                    </div>

                    <div className="float-right mr-5 mt-0">
                        {/* <span
                            className="w-10 h-10 rounded-full shadow-lg cursor-pointer flex items-center justify-center dark:text-white"
                            onClick={() => {
                                theme === "dark" ? setTheme("light") : setTheme("dark")
                            }}
                        >
                            {theme === "dark" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                </svg>
                            )}
                        </span> */}
                        <label
                            for="red-toggle"
                            class="inline-flex relative items-center mr-5 cursor-pointer"
                        >
                            <input type="checkbox" value="" id="red-toggle" class="sr-only peer" />
                            <div
                                class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"
                                onClick={() => {
                                    theme === "dark" ? setTheme("light") : setTheme("dark")
                                }}
                            ></div>
                        </label>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Header
