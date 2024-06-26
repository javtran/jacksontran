import SFReadyMeal from "../public/projects/sfreadymeal.png";
import SpotiFile from "../public/projects/spotifile.png";
import CovidPass from "../public/projects/covidpass.png";
import Housemates from "../public/projects/housemates.png";
import Gratitude from "../public/projects/gratitude.png";
import Annota from "../public/projects/annota.png";
import BlackJak from "../public/projects/blackjak.png";
import SupportSFUSD from "../public/projects/supportsfusd.png";
import DynamicSurveys from "../public/projects/dynamicsurveys.png";

const jobs = [
  {
    company: "SF Civic Tech",
    url: "https://www.sfcivictech.org/",
    role: "Full Stack Developer",
    start_date: "Jun 2022",
    end_date: "Current",
    description: `Build, style, and ship high-quality websites, design systems, and digital experiences for a diverse array of civic tech 
		projects for clients including SF Unified School District, SF Human Service Agency, SF Fire Departments, and more. Solve civic and 
		social problems building creative technology through close collaborations with other developers, designers, data geeks, and citizen activists`,
    links: [
      {
        title: "Support SFUSD",
        url: "https://support-sfusd.vercel.app/",
      },
      {
        title: "SF Ready Meals",
        url: "https://github.com/dev-mission/fellowship2022-meals",
      },
      {
        title: "SF Life Line",
        url: "https://github.com/sfbrigade/sf-lifeline",
      },
    ],
    skills: [
      "React",
      "Prisma",
      "Vite",
      "StoryBook",
      "Fastify",
      "Tailwind",
      "Docker",
    ],
  },
  {
    company: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    role: "Front End Developer",
    start_date: "Sep 2022",
    end_date: "Sep 2023",
    description: `Collaborating with other web developers globally on MapRoulette to implement new features 
		and tend to GitHub issues, including the UI of issue tracking system, administrative database analytics, and
		public pages.`,
    links: [
      {
        title: "MapRoulette",
        url: "https://maproulette.org/",
      },
    ],
    skills: ["React", "Tailwind", "SCSS", "JavaScript", "Scala"],
  },
  {
    company: "Tech4Good Lab",
    url: "https://tech4good.soe.ucsc.edu/#/",
    role: "Lead Software Developer",
    start_date: "Mar 2022",
    end_date: "Aug 2023",
    description: `Delivered high-quality, robust production code for diverse array of social computing 
		research projects aimed to support community flourishment in work, education, community engagement, and governance.
		Served as a lead developer, overseeing and guiding a team in the design, development, and implementation of 
		complex research web application.`,
    links: [
      {
        title: "Gratitude",
        url: "https://gratitude.soe.ucsc.edu/",
      },
      {
        title: "Dynamic Surveys",
        url: "https://dynamic-surveys-dev-72d43.web.app/",
      },
      {
        title: "Annota",
        url: "https://annota.soe.ucsc.edu/",
      },
    ],
    skills: ["Angular", "NgRx", "TypeScript", "SCSS", "Firebase"],
  },
  {
    company: "ChargePoint",
    url: "https://www.chargepoint.com/",
    role: "Software Engineer Intern",
    start_date: "Feb",
    end_date: "Jun 2023",
    description: `Worked with the test engineer team in designing and implementing new internal testing features and methods for their electrical vehicle chargers. 
		Collaborated with other interns to architect an automation infrastructure, effectively relacing highly manual tasks and enabling easier scalability.`,
    skills: ["Python", "Jenkins"],
  },
  // {
  //   company: "DevMission, Code for San Francisco",
  //   url: "https://devmission.org/programs/",
  //   role: "Full Stack Fellow",
  //   start_date: "June",
  //   end_date: "Sep 2022",
  //   description: `Worked with other student fellows to ideate and design project concept. Developed, maintained, and shipped prototype product to targetted organization.`,
  //   skills: ["React", "Node.js", "Express.js", "Figma"],
  // },
];

const projects = [
  {
    title: "Support SFUSD",
    url: "https://support-sfusd.vercel.app/",
    description: `Discover how you can make a difference for the SFUSD schools through volunteering and donating. Start exploring schools now.`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/sfbrigade/support-sfusd",
      },
    ],
    skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "SQL"],
    image: SupportSFUSD,
    image_alt: "screenshot of Suport SFUSD",
  },
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
    title: "Dynamic Surveys",
    url: "https://dynamic-surveys-dev-72d43.web.app/",
    description: `A data collection platform that provides qualitative and quantitative data through clusters build on responses to open-ended questions`,
    skills: ["Angular", "TypeScript", "SCSS", "Firebase"],
    image: DynamicSurveys,
    image_alt: "screenshot of Dynamic Surveys platform",
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
    description: `A teaching tool for educators to help students learn qualitative analyis`,
    skills: ["Angular", "TypeScript", "SCSS", "Firebase"],
    image: Annota,
    image_alt: "screenshot of Annota",
  },
  {
    title: "Spoti-File",
    url: "https://github.com/javtran/spoti-file",
    description: `Web app for visualizing personalized Spotify data. View detailed audio information about the tracks you listen to.`,
    skills: ["Next.js", "Tailwind CSS", "Express.js", "Vercel", "Spotify API"],
    image: SpotiFile,
    image_alt: "screenshot of Spoti-File",
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

export { jobs, projects };
