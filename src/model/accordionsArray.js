import { GiBrickWall } from "react-icons/gi";
import { BsFillBriefcaseFill, BsGlobe } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import Education from "./../components/Education";
import Languages from "./../components/Languages";

const accordionsArray = [
  {
    icon: <GiBrickWall />,
    title: "Skills",
    content: <Skills />,
    titleRu: "Навыки",
  },
  {
    icon: <BsFillBriefcaseFill />,
    title: "Projects",
    content: <Projects />,
    titleRu: "Проекты",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    content: <Education />,
    titleRu: "Образование",
  },
  {
    icon: <BsGlobe />,
    title: "Languages",
    content: <Languages />,
    titleRu: "Языки",
  },
];

export default accordionsArray;
