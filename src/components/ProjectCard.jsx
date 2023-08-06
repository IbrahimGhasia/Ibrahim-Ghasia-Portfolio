import { IconBrandGithub, IconLogin } from "@tabler/icons-react";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
	return (
		<div
			className={`grid md:flex ${
				project.reverse ? "flex-row-reverse" : "flex-row"
			}
			} gap-10 items-center mb-10`}
		>
			<div className="group">
				<img
					className="h-auto max-w-xs pr-10 md:pr-0 md:max-w-xl transition-all duration-500 rounded-lg cursor-pointer filter md:grayscale md:hover:grayscale-0"
					src={project.image}
					alt="image description"
				/>
			</div>
			<div
				className={`pr-10 md:pr-0 ${
					project.reverse ? "text-left" : "text-right"
				} `}
			>
				<h5 className="text-md md:text-lg text-emerald-400">
					Featured Project
				</h5>
				<h3 className="text-gray-300 text-xl md:text-4xl font-semibold">
					{project.title}
				</h3>
				<p className="bg-sky-950 text-sm md:text-lg rounded-lg p-5 mt-3 text-gray-300">
					{project.description}
				</p>
				<ul
					className={`flex flex-wrap gap-x-5 mt-3 text-emerald-400 text-sm md:text-md ${
						project.reverse ? "justify-start" : "justify-end"
					}`}
				>
					{project.technologies.map((technology, index) => (
						<li key={index} className="md:text-lg cursor-pointer">
							{technology}
						</li>
					))}
				</ul>
				<ul
					className={`mt-2 flex flex-wrap gap-5
                    ${project.reverse ? "justify-start" : "justify-end"}`}
				>
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
						>
							<IconBrandGithub
								className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 cursor-pointer duration-300"
								size={28}
							/>
						</a>
					)}

					{project.demo && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
						>
							<IconLogin
								className="text-gray-300  hover:text-emerald-400 hover:translate-y-1 cursor-pointer duration-300"
								size={28}
							/>
						</a>
					)}
				</ul>
			</div>
		</div>
	);
}
