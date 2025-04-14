import { useEffect } from "react";
import HeroAbout from "./HeroAbout";
import Journey from "./Journey";
import NewsAbout from "./NewsAbout";
import Team from "./Team";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <HeroAbout />
      <Team />
      <Journey />
      <NewsAbout />
    </>
  );
};
export default About;
