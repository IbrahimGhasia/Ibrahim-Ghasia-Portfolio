/* eslint-disable react/prop-types */
import Dot from "./Dot";

export default function CertificateCard({ props }) {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col items-center">
				<img
					className="h-auto max-w-xs md:max-w-xl transition-all duration-500 rounded-lg cursor-pointer filter md:grayscale md:hover:grayscale-0"
					src={props.image}
					alt="image description"
				/>
				<h1 className="text-center text-emerald-400 mt-3 text-lg md:text-2xl">
					{props.name}
				</h1>
				<Dot />
			</div>
		</div>
	);
}
