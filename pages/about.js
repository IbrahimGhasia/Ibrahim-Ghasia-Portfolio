import { Typewriter } from "react-simple-typewriter"
import Footer from "../components/Footer"
export default function Home() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <div className="ml-5 md:ml-20 md:mt-20">
                <div className="text-pink_ pt-10 text-5xl md:text-9xl font-semibold transition-all duration-300">
                    <Typewriter
                        words={["About Me. "]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={2000}
                    />
                </div>

                <div>
                    <p className="mt-5 md:ml-5 text-lg md:text-4xl pr-10 dark:text-white leading-normal text-semibold">
                        I'm a software developer that loves building creative products. Currenlty
                        working on Blockchain and Web3
                    </p>
                </div>

                <div className="grid md:grid-cols-10 md:gap-4 mt-8 md:mt-16 pb-20">
                    <div className="col-span-3">
                        <h3 className="text-2xl md:text-3xl dark:text-white font-semibold">
                            Contact
                        </h3>
                        <p className="text-md md:text-xl dark:text-white mt-5 md:mt-10">
                            You can send me a mail for any help / enquiry
                            <span className="transitaion-all duration-500 hover:text-3xl cursor-pointer">
                                <a> here</a>
                            </span>
                        </p>

                        <h3 className="text-2xl md:text-3xl dark:text-white font-semibold mt-10">
                            Job Opportunites
                        </h3>

                        <p className="text-md md:text-xl dark:text-white mt-5 md:mt-10">
                            I am looking for an internship, if you feel that I am a right fit for
                            you, I would love to work with you. You can find my CV
                            <span className="transitaion-all duration-500 hover:text-3xl cursor-pointer">
                                <a> here</a>
                            </span>
                        </p>

                        <h3 className="text-2xl md:text-3xl dark:text-white font-semibold mt-10">
                            Socials
                        </h3>
                        <ul className="mt-5 md:mt-10">
                            <li className="mt-5">
                                <a className="md:text-xl font-semibold dark:text-white cursor-pointer">
                                    - Instagram
                                </a>
                            </li>
                            <li className="mt-5">
                                <a className="md:text-xl font-semibold dark:text-white cursor-pointer">
                                    - LinkedIn
                                </a>
                            </li>
                            <li className="mt-5">
                                <a className="md:text-xl font-semibold dark:text-white cursor-pointer">
                                    - Github
                                </a>
                            </li>
                            <li className="mt-5">
                                <a className="md:text-xl font-semibold dark:text-white cursor-pointer">
                                    - Twitter
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-lg md:text-2xl mx-4 mt-10  md:mx-10 dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
                            erat eget ante bibendum fermentum. Integer consequat auctor eros at
                            rutrum. In sodales luctus porta. Nunc lobortis metus a ligula
                            condimentum posuere. Nullam id velit ullamcorper, vulputate enim a,
                            posuere nunc. Morbi aliquam lacinia magna, nec cursus lectus suscipit
                            id.
                        </p>

                        <div>
                            <h2 className="text-2xl md:text-4xl dark:text-white font-semibold mt-10 ml-5 md:ml-10">
                                <span className="bg-yellow_ dark:bg-skyblue_ rounded-lg px-5">
                                    Tech Stack
                                </span>
                            </h2>
                            <div className="grid grid-cols-3 md:grid-cols-6 mt-5 ml-2">
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Ethereum-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Solidity-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Java_Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Python_Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img
                                        src="/javascript-programming-language-icon.svg"
                                        className="h-16 mx-auto"
                                    ></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/html-icon.svg" className="h-16 mx-auto"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Node.js-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/GitHub-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/React_(web_framework)-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/nextjs-2.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/MongoDB-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img src="/Bootstrap_(front-end_framework)-Logo.wine.svg"></img>
                                </div>
                                <div className="mt-5 ml-2 duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl">
                                    <img
                                        src="/tailwind-css-icon.svg"
                                        className="h-12 mx-auto"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
