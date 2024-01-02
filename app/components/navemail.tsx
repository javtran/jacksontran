import { motion } from "framer-motion";

const NavEmail = () => {
	const variant = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={variant}
			className="fixed bottom-0 right-10 max-lg:hidden flex flex-col gap-2 items-center after:content-[' '] after:w-px after:h-20 after:bg-slate-200"
		>
			<a
				href="mailto:jackson.tran00@gmail.com"
				className="text-slate-200 tracking-widest vertical-text fill-slate-200 hover:text-sky-400 focus-visible:text-sky-400 transform 
    hover:-translate-y-2 focus-visible:-translate-y-2"
			>
				jackson.tran00@gmail.com
			</a>
		</motion.div>
	);
};

export default NavEmail;
