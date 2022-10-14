import { Fragment } from "react"
import Card from "../components/UI/Card"

export default function Home() {
    return (
        <Fragment>
            <div className="ml-20 mt-20">
                <h1 className="text-7xl font-semibold group text-skyblue_ dark:text-yellow_ hover:text-darkblue_ dark:hover:text-green_ transition-all duration-300">
                    Projects - ⚒️
                    <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-2 bg-skyblue_ dark:bg-yellow_"></span>
                </h1>
            </div>

            <div className="grid grid-cols-3 ml-20 pb-10">
                <Card title="Protecc" />
                <Card title="RentHouse" />
                <Card title="Decentralized Lottery" />
                <Card title="NFT-Marketplace" />
                <Card title="Where should you travel next?" />
            </div>
        </Fragment>
    )
}
