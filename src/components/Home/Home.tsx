import Choices from "./Choices";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Steps from "./Steps";
import FAQ from "./FAQ";
import { useEffect } from "react";
//Main component for Home page
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Hero />
      <Choices />
      <Welcome />
      <Steps />
      <FAQ />
    </>
  );
};

export default Home;
