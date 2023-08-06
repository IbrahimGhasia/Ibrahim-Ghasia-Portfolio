import AboutMe from "./components/Page/AboutMe";
import Index from "./components/Page/Index";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router-dom";
import Experience from "./components/Page/Experience";
import Project from "./components/Page/Project";
import Certificate from "./components/Page/Certificate";
import Contact from "./components/Page/Contact";

function App() {
	return (
		<div className="bg-[#0a192f]">
			<Layout>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/project" element={<Project />} />
					<Route path="/certificate" element={<Certificate />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
