import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import SFReadyMeal from "../../../public/sfreadymeal.png";
import SpotiFile from "../../../public/spotifile.png";
import CovidPass from "../../../public/covidpass.png";
import Housemates from "../../../public/housemates.png";

const Projects = () => {
  const data = [
    {
      title: "SF Ready Meals",
      url: "https://sfreadymeals.herokuapp.com/",
      description: `Resource platform that offers detailed information and locations of organizations 
      providing free hot meals to eligible citizens through the SFHSA Congregate Meals Program`,
      links: [
        {
          title: "GitHub",
          url: "https://github.com/dev-mission/fellowship2022-meals",
        },
      ],
      skills: ["React", "Node.js", "Express.js", "Sequelize", "Heroku"],
      image: SFReadyMeal,
      image_alt: "screenshot of SF Ready Meals",
    },
    {
      title: "Spoti-File",
      url: "https://github.com/javtran/spoti-file",
      description: `Web app for visualizing personalized Spotify data. View detailed audio information about the tracks you listen to.`,
      skills: [
        "Next.js",
        "Tailwind CSS",
        "Express.js",
        "Vercel",
        "Spotify API",
      ],
      image: SpotiFile,
      image_alt: "image alternative text",
    },
    {
      title: "CovidPass",
      url: "https://github.com/codepathDemoApp/CovidPass",
      description: `iOS app to monitor user's COVID-related information, including vaccination status and more, employs QR codes to record their presence at various locations. 
      Each location is assigned a unique QR code, and the app user scans the QR code to log their presence a tthat particular place.`,
      skills: ["iOS", "Swift"],
      image: CovidPass,
      image_alt: "image alternative text",
    },
    {
      title: "Housemates",
      url: "https://github.com/KyleGong-alt/CSE_115_HOUSEMATES",
      description: `iOS app where users can establish schedules, organize chores, and establish house rules.`,
      links: [
        {
          title: "Presentation",
          url: "https://docs.google.com/presentation/d/1LpcS0schCROiWYrXRYiTocAgoXkuF8dv/edit?usp=sharing&ouid=116879712402200012066&rtpof=true&sd=true",
        },
      ],
      skills: ["iOS", "Swift", "Flask", "Python", "MySQL"],
      image: Housemates,
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
