import { Fragment } from "react"

const Card = (props) => {
    return (
        <Fragment>
            <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 transitaion-all duration-500 hover:p-5 mt-10 ease-out">
                <a href="#">
                    <img
                        class="rounded-t-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src="https://images.unsplash.com/photo-1664997430789-b32d7653ff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt={props.title}
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {props.title}
                        </h5>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
export default Card
