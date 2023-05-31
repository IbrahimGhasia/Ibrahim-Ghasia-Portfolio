import PageTransition from "../PageTransition";

import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube,
} from "@tabler/icons-react";

export default function Contact() {
	return (
		<PageTransition>
			<div className="flex flex-col h-screen justify-center items-center md:-mt-20">
				<p className="text-gray-300 text-md md:text-xl text-center font-semibold">
					<span className="text-emerald-400 mr-2">05.</span>
					What{"'"}s Next?
				</p>
				<h1 className="mt-5 text-4xl md:text-7xl text-center text-gray-300 font-bold tracking-widest">
					Get In Touch
				</h1>
				<p className="text-md md:text-xl mt-5 text-gray-400 md:px-64 text-center tracking-widest">
					I{"'"}m looking for any new opportunities, my inbox is
					always open. Whether you have a question or just want to say
					hi, I{"'"}ll try my best to get back to you!
				</p>

				<button className="mt-5 border text-lg border-gray-300 p-5 rounded-md text-gray-300 hover:text-emerald-400 hover:border-emerald-400 hover:border-b-8 hover:border-l-4 hover:shadow-lg hover:shadow-sky-900 duration-300">
					Say Hello
				</button>

				<div className="md:hidden mt-10">
					<div className="flex gap-x-5 justify-center items-center">
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
					</div>

					<p className="mt-5 text-emerald-400 border-b text-md tracking-widest">
						ibrahim.ghasia@gmail.com
					</p>
				</div>
			</div>
		</PageTransition>
	);
}
