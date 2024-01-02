import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import { projects as data } from "../../data";
import InViewWrapper from "../inviewwrapper";

const Projects = () => {
	return (
		<div
			id="projects"
			className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
		>
			<InViewWrapper>
				<SectionHeader index={3} title="Projects"></SectionHeader>
				{data &&
					data.map((data, i) => {
						return (
							<InViewWrapper key={i}>
								<SectionListItem {...{ index: i, ...data }}> </SectionListItem>
							</InViewWrapper>
						);
					})}
			</InViewWrapper>
		</div>
	);
};

export default Projects;
