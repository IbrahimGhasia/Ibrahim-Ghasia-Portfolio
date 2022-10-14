import { Fragment } from "react"

const Card = (props) => {
    return (
        <Fragment className="">
            <figure className="relative max-w-2xl mx-5 mb-10 transition-all duration-300 cursor-pointer filter p-3 hover:p-2 hover:rounded-2xl">
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
