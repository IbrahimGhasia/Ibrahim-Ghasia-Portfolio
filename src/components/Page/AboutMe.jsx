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
			<div className="flex flex-col justify-center md:h-screen md:-mt-20 mt-20">
				<div className="flex items-center">
					<p className="text-gray-300 text-3xl font-semibold">
						<span className="text-emerald-400 mr-2">01.</span>About
						Me
					</p>
					<hr className="ml-5 md:ml-10 border-gray-300 w-24 md:w-96" />
				</div>

				<div className="mt-10 grid md:grid-cols-2 gap-5">
					<div>
						<p className="text-md text-justify text-gray-300">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptas, reprehenderit! Obcaecati, ipsa.
							Eveniet, voluptas? Praesentium voluptatibus odio
							repellendus eveniet amet culpa tenetur fugiat! A
							voluptas fugiat provident excepturi sit laborum?
							Quaerat architecto dolor tenetur voluptas iusto
							tempora animi suscipit iste quae, sed debitis ea sit
							earum distinctio doloribus odio nulla! Impedit, qui
							optio? Officiis placeat harum aliquid consectetur
							molestiae illo! Eos illum, quam quas ducimus dolore
							nemo veritatis iste. Hic quia provident tempora
							sapiente beatae, exercitationem, iste illo maiores
							aliquam vel nisi non maxime. Dolore voluptate ab
							esse fuga officia? Alias molestias beatae in
							quibusdam sapiente.
						</p>

						<h4 className="text-2xl mt-5 text-gray-300">Skills</h4>
						<hr className="border-gray-300 w-full" />
						<div className="mt-3 md:mr-32">
							<ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{skills.map((skill, index) => (
									<li
										key={index}
										className="flex items-center gap-2 text-gray-300"
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
