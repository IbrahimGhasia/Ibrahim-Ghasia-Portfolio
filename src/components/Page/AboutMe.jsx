import PageTransition from "../PageTransition";

export default function AboutMe() {
	const skills = [
		"Solidity",
		"JavaScript",
		"TypeScript",
		"Go Lang",
		"Java",
		"MySQL",
		"MongoDB",
		"React.js",
		"Next.js",
		"Node.js",
		"Hardhat",
	];

	return (
		<PageTransition>
			<div className="flex flex-col justify-center md:h-screen mt-20">
				<div className="flex items-center">
					<p className="text-gray-300 text-2xl md:text-3xl font-semibold">
						<span className="text-emerald-400 mr-2">01.</span>About
						Me
					</p>
					<hr className="ml-5 md:ml-10 border-gray-300 w-24 md:w-96" />
				</div>

				<div className="mt-10 grid md:grid-cols-2 gap-5">
					<div>
						<p className="text-sm md:text-lg text-justify text-gray-300">
							I am a passionate software developer with a diverse
							skill set. I am interested in Blockchain and Web3
							development, I also have a strong background in web
							development. I am proficient in various web
							technologies and frameworks, allowing me to create
							dynamic and engaging user experiences. Additionally,
							I am constantly expanding my knowledge and honing my
							skills. I am currently learning the Go programming
							language. My dedication to continuous learning and
							innovation drives me to stay at the forefront of
							technology and deliver exceptional results. When I
							{"'"}m not coding, you can find me indulging in my
							love for music or spending time watching airplane
							videos. I am driven by curiosity and a desire to
							create meaningful solutions that make a positive
							impact.
						</p>

						<h4 className="text-lg md:text-2xl mt-5 text-gray-300">
							Skills
						</h4>
						<hr className="border-gray-300 w-full" />
						<div className="mt-3 md:mr-32">
							<ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{skills.map((skill, index) => (
									<li
										key={index}
										className="flex items-center gap-2 text-gray-300 text-sm md:text-md cursor-pointer"
									>
										<img
											src="right-arrow.svg"
											className="h-6 w-6"
										/>
										{skill}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="flex justify-center mb-10">
						<img
							className="h-96 max-w-lg transition-all duration-500 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 hover:border-b-8 hover:border-r-8 hover:border-emerald-400 hover:p-3"
							src="/Myself-2.jpeg"
							alt="image description"
						/>
					</div>
				</div>
			</div>
		</PageTransition>
	);
}
