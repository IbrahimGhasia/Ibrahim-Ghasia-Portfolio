import OtherProjectCard from "../OtherProjectCard";
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

const otherProjects = [
	{
		title: "GO Bookstore",
		description:
			"This project aims to provide a simple and efficient way to manage a Book store, allowing you to add, update, delete, and view Books using a RESTful API.",
		technologies: ["Go Lang", "MySQL", "Gorilla Mux"],
		github: "https://github.com/IbrahimGhasia/GO-Bookstore",
		demo: "",
	},
	{
		title: "GO Movies",
		description:
			"This project is a CRUD backend for movies written in Go language. It provides endpoints to add, update, delete, and view all movies.",
		technologies: ["Go Lang", "MySQL", "Gorilla Mux"],
		github: "https://github.com/IbrahimGhasia/Go-Movies",
		demo: "",
	},
	{
		title: "Postify",
		description:
			"It is a simple web API that allows users to register and create posts.",
		technologies: ["Node Js", "Express Js", "MySQL"],
		github: "https://github.com/IbrahimGhasia/Postify-Web3Knights-Assignment",
		demo: "",
	},
	{
		title: "Data Structures and Algorithms",
		description:
			"This repository contains all the DSA problems I have solved.",
		technologies: ["Java"],
		github: "https://github.com/IbrahimGhasia/DSA",
		demo: "",
	},
	{
		title: "Dashboard 1",
		description:
			"A simple dashboard built using React Js and Tailwind CSS.",
		technologies: ["React Js", "Tailwind CSS"],
		github: "https://github.com/IbrahimGhasia/Web3Knights-Dashboard",
		demo: "https://web3-knights-dashboard.vercel.app/",
	},
	{
		title: "Dashboard 2",
		description:
			"A simple dashboard built using React Js and Tailwind CSS.",
		technologies: ["React Js", "Tailwind CSS"],
		github: "https://github.com/IbrahimGhasia/Web3Knights-Dashboard-2",
		demo: "https://web3-knights-dashboard-2.vercel.app/",
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
