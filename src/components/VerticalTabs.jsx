import { useState } from "react";

const VerticalTabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<div className="flex items-center">
			<div className="md:w-1/4 bg-sky-950">
				<nav>
					<ul>
						<li
							className={`p-2 cursor-pointer hover:bg-sky-900 hover:text-emerald-400 border-l-2 ${
								activeTab === 1
									? "bg-sky-900 text-emerald-400 border-l-2 border-emerald-400 duration-300"
									: "text-gray-300"
							}`}
							onClick={() => handleTabClick(1)}
						>
							<a
								className="text-sm md:text-md font-semibold"
								href="#tab1"
							>
								Blockchain Lead
							</a>
						</li>
						<li
							className={`p-2 cursor-pointer hover:bg-sky-900 hover:text-emerald-400 border-l-2 ${
								activeTab === 2
									? "bg-sky-900 text-emerald-400 border-l-2 border-emerald-400 duration-300"
									: "text-gray-300"
							}`}
							onClick={() => handleTabClick(2)}
						>
							<a
								className="text-sm md:text-md font-semibold"
								href="#tab2"
							>
								Outgoing Global Volunteer
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="ml-2 md:ml-10 md:w-3/4 bg-sky-950">
				<div className="p-2">
					{activeTab === 1 && (
						<div id="tab1">
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
					{activeTab === 2 && (
						<div id="tab2">
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
