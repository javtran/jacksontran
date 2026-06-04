import SectionHeader from "../sectionheader";
import ProjectCard from "../projectcard";
import { projects as data } from "../../data";
import InViewWrapper from "../inviewwrapper";

const Projects = () => {
	return (
		<div
			id="projects"
			className="pt-24 sm:min-h-screen flex flex-col md:justify-center"
		>
			<InViewWrapper>
				<SectionHeader index={3} title="Projects" />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{data.map((project, i) => (
						<InViewWrapper key={i}>
							<ProjectCard {...project} />
						</InViewWrapper>
					))}
				</div>
			</InViewWrapper>
		</div>
	);
};

export default Projects;
