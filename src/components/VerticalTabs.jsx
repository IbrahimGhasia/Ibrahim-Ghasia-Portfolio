import { useState } from "react";

const VerticalTabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<div className="flex items-center">
			<div className="md:w-1/4 bg-[#0a192f]">
				<nav>
					<ul>
						<li
							className={`p-2 rounded-r-2xl cursor-pointer hover:bg-sky-950 hover:text-emerald-400 border-l-2 ${
								activeTab === 1
									? "bg-sky-950 text-emerald-400 border-l-2 border-emerald-400 duration-300"
									: "text-gray-300"
							}`}
							onClick={() => handleTabClick(1)}
						>
							<a
								className="text-sm md:text-md font-semibold"
								href="#tab1"
							>
								Frontend Developer Intern
							</a>
						</li>

						<li
							className={`p-2 rounded-r-2xl cursor-pointer hover:bg-sky-950 hover:text-emerald-400 border-l-2 ${
								activeTab === 2
									? "bg-sky-950 text-emerald-400 border-l-2 border-emerald-400 duration-300"
									: "text-gray-300"
							}`}
							onClick={() => handleTabClick(2)}
						>
							<a
								className="text-sm md:text-md font-semibold"
								href="#tab2"
							>
								Blockchain Lead
							</a>
						</li>
						<li
							className={`p-2 rounded-r-2xl cursor-pointer hover:bg-sky-950 hover:text-emerald-400 border-l-2 ${
								activeTab === 3
									? "bg-sky-950 text-emerald-400 border-l-2 border-emerald-400 duration-300"
									: "text-gray-300"
							}`}
							onClick={() => handleTabClick(3)}
						>
							<a
								className="text-sm md:text-md font-semibold"
								href="#tab3"
							>
								Outgoing Global Volunteer
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="ml-2 md:ml-10 md:w-3/4 bg-sky-950 rounded-2xl p-5">
				<div className="p-2">
					{activeTab === 1 && (
						<div id="tab1">
							<h2 className="text-lg md:text-2xl text-gray-300 font-semibold">
								Frontend Developer Intern{" "}
								<span className="text-emerald-400">
									@PESU Venture Labs, Remote
								</span>
							</h2>
							<h3 className="text-sm text-gray-300">
								July 2023 – present
							</h3>
							<p className="mt-5 text-sm md:text-lg md:text-justify text-gray-300">
								As a frontend developer intern at PESU I worked
								with startup ZERU in which I have been actively
								involved in designing and implementing
								cutting-edge components for our product using
								the latest technologies. Leveraging React and
								Redux, I have played a significant role in
								crafting intuitive and user-friendly interfaces,
								ensuring seamless user experiences.
								Additionally, I have skillfully utilized the Ant
								Design (antd) component library to expedite
								development while maintaining a consistent and
								visually appealing design language across the
								application.
								<br />
								<br />
								Furthermore, I had the opportunity to work on a
								captivating landing page for our product, where
								I integrated 3D libraries like Three.js to
								create captivating visual elements.
								Collaborating with the team, I combined React
								and Tailwind CSS to achieve a highly responsive
								and interactive landing page that leaves a
								lasting impression on visitors.
							</p>
						</div>
					)}
					{activeTab === 2 && (
						<div id="tab2">
							<h2 className="text-lg md:text-2xl text-gray-300 font-semibold">
								Blockchain Lead{" "}
								<span className="text-emerald-400">
									@GDSC, SCET
								</span>
							</h2>
							<h3 className="text-sm text-gray-300">
								August 2022 – April 2023
							</h3>
							<p className="mt-5 text-sm md:text-lg md:text-justify text-gray-300">
								Coordinated and managed technical events in
								college with a focus on creating engaging and
								informative experiences for attendees. Designed
								and hosted events focused on blockchain
								technology, providing insights on distributed
								ledger technology, smart contracts, and
								cryptocurrency.
							</p>
						</div>
					)}
					{activeTab === 3 && (
						<div id="tab3">
							<h2 className="text-lg md:text-2xl text-gray-300 font-semibold">
								Outgoing Global Volunteer{" "}
								<span className="text-emerald-400">
									@AIESEC, Surat
								</span>
							</h2>
							<h3 className="text-sm text-gray-300">
								January – August 2022
							</h3>
							<p className="mt-5 text-sm md:text-lg md:text-justify text-gray-300">
								Inspired and motivated students to engage in
								impactful volunteer work abroad, fostering a
								sense of global citizenship and cultural
								exchange. Collaborated with AIESEC entities
								abroad through International Relations (IR)
								calls.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default VerticalTabs;
