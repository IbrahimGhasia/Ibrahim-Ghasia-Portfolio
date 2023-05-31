import Button from "../Button";
import PageTransition from "../PageTransition";

export default function Index() {
	return (
		<PageTransition>
			<div className="flex flex-col justify-center h-screen -mt-20">
				<p className="text-md md:text-xl tracking-widest text-emerald-400">
					Hi, my name is
				</p>
				<h1 className="mt-5 text-3xl md:text-7xl font-bold text-white tracking-widest">
					Ibrahim Ghasia.
				</h1>
				<h1 className="mt-1 text-3xl md:text-7xl font-bold text-gray-300 tracking-widest">
					I{"'"}m a Full Stack Developer.
				</h1>
				<p className="mt-5 text-md md:text-xl text-gray-300 md:mt-10 md:mr-96 md:text-justify">
					I{"'"}m a software developer. I have a passion for creating
					unique and innovative products that push boundaries. My
					current focus is on the Blockchain and Web3 space, where I
					enjoy building decentralized applications that offer new and
					exciting possibilities for users.
				</p>
				<div className="mt-10 hidden md:block">
					<Button text="About Me" link={"/about"} />
				</div>
			</div>
		</PageTransition>
	);
}
