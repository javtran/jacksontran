import SectionHeader from "../sectionheader";
import SectionListItem from "../sectionlistitem";
import SFReadyMeal from "../../../public/sfreadymeal.png";
import SpotiFile from "../../../public/spotifile.png";
import CovidPass from "../../../public/covidpass.png";
import Housemates from "../../../public/housemates.png";
import Gratitude from "../../../public/gratitude.png";
import Annota from "../../../public/annota.png";
import BlackJak from "../../../public/blackjak.png";

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
      image_alt: "screenshot of Spoti-File",
    },
    {
      title: "Gratitude",
      url: "https://gratitude.soe.ucsc.edu/",
      description: `A platform that allows users to easily and efficiently share praise for others to help cultivate the habit of expressing gratitude within communities.`,
      skills: ["Angular", "TypeScript", "SCSS", "Firebase"],
      image: Gratitude,
      image_alt: "screenshot of Gratitude platform",
    },
    {
      title: "Annota",
      url: "https://annota.soe.ucsc.edu/#/",
      description: `A platform to learn, understand, and perform the qualitative research process through collaborative hands-on experience.`,
      skills: ["Angular", "TypeScript", "SCSS", "Firebase"],
      image: Annota,
      image_alt: "screenshot of Annota",
    },
    {
      title: "BlackJak",
      url: "https://javtran.github.io/black-jak/",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/javtran/black-jak",
        },
      ],
      description: `A classic casino game "Black Jack"`,
      skills: ["Gatsby", "React", "Styled Components", "Framer"],
      image: BlackJak,
      image_alt: "screenshot of Annota",
    },
    {
      title: "CovidPass",
      url: "https://github.com/codepathDemoApp/CovidPass",
      description: `iOS app to monitor user's COVID-related information, including vaccination status and more, employs QR codes to record their presence at various locations. 
      Each location is assigned a unique QR code, and the app user scans the QR code to log their presence a tthat particular place.`,
      skills: ["iOS", "Swift"],
      image: CovidPass,
      image_alt: "screenshot of CovidPass",
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
      image_alt: "screenshot of Housemates",
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
