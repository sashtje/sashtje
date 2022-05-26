import {
  SiMarkdown,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiFramer,
  SiGit,
  SiGithub,
  SiWebpack,
  SiVisualstudiocode,
  SiGooglechrome,
  SiNpm,
  SiJest,
  SiAdobephotoshop,
  SiFigma,
  SiInkscape,
  SiTrello,
} from "react-icons/si";
import { GiOctopus, GiStoneBlock } from "react-icons/gi";
import { FaGithubAlt } from "react-icons/fa";

const codeSkills = [
  {
    icon: <SiMarkdown color="#000000" />,
    subtitle: "Markdown",
    iconDark: <SiMarkdown color="#dddddd" />,
  },
  { icon: <SiHtml5 color="#e34f26" />, subtitle: "Html" },
  { icon: <SiCss3 color="#1572b6" />, subtitle: "Css" },
  { icon: <SiSass color="#cc6699" />, subtitle: "Scss" },
  { icon: <SiJavascript color="#f7df1e" />, subtitle: "Js" },
  { icon: <SiTypescript color="#3178c6" />, subtitle: "Ts" },
  { icon: <SiNodedotjs color="#339933" />, subtitle: "Node" },
];

const libsSkills = [
  { icon: <SiReact color="#61dafb" />, subtitle: "React" },
  { icon: <SiRedux color="#764abc" />, subtitle: "Redux" },
  { icon: <SiFramer color="#0055ff" />, subtitle: "Framer-motion" },
];

const toolsSkills = [
  { icon: <SiGit color="#f05032" />, subtitle: "Git" },
  {
    icon: <SiGithub color="#181717" />,
    subtitle: "Github",
    iconDark: <SiGithub color="#dddddd" />,
  },
  { icon: <SiWebpack color="#8dd6f9" />, subtitle: "Webpack" },
  { icon: <SiVisualstudiocode color="#007acc" />, subtitle: "Vs Code" },
  { icon: <SiGooglechrome color="#4285f4" />, subtitle: "Dev Tools" },
  { icon: <SiNpm color="#cb3837" />, subtitle: "Npm" },
];

const testsSkills = [
  { icon: <SiJest color="#c21325" />, subtitle: "Jest" },
  { icon: <GiOctopus color="#ff4154" />, subtitle: "React Testing Library" },
];

const otherSkills = [
  { icon: <GiStoneBlock color="#1769ff" />, subtitle: "Bem" },
  { icon: <SiAdobephotoshop color="#31a8ff" />, subtitle: "Photoshop" },
  { icon: <SiFigma color="#f24e1e" />, subtitle: "Figma" },
  {
    icon: <SiInkscape color="#000000" />,
    subtitle: "Inkscape",
    iconDark: <SiInkscape color="#dddddd" />,
  },
  { icon: <SiTrello color="#0052cc" />, subtitle: "Trello" },
  { icon: <FaGithubAlt color="#fc6d26" />, subtitle: "GitHub Project" },
];

const skills = [
  {
    title: "Code:",
    titleRu: "Код:",
    skillsArray: codeSkills,
  },
  {
    title: "Libs:",
    titleRu: "Библиотеки:",
    skillsArray: libsSkills,
  },
  {
    title: "Tools:",
    titleRu: "Инструменты:",
    skillsArray: toolsSkills,
  },
  {
    title: "Tests:",
    titleRu: "Тесты:",
    skillsArray: testsSkills,
  },
  {
    title: "Other:",
    titleRu: "Другое:",
    skillsArray: otherSkills,
  },
];

export default skills;
