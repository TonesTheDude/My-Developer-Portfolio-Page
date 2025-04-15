import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio',
  description: 'My coding portfolio journey!',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Anthony Langdon.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"></p>
    </>
  ),
  actions: [
    {
      href: '/AnthonyJamesLangdon.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a Penn State University graduate with a BS in Finance, born and raised in Erie, PA. My career has spanned roles at Erie Insurance and Truist, and I currently work as a Management and Budget Analyst for Orange County Government in Orlando, FL.

Outside of work, I’m passionate about creativity and adventure. I love drawing, cooking, and spending quality time with my daughter and son. Traveling is a big part of my life—I’ve had the opportunity to visit incredible places like Curaçao, Maui, New York City, Nashville, Dallas, and Atlanta.

Currently, I’m diving into a new challenge by completing a Full Stack Web Development Bootcamp, set to finish in May 2025. My goal is to transition into web development, where I can blend my analytical skills with a passion for building digital solutions.

Excited for the journey ahead and always eager to learn and grow!`,
  aboutItems: [
    {label: 'Location', text: 'Orlando, FL', Icon: MapIcon},
    {label: 'Age', text: '35', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Drawing, traveling, spending time with family', Icon: SparklesIcon},
    {label: 'Study', text: 'Penn State University and University of Central Florida', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Orange County Government', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'CSS',
      },
      {
        name: 'HTML',
      },
      {
        name: 'javascript',
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
      },
      {
        name: 'Express.js',
      },
      {
        name: 'SQL (PostgreSQL)',
      },
      {
        name: 'NoSQL',
      },
      {
        name: 'Python',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Watering Assistant',
    description: 'Create a website that generates a watering schedule for houseplants from the input by the user.',
    Live: 'https://reactresume.com',
    Repo: 'https://github.com/Osgravy/Project-1-Plants.git',
    image: porfolioImage1,
  },
  {
    title: 'Portfolio Website',
    description: 'Portfolio Page A portfolio page using my skillset to showcase and interact with potential employees.',
    Live: 'https://anthonylangdonportfolio.netlify.app/',
    Repo: 'https://github.com/TonesTheDude/My-Developer-Portfolio-Page.git',
    image: porfolioImage2,
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that allows you to see 5 day forecast for a city you search for.',
    Live: 'https://my-weather-dashboard-jh5e.onrender.com/',
    Repo: 'https://github.com/TonesTheDude/My-Weather-Dashboard.git',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    Live: 'https://reactresume.com',
    Repo: 'https://github',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    Live: 'https://reactresume.com',
    Repo: 'https://github',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Penn State University',
    title: 'Bachelor of Science in Finance',
    content: (
      <p>
        At Penn State University, I earned a Bachelor of Science in Finance, gaining a strong foundation in financial
        analysis, investment strategies, risk management, and corporate finance. My coursework covered key topics such
        as financial modeling, portfolio management, accounting principles, and economic forecasting. Through case
        studies and group projects, I developed critical thinking, data analysis, and problem-solving skills, which were
        essential for making informed financial decisions. Additionally, I honed Excel proficiency, financial statement
        analysis, and business communication skills, all of which have been valuable in my professional career. My time
        at Penn State also strengthened my ability to work in collaborative team environments, preparing me for roles in
        financial planning, budgeting, and strategic decision-making.
      </p>
    ),
  },
  {
    date: 'March 2003',
    location: 'University of Central Florida',
    title: 'Coding Bootcamp',
    content: (
      <p>
        I am currently attending a full-stack web development bootcamp, gaining hands-on experience in both front-end
        and back-end development, with a focus on HTML, CSS, React, TypeScript, Node.js, Express.js, and SQL databases.
        Through this program, I have learned to build and deploy dynamic web applications, manage databases, develop
        RESTful APIs, and implement authentication and security best practices. Additionally, I have strengthened my
        problem-solving, debugging, and version control skills, while collaborating in Agile team environments. This
        bootcamp has equipped me with the technical expertise and practical experience needed to pursue a career in web
        development.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - Present',
    location: 'Orange County Government',
    title: 'Management & Budget Analyst',
    content: (
      <p>
        As a Management and Budget Analyst for Orange County Government in Florida, I play a key role in financial
        planning, budget development, and fiscal analysis to ensure the effective allocation of public resources. My
        responsibilities include analyzing departmental budgets, forecasting expenditures, evaluating financial data,
        and providing strategic recommendations to support decision-making. I collaborate with various departments to
        optimize spending, improve operational efficiency, and maintain compliance with financial policies and
        regulations. Through my expertise in budgeting, financial analysis, and data-driven decision-making, I
        contribute to the county’s goal of maintaining fiscal responsibility while enhancing public services.
      </p>
    ),
  },
  {
    date: 'March 2022 - February 2024',
    location: 'Truist',
    title: 'Financial Crimes Analyst',
    content: (
      <p>
        As a Financial Crimes Analyst at Truist Bank, I was responsible for identifying, investigating, and mitigating
        financial fraud and suspicious activities to ensure compliance with anti-money laundering (AML) regulations and
        financial security protocols. I conducted in-depth transaction analysis, monitored account activity, and
        assessed risk patterns to detect potential fraud, money laundering, and other illicit financial activities.
        Collaborating with law enforcement and internal compliance teams, I helped develop reports and recommendations
        to strengthen fraud prevention strategies. My role required strong analytical skills, attention to detail, and
        knowledge of financial regulations, contributing to the bank’s commitment to maintaining a secure and compliant
        financial environment.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact me for more information.',
  items: [
    {
      type: ContactType.Email,
      text: 'alangdon1@gmail.com',
      href: 'mailto:alangdon1@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'TonesTheDude',
      href: 'https://github.com/TonesTheDude',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Anthony Langdon',
      href: 'https://linkedin.com/in/anthony-langdon-fis-b799871bb/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/TonesTheDude'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/anthony-langdon-fis-b799871bb/'},
];
