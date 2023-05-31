/* eslint-disable react/prop-types */
import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="px-10 md:px-40">{children}</div>
		</>
	);
}
