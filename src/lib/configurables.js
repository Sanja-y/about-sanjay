import { Github, Linkedin, Twitter } from "lucide-react";
import {
  LogoCss3,
  LogoExpress,
  LogoExpressLight,
  LogoFigma,
  LogoGit,
  LogoHtml5,
  LogoJavascript,
  LogoLimitscale,
  LogoLimitscaleLight,
  LogoMongoDB,
  LogoMui,
  LogoNextjs,
  LogoNodejs,
  LogoReact,
  LogoReduxJs,
  LogoSass,
  LogoStorybook,
  LogoTailwindcss,
  LogoTcs,
  LogoVsc,
  LogoOpenTurf,
  Interview,
  Sanjay
  
} from "../assets/logos";


export const server = import.meta.env.VITE_SERVER_URL;

export const NavbarLinks = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Skills",
    href: "skills",
  },
  {
    label: "My Experiences",
    href: "experience",
  },
  {
    label: 'Work',
    href: 'work',
  },
  // {
  //   label: 'Testimonials',
  //   href: 'testimonials',
  // },
  {
    label: "Contact",
    href: "contact",
  },
  // {
  //   label: "Blogs",
  //   href: "blogs",
  // },
];

export const skills = [
  {
    label: "Html 5",
    logo: LogoHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "Css 3",
    logo: LogoCss3,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Redux",
    logo: LogoReduxJs,
    url: "https://redux.js.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Material UI",
    logo: LogoMui,
    url: "https://mui.com/",
  },
  {
    label: "Visual Studio Code",
    logo: LogoVsc,
    url: "https://code.visualstudio.com/",
  },
];

export const experiences = [
  {
    logo: LogoOpenTurf,
    darkModeLogo: LogoOpenTurf,
    logoAlt: "OpenTurf Logo",
    position: "Frontend Developer",
    startDate: new Date(2023, 7),
    currentlyWorkHere: true,
    summary: [
      "Worked as a Frontend Developer handling various projects.",
      "Worked on creating optimized web-applications for automated-interviewing platforms such as StageOne",
      "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  // {
  //   logo: LogoTcs,
  //   logoAlt: "Tcs logo",
  //   position: "Junior Frontend developer",
  //   startDate: new Date(2021, 4),
  //   endDate: new Date(2022, 5),
  //   summary: [
  //     "Worked as a Junior frontend developer assisting with the development of a web application.",
  //     "Worked in stacks like React, Tailwindcss, Mui, Firebase and others.",
  //   ],
  // },
];

export const email = "sanjaym0919@gmail.com";
export const phone = "+91 6379370810";

export const socialLinks = [
  {
    label: "Github",
    icon: Github,
    url: "https://github.com/sanja-y",
  },
  // {
  //   label: "Twitter",
  //   icon: Twitter,
  //   url: "https://twitter.com/Anish2525",
  // },
  {
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sanjay-m-798702259/",
  },
];

export const myProjects = [
  {
    name: "StageOne - Interview Application automated via Artificial Intelligence",
    description:
      "Evaluate potential candidates by using artificial intelligence to validate answers. Questions can range from MCQ to video-based.",
    url: "null",
    previewImage: {Interview},
    technologies: [
      "React",
      "Javascript",
      "Tailwindcss",
      "Material UI",
      "Python (Backend)",
    ],
  },
  {
    name: "Moveesurfer - Movie Database",
    description:
      "Surf to find about your favourite movies and more!",
    url: "https://readmagic.vercel.app/",
    previewImage:
      "https://read-magic-server.vercel.app/public/homescreen-snapshot.JPG",
    technologies: [
      "React",
      "Javascript",
      "Tailwindcss",
      "Express.js",

    ],
  },
  {
    name: "Moveesurfer - Movie Database",
    description:
      "Surf to find about your favourite movies and more!",
    url: "https://readmagic.vercel.app/",
    previewImage:
      "https://read-magic-server.vercel.app/public/homescreen-snapshot.JPG",
    technologies: [
      "React",
      "Javascript",
      "Tailwindcss",
      "Express.js",

    ],
  },
];
