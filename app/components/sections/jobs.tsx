import Link from "../../../public/link.svg";
import SectionHeader from "../sectionheader";
import Job from "../job";

const Jobs = () => {
  const data = [
    {
      company: "OpenStreetMap",
      company_url: "https://www.openstreetmap.org/",
      role: "Open Source Contributor",
      start_date: "2022",
      end_date: "Present",
      description: `Collaborating with other web developers globally on MapRoulette to implement new features 
        and tend to GitHub issues, including the UI of issue tracking system, administrative database analytics, and
        public pages.`,
      projects: [
        {
          title: "MapRoulette",
          url: "https://maproulette.org/",
        },
      ],
      skills: ["React", "Tailwind", "SCSS", "JavaScript", "Scala"],
    },
    {
      company: "Tech4Good Lab",
      company_url: "https://tech4good.soe.ucsc.edu/#/",
      role: "Research and Developer Intern",
      start_date: "Mar 2022",
      end_date: "Aug 2023",
      description: `Delivered high-quality, robust production code for diverse array of social computing 
        research projects aimed to support community flourishment in work, education, community engagement, and governance.
        Served as a lead developer, overseeing and guiding a team in the design, development, and implementation of 
        complex research web application.`,
      projects: [
        {
          title: "Annota",
          url: "https://annota.soe.ucsc.edu/",
        },
        {
          title: "Gratitude",
          url: "https://gratitude.soe.ucsc.edu/",
        },
      ],
      skills: ["Angular", "TypeScript", "SCSS", "Firebase"],
    },
    {
      company: "ChargePoint",
      company_url: "https://www.chargepoint.com/",
      role: "Software Engineer Intern",
      start_date: "Feb",
      end_date: "Mar 2023",
      description: `Worked with the test engineer team in designing and implementing new internal testing features and methods for their electrical vehicle chargers. 
        Collaborated with other interns to architect an automation infrastructure, effectively relacing highly manual tasks and enabling easier scalability.`,
      skills: ["Python", "Jenkins"],
    },
    {
      company: "DevMission, Code for San Francisco",
      company_url: "https://devmission.org/programs/",
      role: "Full Stack Fellow",
      start_date: "June",
      end_date: "Sep 2022",
      description: `Worked with other student fellows to ideate and design project concept. Developed, maintained, and shipped prototype product to targetted organization.`,
      skills: ["React", "Node.js", "Express.js", "Figma"],
    },
  ];
  return (
    <div
      id="experience"
      className="pt-16 sm:min-h-screen flex flex-col md:justify-center"
    >
      <div>
        <SectionHeader index={2} title="Experience"></SectionHeader>
        {data &&
          data.map((data) => {
            return <Job {...data}></Job>;
          })}
      </div>
    </div>
  );
};

export default Jobs;
