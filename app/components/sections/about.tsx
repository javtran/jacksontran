import Image from "next/image";
import GitHub from "../../../public/github.svg";
import LinkedIn from "../../../public/linkedin.svg";
import Instagram from "../../../public/instagram.svg";
import Email from "../../../public/email.svg";
import SectionHeader from "../sectionheader";

const About = () => {
	const iconClass = `block fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400 transform`;
	return (
		<header
			id="about"
			className="pt-24 lg:pt-0 flex flex-col sm:justify-center lg:flex-row lg:justify-around sm:items-center sm:gap-8 sm:min-h-screen"
		>
			<div className="flex sm:gap-16 lg:flex-col lg:gap-0">
				<Image
					src="selfportrait.jpg"
					alt="portrait of Jackson"
					className="rounded-full max-sm:w-0 max-sm:h-0 grayscale hover:grayscale-0 hover:outline-4 hover:outline-offset-8 hover:outline-sky-400 outline-none animation"
					width={300}
					height={300}
				/>
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl font-bold text-slate-200 mt-4 sm:text-5xl">
						<a href="/">Jackson Tran</a>
					</h1>
					<h2 className="text-lg font-medium text-slate-200 tracking-tight mt-4 sm:text-xl">
						Ex SWE Intern at ChargePoint
					</h2>
					<p className="max-w-xs mt-4 leading-normal text-slate-400">
						I build digital experiences for software users.
					</p>
					<ul className="flex gap-2 items-center mt-4 lg:hidden">
						<li>
							<a
								href="https://github.com/javtran"
								target="_blank"
								className={iconClass}
							>
								<GitHub className="fill-inherit" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jacksontran1/"
								target="_blank"
								className={iconClass}
							>
								<LinkedIn className="fill-inherit" />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/jxtrxn/"
								target="_blank"
								className={iconClass}
							>
								<Instagram className="fill-inherit" />
							</a>
						</li>
						<li>
							<a
								href="mailto:jackson.tran00@gmail.com"
								target="_blank"
								className={iconClass}
							>
								<Email className="fill-inherit" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="sm:pt-4 lg:w-1/2 lg:py-24 max-sm:mt-16">
				<SectionHeader index={1} title="About"></SectionHeader>
				<p className="mb-4 text-slate-400">
					Back in high school, I tried at making a prank web page to play a joke
					on my friends for April Fools, and got myself into the world of coding
					and web development. Jumping ahead to today, I hold a computer science
					degree and have had the opportunity to build software for{" "}
					<a
						href="https://maproulette.org/"
						target="_blank"
						className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
					>
						open-source communities
					</a>
					, an{" "}
					<a
						href="https://www.chargepoint.com/"
						target="_blank"
						className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
					>
						electrical vehicle infrastructure company
					</a>
					, and the{" "}
					<a
						href="https://www.sfhsa.org/"
						target="_blank"
						className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
					>
						human service agency
					</a>{" "}
					in my city.
				</p>
				<p className="mb-4 text-slate-400">
					I am currently seeking a role within the software engineering
					industry, focusing on{" "}
					<span className="font-medium text-slate-200">
						software development
					</span>
					. In my free time, I am continuing my engineering knowledge on the web
					and venturing into iOS and Android mobile development.
				</p>
				<p className="mb-4 text-slate-400">
					When I’m not at my computer, I usually prance around, dancing to{" "}
					<a
						href="https://www.youtube.com/watch?v=3TpMZja_zfQ"
						target="_blank"
						className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
					>
						K-pop
					</a>{" "}
					and singing my heart out.
				</p>
			</div>
		</header>
	);
};

export default About;
