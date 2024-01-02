import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import { projects as data } from "../../data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
    >
      <div>
        <SectionHeader index={3} title="Projects"></SectionHeader>
        {data &&
          data.map((data, i) => {
            return (
              <div key={i}>
                <SectionListItem {...{ index: i, ...data }}> </SectionListItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
