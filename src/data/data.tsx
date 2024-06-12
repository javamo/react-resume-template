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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Javamo Tech',
  description: "Jairo Vásquez developer website",
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
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jairo Vásquez`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Medellín based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Atlas Health</strong> helping hospital patients get financial aid through Philantropic sources.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Triathlon</strong>,
        playing my <strong className="text-stone-100">Piano</strong>, or more importantly{' '}
        <strong className="text-stone-100">playing with my daughter</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `I love computers and the impact they have in our current world. I believe technology
    can transform societies and more importantly, minds and lives.`,
  aboutItems: [
    {label: 'Location', text: 'Medellín, Colombia', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Colombian', Icon: FlagIcon},
    {label: 'Interests', text: 'Triathlon, Piano, Parenting', Icon: SparklesIcon},
    {label: 'Study', text: 'EAFIT University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Atlas Health', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Portuguese',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'Google Datastore',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [] 
// [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2009',
    location: 'EAFIT University',
    title: 'B. Sc. Computer Science',
    content: <p>Strong focus on algorithms, networking and software modeling</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: '2020 - Present',
    location: 'Atlas Health',
    title: 'Principal Engineer',
    content: (
      <div>
        <ul>
          <li>Re-architected the system components to allow rapid growth</li>
          <li>Automated the release process to allow continous updates across different components without disruptions</li>
          <li>Lead a Penetration testing using an outsourcing company</li>
          <li>Increased the engineering team size by 200%</li>
          <li>Improved the standards for quality assurance across the Engineering department</li>
          <li>Implemented SCRUM for the development process</li>
          <li>Developed a REST API using Python and MySQL</li>
          <li>Lead the re-design of the Typescript/React SPA</li>
          <li>Improved the existing ETL to reduce issues</li>
          <li>Implemented a robust CI/CD solution</li>
        </ul>
        <br/>
        <i>Technologies: Docker, Google Cloud, MySQL, Python, Typescript, Spark</i>
      </div>
    ),
  },
  {
    date: '2016 - 2020',
    location: 'Toptal',
    title: 'Senior FullStack Engineer',
    content: (
      <div>
        <p>
          Worked with multiple clients using the Toptal agency as intermediary. These clients include companies like: AdMass, Apps4gaps, Qbrio, NodeHost, Backstage and Rubrik.
        </p>
        <br/>
        <i>Technologies: Python, Typescript, React, PostgreSQL, MongoDB</i>
      </div>
    ),
  },
  {
    date: '2014 - 2016',
    location: 'RealMassive',
    title: 'Lead Backend Developer',
    content: (
      <div>
        <ul>
          <li>High available architecture development and design.</li>
          <li>Backend API design and implementation to support web and mobile clients. • Continuous deployment config and operation (GitHub + CircleCI).</li>
          <li>Scrum-like life-cycle implementation. (Jira + GitHub)</li>
          <li>Single page app with angular.js</li>
        </ul>
        <br/>
        <i>Technologies: Python, Flask, PostgreSQL, Google App Engine.</i>
      </div>
    ),
  },{
    date: '2012 - 2014',
    location: 'ScoreMat',
    title: 'CTO and Co-Founder',
    content: (
      <ul>
        <li>Web Development using python with Google App Engine, jinja2 and webapp2</li>
        <li>Automated testing</li>
        <li>API developed using Google Endpoints to handle the further work with iOS and
Android applications. Currently used from Javasacript</li>
      </ul>
    ),
  },{
    date: '2010 - 2014',
    location: 'Paymentez',
    title: 'Lead Developer',
    content: (
      <div>
        <p>
          Lead the development of the web platform and transactions engine from scratch for processing micro-payments of virtual goods. Currently it is integrated with major payment methods (online, offline and mobile) in Brazil, Mexico, Colombia, Chile, Argentina and Venezuela.
        </p>
        <br/>
        <i>Technologies: Python, Django, MySQL, AWS, Google App Engine.</i>
      </div>
    ),
  },{
    date: '2009 - 2010',
    location: 'Mentez SAS',
    title: 'Web Developer',
    content: (
      <div>
        <ul>
          <li>Developed several web applications on Orkut and Facebook</li>
          <li>Developed (Paymentez), a micro payments platform for virtual goods in Orkut, Facebook and Websites.</li>
        </ul>
        <br/>
        <i>Technologies: Google App Engine, Ruby on Rails and Amazon Web Services</i>
      </div>
    ),
  },
  {
    date: '2007 - 2009',
    location: 'Fluid Attacks',
    title: 'Projects Engineer',
    content: (
      <ul>
        <li>Web development using Django Python Web framework</li>
        <li>Process Compliance: ISO 2007, ISO 2000, CMMI</li>
        <li>Deployment of IT services for different clients using GNU/Debian and Xen</li>
        <li>Security Outsourcing for Bancolombia</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'Feel free to reach out using any of the following channels:',
  items: [
    {
      type: ContactType.Email,
      text: 'jairo.vasquez@gmail.com',
      href: 'mailto:jairo.vasquez@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/javamo',
      href: 'https://www.linkedin.com/in/javamo',
    },
    {
      type: ContactType.Instagram,
      text: '@jairovasquezm',
      href: 'https://www.instagram.com/jairovasquezm/',
    },
    {
      type: ContactType.Github,
      text: 'javamo',
      href: 'https://github.com/javamo',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/javamo'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/javamo/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jairovasquezm/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/javamo'},
];
