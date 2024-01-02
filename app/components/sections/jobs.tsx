import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import {jobs as data} from "../../data";

const Jobs = () => {
  return (
    <div
      id="experience"
      className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
    >
      <div>
        <SectionHeader index={2} title="Experience"></SectionHeader>
        {data &&
          data.map((data, i) => {
            return (
              <div key={i}>
                <SectionListItem {...data}></SectionListItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Jobs;
