import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";

const Projects = () => {
  const data = [
    {
      title: "SF Ready Meals",
      project_url: "https://www.google.com/",
      github_url: "https://github.com./",
      description: `Resource platform that offers detailed information and locations of organizations 
      providing free hot meals to eleigible citizens through the SFHSA Congregate Meals Program`,
      skills: ["React", "Node.js", "Express.js"],
      image:
        "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png",
      image_alt: "image alternative text",
    },
    {
      title: "SF Ready Meals",
      project_url: "https://www.google.com/",
      github_url: "https://github.com./",
      description: `Resource platform that offers detailed information and locations of organizations 
      providing free hot meals to eleigible citizens through the SFHSA Congregate Meals Program`,
      skills: ["React", "Node.js", "Express.js"],
      image:
        "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png",
      image_alt: "image alternative text",
    },
  ];
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
              <SectionListItem {...{ index: i, ...data }}> </SectionListItem>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
