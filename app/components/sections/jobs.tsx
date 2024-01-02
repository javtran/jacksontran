import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import { jobs as data } from "../../data";
import InViewWrapper from "../inviewwrapper";

const Jobs = () => {
	return (
		<div
			id="experience"
			className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
		>
			<InViewWrapper>
				<SectionHeader index={2} title="Experience"></SectionHeader>
				{data &&
					data.map((data, i) => {
						return (
							<InViewWrapper key={i}>
								<SectionListItem {...data}></SectionListItem>
							</InViewWrapper>
						);
					})}
			</InViewWrapper>
		</div>
	);
};

export default Jobs;
