import PageTransition from "../PageTransition";
import VerticalTabs from "../VerticalTabs";

export default function Experience() {
	return (
		<PageTransition>
			<div className="flex flex-col justify-center h-screen -mt-20">
				<div className="flex items-center">
					<p className="text-gray-300 text-2xl md:text-3xl font-semibold">
						<span className="text-emerald-400 mr-2">02.</span>
						Where I{"'"}ve Worked
					</p>
					<hr className="ml-5 md:ml-10 border-gray-300 w-32 md:w-96" />
				</div>
				<div className="mt-10">
					<VerticalTabs />
				</div>
			</div>
		</PageTransition>
	);
}
