import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InViewWrapper({ children }: any) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref}>
			<span
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
				}}
			>
				{children}
			</span>
		</div>
	);
}
