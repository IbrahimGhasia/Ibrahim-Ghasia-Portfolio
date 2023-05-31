/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
	const pageVariants = {
		initial: {
			opacity: 0,
			scale: 0.8,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
		exit: {
			opacity: 0,
			scale: 1.2,
		},
	};

	const pageTransition = {
		type: "tween",
		ease: "easeInOut",
		duration: 0.7,
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
}
