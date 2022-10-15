import { Typewriter } from "react-simple-typewriter"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Home() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm("service_8m7e1t3", "template_bywufid", form.current, "H84r2UU6grECKKolA")
            .then(
                (result) => {
                    console.log(result.text)
                    console.log("Message Sent")
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <div className="ml-5 md:ml-20 md:mt-20">
                <div className="text-yellow_ text-5xl pt-10 md:text-9xl font-semibold transition-all duration-300">
                    <Typewriter
                        words={["Contact. "]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={2000}
                    />
                </div>

                <div className="grid md:grid-cols-2 pb-20">
                    <div className="mt-10 md:mt-20">
                        <h1 className="text-3xl md:text-5xl dark:text-green_ text-semibold">
                            Get in touch, lets talk.
                        </h1>
                        <p className="text-lg md:text-xl mt-3 dark:text-green_">
                            Fill in the details and I'll get back to you as soon as I can.
                        </p>

                        <div className="mt-10">
                            <p className="text-xl md:text-2xl dark:text-white border-0 shadow-2xl text-left p-2 rounded-2xl mt-5 duration-300 hover:ml-10">
                                📞 Phone - 8866685052
                            </p>

                            <p className="text-xl md:text-2xl dark:text-white border-0 shadow-2xl text-left p-2 rounded-2xl mt-5 duration-300 hover:ml-10">
                                ✉️ Email - ibrahim.ghasia@gmail.com
                            </p>

                            <p className="text-xl md:text-2xl dark:text-white border-0 shadow-2xl text-left p-2 rounded-2xl mt-5 duration-300 hover:ml-10">
                                📍 Location - Surat, India
                            </p>

                            <div className="grid grid-cols-5 md:grid-cols-10 mt-10 mr-5 md:mr-0 md:ml-10">
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
                                <a href="https://www.youtube.com/channel/UCSmj_8olZc2e1x6VihpTobA">
                                    <img src="/YouTube-Icon-Full-Color-Logo.wine.svg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="mx-auto">
                        <div className="mr-5 mt-20 border-0 rounded-2xl border-gray-300 p-5 md:p-10 shadow-2xl bg-gray-200 dark:bg-gray-300">
                            <div class="relative z-0 mt-3">
                                <input
                                    type="text"
                                    id="name"
                                    class="block py-2.5 px-0 w-72 md:w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    name="user_name"
                                />
                                <label
                                    for="name"
                                    class="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Name
                                </label>
                            </div>

                            <div class="relative z-0 mt-3">
                                <input
                                    type="email"
                                    id="email"
                                    class="block py-2.5 px-0 w-72 md:w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    name="user_email"
                                />
                                <label
                                    for="email"
                                    class="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>

                            <div className="mt-10">
                                <label
                                    for="message"
                                    class="block mb-2 text-sm text-gray-500 dark:text-gray-900"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    class="block p-2.5 w-72 md:w-96 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."
                                    name="message"
                                ></textarea>
                            </div>

                            <div className="mt-5 text-center">
                                <button
                                    type="submit"
                                    value="Send"
                                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                                >
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Send Mail
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
