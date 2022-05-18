import { GiBrickWall } from "react-icons/gi";
import { BsFillBriefcaseFill, BsGlobe } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import Education from "./../components/Education";
import Languages from "./../components/Languages";

const accordionsArray = [
  { icon: <GiBrickWall />, title: "Skills", content: <Skills /> },
  { icon: <BsFillBriefcaseFill />, title: "Projects", content: <Projects /> },
  { icon: <FaGraduationCap />, title: "Education", content: <Education /> },
  { icon: <BsGlobe />, title: "Languages", content: <Languages /> },
];

export default accordionsArray;
