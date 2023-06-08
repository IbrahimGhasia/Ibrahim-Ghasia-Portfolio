import CertificateCard from "../CertificateCard";
import PageTransition from "../PageTransition";
import certificates from "../../../utils/certificates";

export default function Certificate() {
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
