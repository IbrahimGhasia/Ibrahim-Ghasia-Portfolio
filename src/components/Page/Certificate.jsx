import CertificateCard from "../CertificateCard";
import PageTransition from "../PageTransition";

export default function Certificate() {
	const certificates = [
		{
			name: "The Web Developer Bootcamp",
			image: "/WebDev.webp",
		},
		{
			name: "Google Developer Student Club, SCET",
			image: "/GDSC_Lead_Certi_1.webp",
		},
		{
			name: "30 days of Google Clound Program",
			image: "/Cloud.webp",
		},
		{
			name: "AIESEC, India",
			image: "/AIESEC.webp",
		},
	];

	return (
		<PageTransition>
			<div className="flex flex-col justify-center mt-20">
				<div className="flex items-center">
					<p className="text-gray-300 text-3xl font-semibold">
						<span className="text-emerald-400 mr-2">04.</span>
						Certifications
					</p>
					<hr className="ml-5 md:ml-10 border-gray-300 w-24 md:w-96" />
				</div>
				<div className="mt-10">
					{certificates.map((certificate, index) => (
						<CertificateCard key={index} props={certificate} />
					))}
				</div>
			</div>
		</PageTransition>
	);
}
