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
                    <p className="mt-5 md:ml-5 text-lg md:text-3xl pr-10 dark:text-white leading-normal text-semibold">
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
                            You can send me a mail for any help / enquiry at
                            <span className="transitaion-all duration-500 hover:text-skyblue_ cursor-pointer">
                                &nbsp;ibrahim.ghasia@gmail.com
                            </span>
                        </p>

                        <h3 className="text-2xl md:text-3xl dark:text-white font-semibold mt-10">
                            Job Opportunites
                        </h3>

                        <p className="text-md md:text-xl dark:text-white mt-5 md:mt-10">
                            I am looking for an internship, if you feel that I am a right fit for
                            you, I would love to work with you. You can find my CV
                            <span className="transitaion-all duration-500 hover:text-skyblue_ cursor-pointer">
                                <a href="https://drive.google.com/file/d/1IrsxIUAmpyhsEDpWNwbxUNUpSJ9tqgX5/view?usp=sharing">
                                    &nbsp;here
                                </a>
                            </span>
                        </p>

                        <h3 className="text-2xl md:text-3xl dark:text-white font-semibold mt-10">
                            Socials
                        </h3>

                        <div className="grid grid-cols-4 md:grid-cols-5 mt-10 mr-5 md:mr-0">
                            <a href="https://twitter.com/IbrahimGhasia">
                                <img src="/Twitter-Logo.wine.svg" />
                            </a>
                            <a href="https://www.linkedin.com/in/ibrahim-ghasia/">
                                <img src="/LinkedIn-Icon-Logo.wine.svg" />
                            </a>
                            <a href="https://www.instagram.com/ibrahim.ghasia/">
                                <img src="/Instagram-Glyph-Color-Logo.wine.svg" />
                            </a>
                            <a href="https://github.com/IbrahimGhasia">
                                <img src="/GitHub-Logo.wine.svg" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-lg md:text-2xl mx-4 mt-10  md:mx-10 dark:text-white">
                            Hi there, I am a Third year Computer Engineering student at Sarvajaik
                            College of Engineering and Technology, Surat. I am currenlty Blockchain
                            Lead member of Google Developer Student Club, SCET. I enjoy listing to
                            music. I am also realy interested in planes. My dream is to fly a plane
                            one day. ??????
                        </p>

                        <div>
                            <h2 className="text-2xl md:text-4xl text-white dark:text-white font-semibold mt-10 ml-5 md:ml-10">
                                <span className="bg-pink_ dark:bg-skyblue_ rounded-lg px-5">
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
