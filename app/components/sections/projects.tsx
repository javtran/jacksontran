import Project from "../project";
import SectionHeader from "../sectionheader";

const Projects = () => {
  const data = [
    {
      title: "SF Ready Meals",
      project_url: "https://www.google.com/",
      github_url: "https://github.com./",
      description: `Resource platform that offers detailed information and locations of organizations 
      providing free hot meals to eleigible citizens through the SFHSA Congregate Meals Program`,
      skills: ["React", "Node.js", "Express.js"],
    },
  ];
  return (
    <div
      id="projects"
      className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
    >
      <div>
        <SectionHeader index={3} title="Projects"></SectionHeader>
        <Project {...data[0]}></Project>
      </div>
    </div>
  );
};

export default Projects;
