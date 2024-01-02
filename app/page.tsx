"use client"; // This is a client component
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./components/sections/about";
import Navbar from "./components/navbar";
import Navcon from "./components/navcon";
import NavEmail from "./components/navemail";
import Jobs from "./components/sections/jobs";
import Projects from "./components/sections/projects";

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// framer variants settings
	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.6,
			},
		},
	};

	const item = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	if (!mounted) return <div></div>;

	return (
		<main>
			<div className="background fixed w-screen h-screen"></div>
			<motion.ul variants={container} initial="hidden" animate="visible">
				<motion.li variants={item}>
					<Navbar />
				</motion.li>
				<motion.li variants={item}>
					<div className="mx-auto min-h-screen max-w-screen-xl selection:bg-sky-400 selection:text-sky-900 px-8 max-sm:pt-20 md:px-16 lg:px-28">
						<About />
						<Jobs />
						<Projects />
					</div>
				</motion.li>
				<motion.li>
					<Navcon />
				</motion.li>
				<motion.li>
					<NavEmail />
				</motion.li>
			</motion.ul>
		</main>
	);
}
