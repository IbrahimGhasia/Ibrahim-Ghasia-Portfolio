/* eslint-disable react/prop-types */
import { IconBrandGithub, IconFolder, IconLogin } from "@tabler/icons-react";

export default function OtherProjectCard({ project }) {
	return (
		<div className="bg-sky-950 hover:translate-y-2 duration-300 p-5 rounded-lg h-72 md:h-80">
			<div className="flex justify-between items-center">
				<IconFolder className="text-emerald-400" size={54} />
				<div className="flex gap-2">
					{project.demo && (
						<a href={project.demo} target="_blank" rel="noreferrer">
							<IconLogin
								className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300 cursor-pointer"
								size={28}
							/>
						</a>
					)}
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
						>
							<IconBrandGithub
								className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300 cursor-pointer"
								size={28}
							/>
						</a>
					)}
				</div>
			</div>

			<h3 className="text-gray-200 font-semibold text-lg md:text-2xl mt-3 md:mt-5 hover:text-emerald-400 duration-300 cursor-pointer">
				{project.title}
			</h3>

			<p className="text-gray-300 text-xs md:text-sm mt-3">
				{project.description}
			</p>

			<div className="flex flex-wrap gap-2 mt-3">
				{project.technologies.map((technology, index) => (
					<p key={index} className="text-gray-400 text-sm">
						{technology}
					</p>
				))}
			</div>
		</div>
	);
}
