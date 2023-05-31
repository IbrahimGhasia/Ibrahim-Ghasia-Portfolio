/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ text, link }) {
	return (
		<Link to={link}>
			<div className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
				<span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-emerald-400 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
				<span className="absolute inset-0 w-full h-full bg-sky-950 rounded-md "></span>
				<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-emerald-400 rounded-md opacity-0 group-hover:opacity-100 "></span>
				<span className="relative text-emerald-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
					{text}
				</span>
			</div>
		</Link>
	);
}
