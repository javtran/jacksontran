import Link from "../../../public/link.svg";

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
  const jobElement = (data: any) => {
    return (
      <div className="grid sm:grid-cols-12 gap-4 mb-12">
        <p className="text-sm uppercase font-semibold text-slate-500 sm:col-span-2 tracking-wide mt-1 mb-2">
          {data.start_date} — {data.end_date}
        </p>
        <div className="grid sm:col-span-10">
          <a
            href={data.company_url}
            target="_blank"
            className="text-lg font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
          >
            <span>
              {data.role} · {data.company}
            </span>
          </a>
          <p className="mt-2">{data.description}</p>
          {data.projects && (
            <ul className="mt-2 flex flex-wrap">
              {data.projects.map((project: any, i: number) => {
                return (
                  <li key={i} className="mr-4 mt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-sm inline-flex items-center font-medium text-slate-300 hover:text-sky-400 focus-visible:text-sky-400 fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400"
                    >
                      <Link className="fill-inherit mr-1" />
                      <span>{project.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          {data.skills && (
            <ul className="mt-2 flex flex-wrap">
              {data.skills.map((skill: any, i: number) => {
                return (
                  <li key={i} className="mr-2 mt-2">
                    <span className="bg-sky-400/20 px-4 py-1 rounded-full text-sky-400 font-medium text-sm">
                      {skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          <ul className="mt-2 flex flex-wrap"></ul>
        </div>
      </div>
    );
  };
  return (
    <div
      id="experience"
      className="max-sm:mt-16 sm:h-screen flex flex-col md:justify-center"
    >
      <div>
        <h2 className="text-3xl uppercase text-slate-200 font-medium mb-6">
          <span className="text-sky-400">2.</span> Experience
        </h2>
        {data &&
          data.map((job) => {
            return jobElement(job);
          })}
      </div>
    </div>
  );
};

export default Jobs;
