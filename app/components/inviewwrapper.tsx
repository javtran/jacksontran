import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export default function InViewWrapper({ children }: { children: ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			ref={ref}
			className="h-full"
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? "translateY(0)" : "translateY(20px)",
				transition: "opacity 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s, transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
			}}
		>
			{children}
		</div>
	);
}
