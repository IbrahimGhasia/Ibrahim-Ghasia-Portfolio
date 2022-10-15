import { Fragment } from "react"

const Card = (props) => {
    return (
        <Fragment className="">
            <figure className="relative max-w-2xl mx-5 mb-10 cursor-pointer filter duration-500 border-0 rounded-2xl hover:border-gray-400 hover:shadow-2xl dark:hover:border-white hover:translate-y-3">
                <a href={props.link}>
                    <img className="rounded-lg " src={props.img_source} alt="image description" />
                </a>
                <span className="absolute bottom-6 ml-2 md:ml-4 px-4 md:text-3xl text-white font-bold bg-pink_ border-0 rounded-2xl">
                    <p>{props.title}</p>
                </span>
            </figure>
        </Fragment>
    )
}
export default Card
