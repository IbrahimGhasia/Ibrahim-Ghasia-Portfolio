// import { motion } from "framer-motion";

export default function Dot() {
	return (
		<div className="flex flex-col items-center my-5">
			<span className="border-l h-12 border-gray-300"></span>
			{/* <motion.div
				className="h-4 w-4 bg-emerald-400 rounded-full"
				animate={{
					scale: [1, 1.5, 1], // Animation values for scale property
				}}
				transition={{
					duration: 0.5, // Duration of each animation cycle
					repeat: Infinity, // Number of times to repeat the animation (infinite)
					repeatType: "loop", // Type of repeat animation
				}}
			></motion.div> */}
			<span className="border-l h-12 border-gray-300"></span>
		</div>
	);
}
