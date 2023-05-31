import PageTransition from "../PageTransition";
import ProjectCard from "../ProjectCard";

const projects = [
	{
		title: "dUni (Decentralized University)",
		description:
			"dUni is a platform that allows users to create universities, courses, and conduct live classes without intermediaries, along with providing License NFT Degrees.",
		image: "/dUni.webp",
		technologies: [
			"Solidity",
			"Typescript",
			"NextJs",
			"Mantine UI",
			"IPFS",
			"Livepeer",
			"Valist",
		],
		reverse: false,
	},

	{
		title: "dClinic (Decentralized Clinic)",
		description:
			"dClinic is a decentralized healthcare platform that enables secure and convenient online meetings and transactions between patients and doctors.",
		image: "/dClinic.webp",
		technologies: [
			"Solidity",
			"Typescript",
			"NextJs",
			"Mantine UI",
			"Superfluid",
			"Push",
			"Huddle01",
			"The Graph",
		],
		reverse: true,
	},

	{
		title: "CheckInn.com",
		description:
			"CheckInn.com is a comprehensive platform that offers its users a user-friendly and aesthetically pleasing design. With its advanced features, detailed hotel information, and responsive design, CheckInn.com provides a seamless and satisfying experience for users throughout the hotel booking process. CheckInn.com also prioritizes easy user onboarding. The platform offers a simple and intuitive sign-up process, allowing users to quickly create an account and begin booking hotels. ",
		image: "/CheckInn.webp",
		technologies: [
			"React Js",
			"MongoDB",
			"Node Js",
			"Express Js",
			"Tailwind CSS",
		],
		reverse: false,
	},
];

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
			</div>
		</PageTransition>
	);
}
