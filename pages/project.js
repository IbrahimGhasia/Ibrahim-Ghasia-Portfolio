import Card from "../components/UI/Card"
import { Typewriter } from "react-simple-typewriter"

export default function Home() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <div className="ml-5 md:ml-20 md:mt-20">
                <div className="text-green_ text-5xl p-10 md:text-9xl font-semibold transition-all duration-300">
                    <Typewriter
                        words={["Projects. "]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={2000}
                    />
                </div>
            </div>

            {/* <hr class="my-8 h-1 bg-gray-300 border-0 dark:bg-gray-700"></hr> */}

            <div className="grid md:grid-cols-2 mx-10 place-items-center md:mt-10 pb-10">
                <Card
                    title="Protecc"
                    img_source="/protecc.webp"
                    link="https://protecc-two.vercel.app/"
                />
                <Card
                    title="RentHouse"
                    img_source="/renthouse.webp"
                    link="https://decentralized-renting-house.vercel.app/"
                />
                <Card
                    title="Decentralized Lottery"
                    img_source="/lottery.webp"
                    link="https://wispy-snow-6604.on.fleek.co/"
                />
                <Card
                    title="Z.A.Engineers"
                    img_source="/ZA.webp"
                    link="https://za-engineering.vercel.app/"
                />
            </div>
        </div>
    )
}
