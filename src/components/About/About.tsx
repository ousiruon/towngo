import { useEffect } from "react";
import HeroAbout from "./HeroAbout";
import Journey from "./Journey";
import NewsAbout from "./NewsAbout";
import Team from "./Team";
// Main component for the "About us" section
const About = () => {
  // Make sure to reset the scroll everytime the about us is opened
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
