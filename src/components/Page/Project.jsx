import OtherProjectCard from "../OtherProjectCard";
import PageTransition from "../PageTransition";
import ProjectCard from "../ProjectCard";
import projects from "../../../utils/projects";
import otherProjects from "../../../utils/otherProjects";

export default function Project() {
	return (
		<PageTransition>
			<div className="flex flex-col justify-center mt-20 pb-10">
				<div className="flex items-center">
					<p className="text-gray-300 text-3xl font-semibold">
						<span className="text-emerald-400 mr-2">03.</span>
						Something{"'"}s that I{"'"}ve Built
					</p>
					<hr className="md:ml-10 border-gray-300 w-32 md:w-96" />
				</div>
				<div className="mt-10">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>

				<div className="md:mt-20 md:mx-20">
					<h1 className="text-gray-300 text-center text-2xl md:text-3xl font-semibold mb-10">
						Other Noteworthy Projects
					</h1>
					<div className="grid md:grid-cols-3 gap-x-3 gap-y-5">
						{otherProjects.map((project, index) => (
							<OtherProjectCard key={index} project={project} />
						))}
					</div>
				</div>
			</div>
		</PageTransition>
	);
}
