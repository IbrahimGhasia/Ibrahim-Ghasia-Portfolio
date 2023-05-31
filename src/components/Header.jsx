import { Link } from "react-router-dom";
import Button from "./Button";
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube,
	IconList,
	IconX,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Header() {
	const navLinks = [
		{
			label: "About",
			path: "/about",
			index: "01. ",
		},
		{
			label: "Experience",
			path: "/experience",
			index: "02. ",
		},
		{
			label: "Project",
			path: "/project",
			index: "03. ",
		},
		{
			label: "Certificate",
			path: "/certificate",
			index: "04. ",
		},
		{
			label: "Contact",
			path: "/contact",
			index: "05. ",
		},
	];

	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="md:sticky top-0">
			<div className="py-5 px-10 flex justify-between items-center">
				<Button text={"IB."} link={"/"} />
				<div>
					<ul className=" md:flex hidden items-center gap-5 text-gray-200 text-sm">
						{navLinks.map((link, index) => (
							<Link to={link.path} key={index}>
								<li className="cursor-pointer hover:text-emerald-400 duration-300">
									<span className="text-emerald-400 mr-1">
										{link.index}
									</span>
									{link.label}
								</li>
							</Link>
						))}
						<button className="border border-emerald-400 p-2 rounded-md hover:text-emerald-400 hover:border-b-4 hover:border-r-4 duration-300">
							Resume
						</button>
					</ul>
				</div>
				<div className="lg:hidden">
					<button onClick={() => setOpenModal(!openModal)}>
						{openModal ? (
							<IconX className="text-gray-300" size={32} />
						) : (
							<IconList className="text-gray-300" size={32} />
						)}
					</button>
					{openModal && (
						<div className="absolute border-t-2 border-l-2 border-b-2 border-emerald-300 w-72 rounded-l-2xl top-24 right-0 bg-sky-900">
							<ul className="mx-16 h-full my-20 text-center text-gray-200 text-lg">
								{navLinks.map((link, index) => (
									<Link to={link.path} key={index}>
										<div
											className="my-10"
											onClick={() =>
												setOpenModal(!openModal)
											}
										>
											<span className="text-emerald-400">
												{link.index}
											</span>
											<li className="cursor-pointer hover:text-emerald-400 duration-300">
												{link.label}
											</li>
										</div>
									</Link>
								))}
								<button className="border border-emerald-400 p-2 rounded-md hover:text-emerald-400 hover:border-b-4 hover:border-r-4 duration-300">
									Resume
								</button>
							</ul>
						</div>
					)}
				</div>
			</div>

			<div className="hidden md:block fixed md:top-48 left-2 md:left-10 h-screen">
				<div className="flex flex-col gap-y-5 space-y-4 justify-center items-center">
					<div className="border-l h-20 border-gray-300"></div>
					<a href="#home">
						<IconBrandGithub
							className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300"
							size={32}
						/>
					</a>
					<a href="#home">
						<IconBrandLinkedin
							className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300"
							size={32}
						/>
					</a>
					<a href="#home">
						<IconBrandTwitter
							className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300"
							size={32}
						/>
					</a>
					<a href="#home">
						<IconBrandInstagram
							className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300"
							size={32}
						/>
					</a>
					<a href="#home">
						<IconBrandYoutube
							className="text-gray-300 hover:text-emerald-400 hover:translate-y-1 duration-300"
							size={32}
						/>
					</a>
					<div className="border-l h-20 border-gray-300"></div>
				</div>
			</div>

			<div className="hidden md:block fixed top-96 mt-32 right-0 h-screen">
				<div className="flex flex-col gap-y-5 space-y-4 justify-center items-center">
					<p className="rotate-90 text-lg text-gray-300 hover:text-emerald-400 duration-300 mb-20 cursor-pointer">
						ibrahim.ghasia@gmail.com
					</p>
					<div className="border-l h-96 border-gray-300"></div>
				</div>
			</div>
		</div>
	);
}
